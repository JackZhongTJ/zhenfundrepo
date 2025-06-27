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
      <main className="min-h-screen bg-[#c9bc9c0d] flex flex-col items-center py-6 sm:py-8 md:py-12 overflow-auto">
        {/* Header 区域 - 移动优先响应式 */}
        <div className="text-center mb-10 sm:mb-14 md:mb-18 lg:mb-22 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#804e21] mb-2">GenAI Startups</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-[#000000]">What ZhenFund Bets on</p>
        </div>
        
        {/* 分类与公司展示区 - 响应式宽度 */}
        <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-3 sm:px-6 md:px-8">
          <div id="portfolio-list" className="space-y-8 sm:space-y-12 md:space-y-16">
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
        <footer className="mt-12 sm:mt-16 md:mt-20 flex justify-center items-center">
          <img src="/zhen-fund_logo.png" alt="ZhenFund Logo" className="h-6 sm:h-8 md:h-10" style={{objectFit: 'contain'}} />
        </footer>
      </main>
    </>
  );
} 