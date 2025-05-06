import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["s3.nevaobjects.id"],
  },
  allowedDevOrigins: ["http://192.168.18.172:3000"],
};

export default nextConfig;
