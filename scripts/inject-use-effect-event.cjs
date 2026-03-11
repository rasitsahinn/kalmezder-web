/**
 * Webpack loader: injects useEffectEvent polyfill into Next.js bundled React.
 * Always cleans up any existing (potentially corrupt) useEffectEvent block,
 * then inserts a single clean polyfill. Idempotent.
 */
module.exports = function injectUseEffectEvent(source) {
  const isProd = this.resourcePath.endsWith('react.production.js');

  if (isProd) {
    const anchor = 'exports.useId = function () {';
    if (!source.includes(anchor)) return source;

    // Remove everything from any existing exports.useEffectEvent up to exports.useId
    // This handles: missing, single-line wrong, multi-line correct, corrupt double-patch
    if (source.includes('exports.useEffectEvent')) {
      source = source.replace(
        /exports\.useEffectEvent[\s\S]*?(?=exports\.useId)/,
        ''
      );
    }

    const polyfill =
      'exports.useEffectEvent = function useEffectEvent(callback) {\n' +
      '  var H = ReactSharedInternals.H;\n' +
      '  var ref = H.useRef(callback);\n' +
      '  H.useInsertionEffect(function() { ref.current = callback; }, [callback]);\n' +
      '  return function() { return ref.current.apply(this, arguments); };\n' +
      '};\n';

    return source.replace(anchor, polyfill + anchor);
  }

  // Development file
  const anchor = '    exports.useId = function () {';
  if (!source.includes(anchor)) return source;

  if (source.includes('exports.useEffectEvent')) {
    source = source.replace(
      /    exports\.useEffectEvent[\s\S]*?(?=    exports\.useId)/,
      ''
    );
  }

  const polyfill =
    '    exports.useEffectEvent = function useEffectEvent(callback) {\n' +
    '      var dispatcher = resolveDispatcher();\n' +
    '      var ref = dispatcher.useRef(callback);\n' +
    '      dispatcher.useInsertionEffect(function() { ref.current = callback; }, [callback]);\n' +
    '      return function() { return ref.current.apply(this, arguments); };\n' +
    '    };\n';

  return source.replace(anchor, polyfill + anchor);
};
