// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '', // Leave empty for default port
        pathname: '/**', // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig
