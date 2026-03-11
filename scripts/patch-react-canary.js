/**
 * Patches Next.js's bundled React canary to export `useEffectEvent`.
 * IDEMPOTENT: uses a marker comment — safe to run multiple times.
 */
const fs = require('fs');
const path = require('path');

const MARKER = '/* @kal-useEffectEvent-polyfill */';

const files = [
  {
    file: '../node_modules/next/dist/compiled/react/cjs/react.development.js',
    newPatch: `    ${MARKER}\n    exports.useEffectEvent = function useEffectEvent(callback) {\n      var dispatcher = resolveDispatcher();\n      var ref = dispatcher.useRef(callback);\n      dispatcher.useInsertionEffect(function() { ref.current = callback; }, [callback]);\n      return function() { return ref.current.apply(this, arguments); };\n    };\n`,
    // Only matches the old WRONG single-line patch (not our multi-line correct patch)
    oldPattern: /    exports\.useEffectEvent = function\(callback\)[^\n]+\n/,
    anchor: '    exports.useId = function () {',
  },
  {
    file: '../node_modules/next/dist/compiled/react/cjs/react.production.js',
    newPatch: `${MARKER}\nexports.useEffectEvent = function useEffectEvent(callback) {\n  var H = ReactSharedInternals.H;\n  var ref = H.useRef(callback);\n  H.useInsertionEffect(function() { ref.current = callback; }, [callback]);\n  return function() { return ref.current.apply(this, arguments); };\n};\n`,
    // Only matches the old WRONG single-line patch (not our multi-line correct patch)
    oldPattern: /exports\.useEffectEvent = function\(callback\)[^\n]+\n/,
    anchor: 'exports.useId = function () {',
  },
];

for (const { file, newPatch, oldPattern, anchor } of files) {
  const filePath = path.join(__dirname, file);

  if (!fs.existsSync(filePath)) {
    console.log(`patch-react-canary: ${path.basename(filePath)} not found, skipping`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Already correctly patched → skip (idempotency)
  if (content.includes(MARKER)) {
    console.log(`patch-react-canary: ${path.basename(filePath)} already patched, skipping`);
    continue;
  }

  // Remove old wrong single-line patch if present
  if (oldPattern.test(content)) {
    content = content.replace(oldPattern, '');
    console.log(`patch-react-canary: removed old patch from ${path.basename(filePath)}`);
  }

  // Insert correct polyfill before anchor
  if (content.includes(anchor)) {
    content = content.replace(anchor, newPatch + anchor);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`patch-react-canary: patched ${path.basename(filePath)}`);
  } else {
    console.log(`patch-react-canary: anchor not found in ${path.basename(filePath)}, skipping`);
  }
}
