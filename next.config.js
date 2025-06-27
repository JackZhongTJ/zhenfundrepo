/** @type {import('next').NextConfig} */
const nextConfig = {
  // 明确配置为标准 Next.js 模式（非静态导出）
  output: undefined,
  reactStrictMode: true,
  // 确保使用正确的构建输出目录
  distDir: '.next',
  // 禁用可能导致问题的实验性功能
  experimental: {},
  // 明确页面扩展名
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
};

module.exports = nextConfig; 