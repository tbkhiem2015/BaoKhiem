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
    xs: { iconSize: 'w-7 h-7', textSize: 'text-sm', subSize: 'text-[9px]' },
    sm: { iconSize: 'w-9 h-9', textSize: 'text-base', subSize: 'text-[10px]' },
    md: { iconSize: 'w-11 h-11', textSize: 'text-lg', subSize: 'text-[11px]' },
    lg: { iconSize: 'w-14 h-14', textSize: 'text-2xl', subSize: 'text-xs' },
    xl: { iconSize: 'w-20 h-20', textSize: 'text-3xl', subSize: 'text-sm' },
  };

  const current = dimensions[size];

  return (
    <div
      onClick={onClick}
      className={`group inline-flex items-center gap-3 select-none transition-all duration-300 ${onClick ? 'cursor-pointer hover:scale-[1.03]' : ''} ${className}`}
    >
      {/* Icon Emblem Container */}
      <div className={`relative ${current.iconSize} shrink-0`}>
        {/* Dynamic Holographic Ambient Glow */}
        <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-amber-400 rounded-2xl blur-xs opacity-50 group-hover:opacity-90 group-hover:blur-sm transition-all duration-300" />

        {/* High-Tech Vector Crest SVG */}
        <svg
          viewBox="0 0 512 512"
          className="relative w-full h-full drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="cmpSpaceGlow" cx="50%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="40%" stopColor="#0f172a" />
              <stop offset="85%" stopColor="#050814" />
              <stop offset="100%" stopColor="#02040a" />
            </radialGradient>

            <linearGradient id="cmpCyberRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="25%" stopColor="#818cf8" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="75%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#00f5ff" />
            </linearGradient>

            <linearGradient id="cmpPillarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#e0f2fe" />
              <stop offset="70%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            <linearGradient id="cmpChampionGold" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="30%" stopColor="#f59e0b" />
              <stop offset="60%" stopColor="#fbbf24" />
              <stop offset="85%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>

            <linearGradient id="cmpCyberNeon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5ff" />
              <stop offset="45%" stopColor="#0ea5e9" />
              <stop offset="85%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>

            <linearGradient id="cmpBracketLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5ff" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            <linearGradient id="cmpBracketRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>

          {/* Squircle Base */}
          <rect x="24" y="24" width="464" height="464" rx="116" fill="url(#cmpSpaceGlow)" />
          <rect x="24" y="24" width="464" height="464" rx="116" fill="none" stroke="url(#cmpCyberRim)" strokeWidth="12" opacity="0.9" />
          <rect x="36" y="36" width="440" height="440" rx="104" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="14 10" opacity="0.35" />

          {/* Left Code Bracket < */}
          <path
            d="M 124 184 L 66 256 L 124 328"
            fill="none"
            stroke="url(#cmpBracketLeft)"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 124 184 L 66 256 L 124 328"
            fill="none"
            stroke="#ffffff"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />

          {/* Right Code Bracket > */}
          <path
            d="M 388 184 L 446 256 L 388 328"
            fill="none"
            stroke="url(#cmpBracketRight)"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 388 184 L 446 256 L 388 328"
            fill="none"
            stroke="#ffffff"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />

          {/* Stem of K */}
          <rect x="172" y="118" width="46" height="272" rx="23" fill="url(#cmpPillarGrad)" />
          <rect x="187" y="132" width="16" height="244" rx="8" fill="#ffffff" opacity="0.8" />

          {/* Lower Diagonal Arm */}
          <path
            d="M 200 248 L 316 376 C 324 385 338 387 348 379 C 358 371 360 357 351 347 L 246 230 Z"
            fill="url(#cmpCyberNeon)"
          />
          <path d="M 218 248 L 328 368" stroke="#00f5ff" strokeWidth="10" strokeLinecap="round" />
          <path d="M 226 252 L 322 358" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />

          {/* Upper Diagonal Arm */}
          <path
            d="M 198 266 L 306 142 C 314 133 328 131 338 139 C 347 147 348 161 340 170 L 246 280 Z"
            fill="url(#cmpChampionGold)"
          />
          <path d="M 212 258 L 322 148" stroke="#fef08a" strokeWidth="10" strokeLinecap="round" />
          <path d="M 218 254 L 316 154" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />

          {/* Central Quantum Tech Node */}
          <circle cx="216" cy="256" r="16" fill="#00f5ff" />
          <circle cx="216" cy="256" r="8" fill="#ffffff" />

          {/* Champion Gold 4-Point Star */}
          <g transform="translate(348, 128)">
            <circle cx="0" cy="0" r="32" fill="#f59e0b" opacity="0.35" />
            <path
              d="M 0 -48 Q 6 -10 48 0 Q 6 10 0 48 Q -6 10 -48 0 Q -6 -10 0 -48 Z"
              fill="url(#cmpChampionGold)"
            />
            <path
              d="M 0 -24 Q 4 -5 24 0 Q 4 5 0 24 Q -4 5 -24 0 Q -4 -5 0 -24 Z"
              fill="#ffffff"
              transform="rotate(45)"
              opacity="0.8"
            />
            <circle cx="0" cy="0" r="12" fill="#ffffff" />
            <circle cx="-3" cy="-3" r="3" fill="#fef08a" />
          </g>

          {/* Balance Sparkle (Top-Left) */}
          <g transform="translate(138, 96)">
            <path d="M 0 -16 Q 3 -4 16 0 Q 3 4 0 16 Q -3 4 -16 0 Q -3 -4 0 -16 Z" fill="#38bdf8" />
            <circle cx="0" cy="0" r="4" fill="#ffffff" />
          </g>
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
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className={`font-extrabold text-blue-600 tracking-wide uppercase ${current.subSize}`}>
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
