// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.S3_BUCKET_HOSTNAME,
        port: '4566',
        pathname: '/**/**',
      },
    ],
  },
}

module.exports = withPWA(nextConfig)
