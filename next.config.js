/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },

}

module.exports = {
  ...nextConfig,
  async rewrites() {
    return [
      {
        source: '/profilehire/:path*',
        destination: '/profilehire/:path*',
      },
      {
        source: '/profilehire/hire/:path*',
        destination: '/hire/:path*',
      },
    ];
  },
};