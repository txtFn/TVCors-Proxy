
/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [],
  output: 'standalone',
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // CORS is handled dynamically by the route handlers using ALLOWED_ORIGINS.
};

export default nextConfig;
