import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns:[
          {
              protocol:'https',
              hostname:'cdn.tgdd.vn',
          },
          {
              protocol:'https',
              hostname:'cdnv2.tgdd.vn',
          },
      ]
  }
};

export default nextConfig;
