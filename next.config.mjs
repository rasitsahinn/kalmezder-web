import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Inject useEffectEvent polyfill into Next.js bundled React canary.
    // Using a webpack loader ensures it runs at build time, bypassing
    // any node_modules or .next/cache caching issues.
    config.module.rules.unshift({
      test: /compiled[/\\]react[/\\]cjs[/\\]react\.(development|production)\.js$/,
      use: [
        {
          loader: path.join(__dirname, 'scripts/inject-use-effect-event.cjs'),
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
