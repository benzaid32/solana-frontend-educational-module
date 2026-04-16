/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    // pino (used by a WalletConnect transitive dep) ships an optional import
    // of pino-pretty for dev-only log prettification. We run a prod build
    // only, so we mark it as external and silence the harmless warning.
    config.externals = [
      ...(config.externals ?? []),
      { "pino-pretty": "commonjs pino-pretty" },
    ];
    return config;
  },
};

export default nextConfig;
