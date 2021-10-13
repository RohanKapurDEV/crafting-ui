const withPlugins = require('next-compose-plugins');

/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')([
  // '@blocto/sdk',
  // '@project-serum/sol-wallet-adapter',
  // '@solana/wallet-adapter-angular',
  '@solana/wallet-adapter-base',
  '@solana/wallet-adapter-react',
  '@solana/wallet-adapter-wallets',
  // '@solana/wallet-adapter-ant-design',
  // '@solana/wallet-adapter-material-ui',
  '@solana/wallet-adapter-react-ui',
  // '@solana/wallet-adapter-bitkeep',
  // '@solana/wallet-adapter-bitpie',
  // '@solana/wallet-adapter-blocto',
  // '@solana/wallet-adapter-clover',
  // '@solana/wallet-adapter-coin98',
  // '@solana/wallet-adapter-ledger',
  // '@solana/wallet-adapter-mathwallet',
  // '@solana/wallet-adapter-phantom',
  // '@solana/wallet-adapter-safepal',
  // '@solana/wallet-adapter-slope',
  // '@solana/wallet-adapter-solflare',
  // '@solana/wallet-adapter-sollet',
  // '@solana/wallet-adapter-solong',
  // '@solana/wallet-adapter-torus',
  // '@solana/wallet-adapter-walletconnect',
]);

module.exports = withPlugins([withTM], {
  typescript: {
    // TODO undo this
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        crypto: false,
      };
    }

    return config;
  },
});
