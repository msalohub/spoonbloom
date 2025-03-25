/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static export for GitHub Pages
  assetPrefix: "./",  // ← Critical for local testing
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
    domains: [ // Allowed external image domains (optional if unoptimized)
      'i.pinimg.com',
      'storage.ko-fi.com',
      'dl.glitter-graphics.com',
      'img.icons8.com',
      't3.ftcdn.net'
    ],
  },
};

module.exports = nextConfig;