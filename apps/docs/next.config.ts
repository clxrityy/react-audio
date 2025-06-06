import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "commondatastorage.googleapis.com",
      }
    ]
  },
  turbopack: {}
};

const withNextra = nextra({
  contentDirBasePath: "/docs"
});
export default withNextra(nextConfig);
