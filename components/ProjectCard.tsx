import React from 'react';
import { Project, Language } from '../types';
import { getLocalizedText } from '../constants';
import { FileText, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';

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

  const isDeveloping = project.id === 'p-opentwin';
  const isGreenBin = project.id === 'p-greenbin';

  return (
    <div 
      onClick={handleClick}
      className={`group bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer ${
        isDeveloping 
          ? 'border-amber-300 shadow-md hover:shadow-2xl hover:border-amber-400' 
          : isGreenBin
          ? 'border-emerald-300 shadow-md hover:shadow-2xl hover:border-emerald-400'
          : 'border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200'
      }`}
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
              <span className={`px-3 py-1 text-xs font-black rounded-full shadow-md backdrop-blur-md flex items-center gap-1.5 uppercase tracking-wider ${
                isDeveloping 
                  ? 'bg-amber-400 text-slate-900 border border-amber-300 animate-pulse'
                  : 'bg-emerald-500 text-white border border-emerald-400'
              }`}>
                {isDeveloping && <span className="w-2 h-2 rounded-full bg-slate-900 animate-ping"></span>}
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
            className={`w-full py-3 px-4 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 shadow-sm ${
              isDeveloping
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-amber-200'
                : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-emerald-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>
              {isDeveloping 
                ? (lang === 'vi' ? 'Xem tài liệu OpenTwin_Project...' : 'View OpenTwin Context Document...')
                : (lang === 'vi' ? 'Xem tài liệu GreenBin AI...' : 'View GreenBin Documentation...')}
            </span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
