import React from 'react';
import CompanyCard from './CompanyCard';

interface Company {
  name: string;
  description: string;
  logo: string;
  url: string;
}

interface CategorySectionProps {
  id: string;
  displayName: string;
  icon: string;
  companies: Company[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ displayName, companies }) => {
  return (
    <div className="relative">
      {/* Category标签 - 悬浮在边框上 */}
      <div className="absolute -top-3 sm:-top-4 left-4 sm:left-6 z-10">
        <div className="bg-[#b08a5a] text-[#fdfdfd] text-sm sm:text-lg md:text-xl font-semibold italic px-3 sm:px-4 py-1 sm:py-1.5 rounded-l-lg rounded-r-full shadow-sm">
          {displayName}
        </div>
      </div>
      
      {/* 主容器 - 响应式内边距 */}
      <section className="bg-[#c9bc9c0d] rounded-2xl border-2 border-[#BFA16A] px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 pt-7 sm:pt-8 md:pt-10">
        {/* 网格布局 - 响应式列数和间距 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
          {companies.map((company) => (
            <CompanyCard key={company.name} {...company} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategorySection;