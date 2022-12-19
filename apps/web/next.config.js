const { i18n } = require('./next-i18next.config.js');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ['ui', 'modules'],
  },
  i18n,
};
