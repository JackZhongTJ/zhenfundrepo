/** @type {import('next').NextConfig} */
const nextConfig = {
  // 明确支持 src 目录
  reactStrictMode: true,
  
  // 重要：禁用 trailingSlash，这可能导致 404
  trailingSlash: false,
  
  // 确保图片优化正常工作
  images: {
    unoptimized: true
  },
  
  // 确保不是静态导出模式
  output: undefined,
  
  // 页面扩展名
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
};

module.exports = nextConfig; 