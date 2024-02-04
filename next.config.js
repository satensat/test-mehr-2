/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
    images: {
        remotePatterns: [
          {
           
            protocol: 'http',
            hostname: '192.168.10.195',
            port : '8090'
           
          },
        ],
      },
}

module.exports = nextConfig
