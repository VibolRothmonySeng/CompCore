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
    ],
  },
}

export default nextConfig
