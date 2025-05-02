/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['gpti'],
   webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = { ["node:buffer"]: false };
      }
  
      return config;
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lastfm.freetls.fastly.net',
          port: '',
          pathname: '/i/u/300x300/**'
        }
      ]
    }
  };


module.exports = nextConfig
