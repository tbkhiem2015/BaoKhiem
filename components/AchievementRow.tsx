import React from 'react';
import { Achievement, Language } from '../types';
import { getLocalizedText } from '../constants';
import { Trophy, Medal, Award, Star } from 'lucide-react';

interface AchievementRowProps {
  item: Achievement;
  lang: Language;
}

export const AchievementRow: React.FC<AchievementRowProps> = ({ item, lang }) => {
  const isNational = 
    item.id.includes('2025-1') || 
    item.id.includes('2026-1') || 
    item.badge?.vi?.includes('Quốc gia') || 
    item.badge?.vi?.includes('Toàn Quốc');

  const isFirstPrize = 
    item.title.vi.includes('Giải Nhất') || 
    item.badge?.vi?.includes('Giải Nhất') || 
    item.badge?.vi?.includes('Quán Quân');

  const isRegional = 
    item.id.includes('khuvuc') || 
    item.badge?.vi?.includes('Miền Nam');

  return (
    <div 
      className={`group relative flex flex-col md:flex-row md:items-center justify-between p-3.5 sm:px-5 sm:py-3.5 bg-white/95 rounded-2xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 gap-3 md:gap-4 ${
        isNational
          ? 'border-l-4 border-l-amber-500 border-slate-200/80 bg-gradient-to-r from-amber-50/30 via-white to-white hover:border-amber-300'
          : isFirstPrize
          ? 'border-l-4 border-l-amber-400 border-slate-200/80 bg-gradient-to-r from-amber-50/20 via-white to-white hover:border-amber-300'
          : isRegional
          ? 'border-l-4 border-l-indigo-500 border-slate-200/80 bg-gradient-to-r from-indigo-50/20 via-white to-white hover:border-indigo-300'
          : 'border-l-4 border-l-sky-500 border-slate-200/80 hover:border-sky-300'
      }`}
    >
      <div className="flex items-start md:items-center gap-3.5 min-w-0 flex-1">
        {/* Soft Rank Icon Box */}
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-105 ${
          isNational
            ? 'bg-gradient-to-br from-amber-500 to-yellow-500 text-white shadow-amber-200/80'
            : isFirstPrize
            ? 'bg-amber-100 text-amber-700 border border-amber-200/80'
            : isRegional
            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200/80'
            : 'bg-sky-100 text-sky-700 border border-sky-200/80'
        }`}>
          {isNational ? (
            <Trophy className="w-5 h-5 fill-white" />
          ) : isRegional ? (
            <Medal className="w-5 h-5" />
          ) : (
            <Award className="w-5 h-5" />
          )}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* Metadata: clean unboxed typographic line with separators */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs mb-1">
            {item.category && (
              <span className={`font-bold ${
                isNational || isFirstPrize 
                  ? 'text-amber-700' 
                  : isRegional 
                  ? 'text-indigo-700' 
                  : 'text-slate-700'
              }`}>
                {item.category}
              </span>
            )}

            {item.category && <span className="text-slate-300 font-light" aria-hidden="true">·</span>}

            <span className="font-medium text-slate-500">
              Năm {item.year}
            </span>

            {item.badge && (
              <>
                <span className="text-slate-300 font-light" aria-hidden="true">·</span>
                <span className={`font-semibold ${
                  isNational 
                    ? 'text-amber-800' 
                    : isFirstPrize 
                    ? 'text-amber-700' 
                    : isRegional 
                    ? 'text-indigo-700' 
                    : 'text-sky-700'
                }`}>
                  {getLocalizedText(item.badge, lang)}
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
            {getLocalizedText(item.title, lang)}
          </h4>

          {/* Description */}
          {item.description && (
            <p className="text-xs text-slate-500 font-normal leading-relaxed mt-0.5 line-clamp-1 sm:line-clamp-2">
              {getLocalizedText(item.description, lang)}
            </p>
          )}
        </div>
      </div>

      {/* Right side prestige callout */}
      <div className="shrink-0 flex items-center justify-between md:justify-end gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
        {isNational ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold rounded-lg shadow-xs">
            <Star className="w-3.5 h-3.5 fill-white" />
            <span>{lang === 'vi' ? 'Quán Quân Toàn Quốc' : 'National Champion'}</span>
          </span>
        ) : isFirstPrize ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200/80 text-xs font-bold rounded-lg">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'vi' ? 'Giải Nhất' : '1st Prize'}</span>
          </span>
        ) : isRegional ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-indigo-50 text-indigo-800 border border-indigo-200/80 text-xs font-bold rounded-lg">
            <Medal className="w-3.5 h-3.5 text-indigo-600" />
            <span>{lang === 'vi' ? 'Cấp Khu Vực' : 'Regional'}</span>
          </span>
        ) : (
          <span className="px-2.5 py-1 bg-slate-50 text-slate-600 border border-slate-200/70 text-xs font-medium rounded-lg">
            {getLocalizedText(item.badge, lang) || item.year}
          </span>
        )}
      </div>
    </div>
  );
};

export default AchievementRow;
