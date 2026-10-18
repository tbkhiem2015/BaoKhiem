import React from 'react';

interface BrandLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showSubtitle?: boolean;
  subtitleText?: string;
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  showSubtitle = true,
  subtitleText,
  className = '',
  onClick,
}) => {
  // Dimension mappings
  const dimensions = {
    xs: { iconSize: 'w-7 h-7', textSize: 'text-sm', subSize: 'text-[9px]', starSize: 'w-2 h-2' },
    sm: { iconSize: 'w-9 h-9', textSize: 'text-base', subSize: 'text-[10px]', starSize: 'w-2.5 h-2.5' },
    md: { iconSize: 'w-11 h-11', textSize: 'text-lg', subSize: 'text-[11px]', starSize: 'w-3 h-3' },
    lg: { iconSize: 'w-14 h-14', textSize: 'text-2xl', subSize: 'text-xs', starSize: 'w-4 h-4' },
    xl: { iconSize: 'w-20 h-20', textSize: 'text-3xl', subSize: 'text-sm', starSize: 'w-5 h-5' },
  };

  const current = dimensions[size];

  return (
    <div
      onClick={onClick}
      className={`group inline-flex items-center gap-3 select-none transition-transform ${onClick ? 'cursor-pointer hover:scale-[1.02]' : ''} ${className}`}
    >
      {/* Icon Emblem */}
      <div className={`relative ${current.iconSize} shrink-0`}>
        {/* Outer Glow on Hover */}
        <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-sky-400 to-amber-400 rounded-2xl blur-xs opacity-40 group-hover:opacity-80 transition-opacity" />

        {/* Embedded Vector Crest */}
        <svg
          viewBox="0 0 512 512"
          className="relative w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="navBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="35%" stopColor="#1e3a8a" />
              <stop offset="70%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="navBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
            <linearGradient id="navStemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </linearGradient>
            <linearGradient id="navGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
            <linearGradient id="navCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>

          {/* Squircle Card */}
          <rect
            x="24"
            y="24"
            width="464"
            height="464"
            rx="124"
            ry="124"
            fill="url(#navBgGrad)"
          />

          {/* Border */}
          <rect
            x="24"
            y="24"
            width="464"
            height="464"
            rx="124"
            ry="124"
            fill="none"
            stroke="url(#navBorderGrad)"
            strokeWidth="16"
            opacity="0.9"
          />

          {/* Code bracket < */}
          <path
            d="M 125 180 L 68 256 L 125 332"
            stroke="#38bdf8"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Code bracket > */}
          <path
            d="M 387 180 L 444 256 L 387 332"
            stroke="#38bdf8"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stem of K */}
          <rect
            x="180"
            y="135"
            width="42"
            height="242"
            rx="21"
            fill="url(#navStemGrad)"
          />

          {/* Lower Diagonal Leg */}
          <path
            d="M 205 244 L 312 364 C 318 371 328 373 336 368 C 344 362 346 351 340 343 L 244 235 Z"
            fill="url(#navCyanGrad)"
          />

          {/* Upper Diagonal Arm */}
          <path
            d="M 203 260 L 298 155 C 304 148 315 147 322 153 C 330 159 331 170 324 178 L 240 272 Z"
            fill="url(#navGoldGrad)"
          />

          {/* Champion Gold Star */}
          <g transform="translate(325, 135)">
            <path
              d="M 0 -40 Q 4 -8 40 0 Q 4 8 0 40 Q -4 8 -40 0 Q -4 -8 0 -40 Z"
              fill="url(#navGoldGrad)"
            />
            <circle cx="0" cy="0" r="8" fill="#ffffff" />
          </g>

          {/* Center Tech Node */}
          <circle cx="218" cy="256" r="9" fill="#38bdf8" />
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="leading-tight text-left">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors ${current.textSize}`}>
              Trần Bảo Khiêm
            </span>
          </div>
          {showSubtitle && (
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className={`font-bold text-blue-600 uppercase tracking-wider ${current.subSize}`}>
                {subtitleText || 'Lập trình viên nhí • Quán quân Tin học trẻ'}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
