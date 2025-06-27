/** @type {import('next').NextConfig} */
const nextConfig = {
  // 最小化配置，让 Vercel 自动处理
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  experimental: {
    // 禁用可能导致问题的实验性功能
  }
};

module.exports = nextConfig; 