import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ allow deploy even with lint errors
  },
};

export default nextConfig;
