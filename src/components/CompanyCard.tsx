import React from 'react';

interface CompanyCardProps {
  name: string;
  description: string;
  logo: string;
  url: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ name, description, logo, url }) => {
  const handleClick = () => {
    if (url && url.trim() !== '') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const hasUrl = url && url.trim() !== '';

  return (
    <div 
      className={`bg-transparent py-1.5 sm:py-2 md:py-3 px-1 sm:px-1.5 md:px-2 ${hasUrl ? 'cursor-pointer' : ''}`}
      onClick={hasUrl ? handleClick : undefined}
      role={hasUrl ? "button" : undefined}
      tabIndex={hasUrl ? 0 : undefined}
      onKeyDown={hasUrl ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      } : undefined}
    >
      <div className="flex items-start space-x-1.5 sm:space-x-2 md:space-x-2.5">
        {/* Logo - 响应式尺寸 */}
        <div className="flex-shrink-0 self-start">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg border border-[#804e21] overflow-hidden bg-white flex items-center justify-center">
            <img 
              src={`/logos/${logo}`} 
              alt={`${name} logo`} 
              className="w-full h-full object-contain"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
        
        {/* Company Info - 响应式字体 */}
        <div className="flex-1 min-w-0">
          <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-[#000000] truncate leading-tight">
            {name}
          </h3>
          <p className="text-[7px] sm:text-[9px] md:text-[10px] text-[#222222] leading-relaxed mt-0.5">
            <span 
              className="block"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard; 