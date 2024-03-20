/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ["image/webp"],
    domains: ["https://assets.vogue.com"],
  },
};

export default nextConfig;
