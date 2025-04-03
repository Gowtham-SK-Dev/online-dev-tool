/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Forces Next.js to generate static HTML files for Netlify
  trailingSlash: true, // Ensures URLs end with '/' to prevent 404 errors
  images: {
    unoptimized: true, // Avoids Next.js optimizations that might break in static export
  },
  reactStrictMode: true, // Helps catch potential issues during development
  swcMinify: true, // Enables minification for better performance
};

module.exports = nextConfig;
