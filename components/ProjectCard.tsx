import React from 'react';
import { Project, Language } from '../types';
import { getLocalizedText } from '../constants';
import { FileText, ArrowRight, Brain, Globe, BookOpen, Sparkles, Boxes } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  lang: Language;
  onOpenDoc?: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, lang, onOpenDoc }) => {
  const title = getLocalizedText(project.title, lang);
  const description = getLocalizedText(project.description, lang);
  const statusBadge = getLocalizedText(project.statusBadge, lang);
  const hasDoc = Boolean(project.docType && project.docType !== 'standard');

  const handleClick = () => {
    if (hasDoc && onOpenDoc) {
      onOpenDoc(project);
    } else if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  const isShineAI = project.docType === 'shineai';
  const isHanhTrinhXanh = project.docType === 'hanhtrinhxanh';
  const isVuiHocTV = project.docType === 'vuihoctiengviet';
  const isOpenTwin = project.docType === 'opentwin';
  const isGreenBin = project.docType === 'greenbin';

  const getCardBorder = () => {
    if (isShineAI) return 'border-purple-300 shadow-md hover:shadow-2xl hover:border-purple-500';
    if (isHanhTrinhXanh) return 'border-emerald-300 shadow-md hover:shadow-2xl hover:border-emerald-500';
    if (isVuiHocTV) return 'border-amber-300 shadow-md hover:shadow-2xl hover:border-amber-500';
    if (isOpenTwin) return 'border-amber-300 shadow-md hover:shadow-2xl hover:border-amber-400';
    if (isGreenBin) return 'border-teal-300 shadow-md hover:shadow-2xl hover:border-teal-400';
    return 'border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200';
  };

  const getBadgeStyle = () => {
    if (isShineAI) return 'bg-purple-600 text-white border border-purple-500';
    if (isHanhTrinhXanh) return 'bg-emerald-600 text-white border border-emerald-500';
    if (isVuiHocTV) return 'bg-amber-600 text-white border border-amber-500';
    if (isOpenTwin) return 'bg-amber-400 text-slate-900 border border-amber-300 animate-pulse';
    if (isGreenBin) return 'bg-teal-600 text-white border border-teal-500';
    return 'bg-blue-600 text-white border border-blue-500';
  };

  const getButtonGradient = () => {
    if (isShineAI) return 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-purple-200';
    if (isHanhTrinhXanh) return 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-emerald-200';
    if (isVuiHocTV) return 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-amber-200';
    if (isOpenTwin) return 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-amber-200';
    if (isGreenBin) return 'bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-teal-200';
    return 'bg-slate-900 hover:bg-blue-600 text-white';
  };

  const getButtonText = () => {
    if (isShineAI) return lang === 'vi' ? 'Xem Thuyết Minh ShineAI...' : 'View ShineAI Full Docs...';
    if (isHanhTrinhXanh) return lang === 'vi' ? 'Xem Thuyết Minh Hành Trình Xanh...' : 'View Green Journey Docs...';
    if (isVuiHocTV) return lang === 'vi' ? 'Xem Thuyết Minh Tiếng Việt 1...' : 'View Fun Vietnamese Docs...';
    if (isOpenTwin) return lang === 'vi' ? 'Xem tài liệu OpenTwin_Project...' : 'View OpenTwin Context...';
    if (isGreenBin) return lang === 'vi' ? 'Xem tài liệu GreenBin AI...' : 'View GreenBin Documentation...';
    return lang === 'vi' ? 'Xem tài liệu dự án' : 'View Project Docs';
  };

  return (
    <div 
      onClick={handleClick}
      className={`group bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer ${getCardBorder()}`}
    >
      <div>
        <div className="relative h-52 overflow-hidden bg-slate-100">
          <img 
            src={project.image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop";
            }}
          />

          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
            {statusBadge && (
              <span className={`px-3 py-1 text-xs font-black rounded-full shadow-md backdrop-blur-md flex items-center gap-1.5 uppercase tracking-wider ${getBadgeStyle()}`}>
                {isOpenTwin && <span className="w-2 h-2 rounded-full bg-slate-900 animate-ping"></span>}
                {isShineAI && <Brain className="w-3.5 h-3.5" />}
                {isHanhTrinhXanh && <Globe className="w-3.5 h-3.5" />}
                {isVuiHocTV && <BookOpen className="w-3.5 h-3.5" />}
                {isGreenBin && <Boxes className="w-3.5 h-3.5" />}
                {statusBadge}
              </span>
            )}

            {hasDoc && (
              <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-slate-900/80 backdrop-blur-md text-white flex items-center gap-1 shadow">
                <FileText className="w-3 h-3 text-blue-300" />
                <span>{project.docFileLabel?.split('.')[0] || 'Docs'}</span>
              </span>
            )}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex gap-1.5 flex-wrap">
              {project.tags.map(tag => (
                <span key={tag} className="text-[11px] font-bold px-2.5 py-0.5 bg-white/20 backdrop-blur-md text-white rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-black text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 pt-2">
        {hasDoc ? (
          <button
            type="button"
            className={`w-full py-3 px-4 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 shadow-sm ${getButtonGradient()}`}
          >
            <FileText className="w-4 h-4" />
            <span className="truncate">{getButtonText()}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>
        ) : (
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors pt-2 border-t border-slate-100">
            <span>{lang === 'vi' ? 'Dự án sáng tạo' : 'Creative project'}</span>
            <span className="flex items-center gap-1">
              {lang === 'vi' ? 'Chi tiết' : 'Details'} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
