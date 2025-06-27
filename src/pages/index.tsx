import React from 'react';
import Head from 'next/head';
import CategorySection from '../components/CategorySection';
import categories from '../data/categories.json';
import companies from '../data/companies.json';

export default function Home() {
  // 按 order 排序分类
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

  return (
    <>
      <Head>
        <title>GenAI Startups | ZhenFund Portfolio</title>
        <meta name="description" content="What ZhenFund Bets on - GenAI Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-[#FCF9F5] flex flex-col items-center py-12">
        {/* Header 区域 */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-[#8B5C2B] mb-3">GenAI Startups</h1>
          <p className="text-xl md:text-2xl text-[#6B4F1D]">What ZhenFund Bets on</p>
        </div>
        
        {/* 分类与公司展示区 - 核心响应式容器 */}
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="portfolio-list" className="space-y-16">
            {sortedCategories.map(category => {
              const companiesInCategory = companies
                .filter(c => c.category === category.id)
                .sort((a, b) => a.order - b.order);
              return (
                <CategorySection
                  key={category.id}
                  id={category.id}
                  displayName={category.displayName}
                  icon={category.icon}
                  companies={companiesInCategory}
                />
              );
            })}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-20 text-[#BFA16A] text-xl font-semibold">ZhenFund</footer>
      </main>
    </>
  );
} 