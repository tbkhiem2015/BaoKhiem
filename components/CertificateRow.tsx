import React from 'react';
import { Certificate, Language } from '../types';
import { getLocalizedText } from '../constants';
import { FileCheck, ShieldCheck, Eye, Copy, Check, Trophy, Medal, Award, ExternalLink } from 'lucide-react';

interface CertificateRowProps {
  cert: Certificate;
  lang: Language;
  onOpenModal: (cert: Certificate) => void;
  onCopyCode: (code: string, id: string) => void;
  isCopied: boolean;
  imageSrc: string;
}

export const CertificateRow: React.FC<CertificateRowProps> = ({
  cert,
  lang,
  onOpenModal,
  onCopyCode,
  isCopied,
  imageSrc
}) => {
  const isNational = cert.badgeType === 'national';
  const isRegional = cert.badgeType === 'regional';

  return (
    <div 
      className={`group relative flex flex-col md:flex-row md:items-center justify-between p-3.5 sm:px-5 sm:py-3.5 bg-white/95 rounded-2xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 gap-3 md:gap-4 ${
        isNational
          ? 'border-l-4 border-l-amber-500 border-slate-200/80 bg-gradient-to-r from-amber-50/30 via-white to-white hover:border-amber-300'
          : isRegional
          ? 'border-l-4 border-l-indigo-500 border-slate-200/80 bg-gradient-to-r from-indigo-50/20 via-white to-white hover:border-indigo-300'
          : 'border-l-4 border-l-sky-500 border-slate-200/80 hover:border-sky-300'
      }`}
    >
      <div className="flex items-start md:items-center gap-3.5 min-w-0 flex-1">
        {/* Certificate Document Thumbnail */}
        <div 
          onClick={() => onOpenModal(cert)}
          className="relative w-16 h-12 sm:w-18 sm:h-13 rounded-xl overflow-hidden border border-slate-200/90 bg-slate-900 shrink-0 cursor-pointer group/thumb shadow-xs hover:ring-2 hover:ring-amber-400 hover:border-transparent transition-all flex items-center justify-center"
          title={lang === 'vi' ? 'Nhấp xem ảnh bằng khen phóng to' : 'Click to inspect certificate'}
        >
          <img 
            src={imageSrc} 
            alt={getLocalizedText(cert.awardTitle, lang)}
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
              const fallback = (e.target as HTMLElement).nextElementSibling;
              if (fallback) (fallback as HTMLElement).style.display = 'flex';
            }}
            className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-108"
            loading="lazy"
          />
          <div 
            style={{ display: 'none' }}
            className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-50 text-amber-900 flex flex-col items-center justify-center p-1 text-[9px] font-bold text-center leading-tight"
          >
            <Award className="w-3.5 h-3.5 text-amber-600 mb-0.5" />
            <span>{cert.division}</span>
          </div>
          <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[1px]">
            <Eye className="w-4 h-4 text-white drop-shadow" />
          </div>
        </div>

        {/* Details Block */}
        <div className="min-w-0 flex-1">
          {/* Typographic Metadata Header (Anti-slop: clean text with dividers) */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs mb-1">
            {/* Level indicator */}
            <span className={`inline-flex items-center gap-1 font-bold ${
              isNational
                ? 'text-amber-700'
                : isRegional
                ? 'text-indigo-700'
                : 'text-sky-700'
            }`}>
              {isNational ? (
                <Trophy className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              ) : isRegional ? (
                <Medal className="w-3.5 h-3.5 text-indigo-500" />
              ) : (
                <Award className="w-3.5 h-3.5 text-sky-500" />
              )}
              <span>{cert.level[lang]}</span>
            </span>

            <span className="text-slate-300 font-light" aria-hidden="true">·</span>

            {/* Division */}
            <span className="font-semibold text-slate-700">
              {cert.division}
            </span>

            <span className="text-slate-300 font-light" aria-hidden="true">·</span>

            {/* Year */}
            <span className="font-medium text-slate-500">
              {cert.year}
            </span>

            {/* Decision No if exists */}
            {cert.decisionNo && (
              <>
                <span className="text-slate-300 font-light" aria-hidden="true">·</span>
                <span className="font-mono text-[11px] text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded">
                  {cert.decisionNo}
                </span>
              </>
            )}

            {/* Format Code */}
            <span className="text-slate-300 font-light hidden sm:inline" aria-hidden="true">·</span>
            <span className="font-mono text-[10px] text-slate-400 hidden sm:inline">
              Mã: {cert.code}
            </span>
          </div>

          {/* Award Title */}
          <h3 
            onClick={() => onOpenModal(cert)}
            className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug cursor-pointer line-clamp-1"
          >
            {getLocalizedText(cert.awardTitle, lang)}
          </h3>

          {/* Issuer & Signer Context */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] sm:text-xs text-slate-500 mt-1">
            <span className="font-medium text-slate-600 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{getLocalizedText(cert.issuer, lang)}</span>
            </span>
            {cert.date && (
              <>
                <span className="text-slate-300 font-light" aria-hidden="true">·</span>
                <span className="text-slate-400">{cert.date}</span>
              </>
            )}
            {cert.description && (
              <>
                <span className="text-slate-300 font-light hidden lg:inline" aria-hidden="true">·</span>
                <span className="text-slate-400 hidden lg:inline line-clamp-1 max-w-sm">
                  {getLocalizedText(cert.description, lang)}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="shrink-0 flex items-center justify-between md:justify-end gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
        <button
          type="button"
          onClick={() => onOpenModal(cert)}
          className="px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-md hover:shadow-amber-500/20 transition-all transform hover:scale-102 active:scale-95 flex items-center gap-1.5 cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{lang === 'vi' ? 'Xem Bằng' : 'View'}</span>
        </button>

        <button
          type="button"
          onClick={() => onCopyCode(cert.code, cert.id)}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border flex items-center gap-1.5 cursor-pointer active:scale-95 ${
            isCopied
              ? 'bg-emerald-50 border-emerald-300 text-emerald-700 shadow-xs'
              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs'
          }`}
          title={lang === 'vi' ? 'Sao chép mã bằng khen chuẩn' : 'Copy standard certificate code'}
        >
          {isCopied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === 'vi' ? 'Đã chép' : 'Copied'}</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>{lang === 'vi' ? 'Mã' : 'Code'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CertificateRow;
