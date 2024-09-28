// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdna.pcpartpicker.com',
        pathname: '/static/forever/images/product/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/I/**', // Adjust the pathname if needed based on the image paths you're using
      },
    ],
  },
}

export default nextConfig
