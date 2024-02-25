/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        unoptimized: true,
      },
    basePath: '/documentation', 
    output: 'export',
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  }

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
  })
   
  module.exports = {
    ...withNextra(),
    ...nextConfig,
  };