const { i18n } = require('./next-i18next.config');
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  // TODO: Change this for production
  reloadOnPrerender: process.env.NODE_ENV === 'production' ? false : true,
};

module.exports = withContentlayer(nextConfig);
