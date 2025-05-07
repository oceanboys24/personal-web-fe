import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  images: {
    domains: ["s3.nevaobjects.id"],
  },
  allowedDevOrigins: ["http://202.10.42.175:3000"],
};

export default nextConfig;
