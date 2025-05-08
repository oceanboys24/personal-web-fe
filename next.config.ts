import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  images: {
    domains: ["s3.nevaobjects.id"],
  },
  allowedDevOrigins: ["https://api.alfiandirizki.com"],
};

export default nextConfig;
