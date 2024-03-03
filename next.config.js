/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
      unoptimized: true,
    },
  basePath: '/documentation', 
  async redirects() {
    return [
        {
            source: '/',
            destination: '/documentation',
            basePath: false,
            permanent: false
        }
    ]
  },
    output: 'export'
  }

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    staticImage: true
  })
   
  module.exports = {
    ...withNextra(),
    ...nextConfig,
  };