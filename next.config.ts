import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.saunders-simmons.co.uk',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
