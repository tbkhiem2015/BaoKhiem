import React, { useState, useEffect } from 'react';
import { Language, Project } from '../types';
import { 
  X, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink, 
  Cpu, 
  Sparkles, 
  Layers, 
  BookOpen, 
  RefreshCw, 
  CheckCircle, 
  Boxes,
  Heart,
  Gamepad2,
  Brain,
  Award,
  Globe
} from 'lucide-react';
import { 
  SHINEAI_METADATA,
  SHINEAI_SECTIONS,
  HANHTRINHXANH_METADATA,
  HANHTRINHXANH_SECTIONS,
  VUIHOCTIENGVIET_METADATA,
  VUIHOCTIENGVIET_SECTIONS,
  OPENTWIN_METADATA, 
  OPENTWIN_SECTIONS, 
  GREENBIN_METADATA, 
  GREENBIN_SECTIONS 
} from '../data/projectDocs';

interface ProjectDocModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const ProjectDocModal: React.FC<ProjectDocModalProps> = ({ project, isOpen, onClose, lang }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'raw'>('overview');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setActiveTab('overview');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isShineAI = project.docType === 'shineai';
  const isHanhTrinhXanh = project.docType === 'hanhtrinhxanh';
  const isVuiHocTV = project.docType === 'vuihoctiengviet';
  const isOpenTwin = project.docType === 'opentwin';
  const isGreenBin = project.docType === 'greenbin';

  const getHeaderGradient = () => {
    if (isShineAI) return 'bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-800';
    if (isHanhTrinhXanh) return 'bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-700';
    if (isVuiHocTV) return 'bg-gradient-to-r from-amber-600 via-orange-600 to-rose-700';
    if (isGreenBin) return 'bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700';
    return 'bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900';
  };

  const getDocSubtitle = () => {
    if (isShineAI) return SHINEAI_METADATA.role;
    if (isHanhTrinhXanh) return HANHTRINHXANH_METADATA.role;
    if (isVuiHocTV) return VUIHOCTIENGVIET_METADATA.role;
    if (isOpenTwin) return OPENTWIN_METADATA.role;
    if (isGreenBin) return GREENBIN_METADATA.tagline[lang];
    return '';
  };

  const getSections = () => {
    if (isShineAI) return SHINEAI_SECTIONS;
    if (isHanhTrinhXanh) return HANHTRINHXANH_SECTIONS;
    if (isVuiHocTV) return VUIHOCTIENGVIET_SECTIONS;
    if (isOpenTwin) return OPENTWIN_SECTIONS;
    if (isGreenBin) return GREENBIN_SECTIONS;
    return [];
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-6 sm:p-8 text-white relative flex-shrink-0 ${getHeaderGradient()}`}>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-black rounded-full uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5" />
                  {project.docFileLabel || 'ThuyetMinh_Project.md'}
                </span>

                {isShineAI && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-300 text-purple-950 text-xs font-black rounded-full uppercase tracking-wider">
                    <Brain className="w-3.5 h-3.5" />
                    AI & Special EdTech
                  </span>
                )}

                {isHanhTrinhXanh && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-300 text-emerald-950 text-xs font-black rounded-full uppercase tracking-wider">
                    <Globe className="w-3.5 h-3.5" />
                    Scratch 3.0 & AI
                  </span>
                )}

                {isVuiHocTV && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-300 text-amber-950 text-xs font-black rounded-full uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5" />
                    GDPT 2018
                  </span>
                )}

                {isOpenTwin && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-slate-900 text-xs font-black rounded-full uppercase tracking-wider animate-pulse">
                    <Sparkles className="w-3.5 h-3.5" />
                    {lang === 'vi' ? 'Đang phát triển' : 'In Development'}
                  </span>
                )}

                {isGreenBin && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-300 text-emerald-950 text-xs font-black rounded-full uppercase tracking-wider">
                    <Boxes className="w-3.5 h-3.5" />
                    STEM & Robotics
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {typeof project.title === 'string' ? project.title : project.title[lang]}
              </h2>

              <p className="text-white/85 text-sm sm:text-base max-w-2xl font-medium leading-snug">
                {getDocSubtitle()}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-all transform active:scale-95 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Tabs inside Header */}
          <div className="flex gap-2 mt-6 border-b border-white/20 pb-0 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-white text-white'
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              {lang === 'vi' ? 'Tổng quan & Ý tưởng' : 'Overview & Idea'}
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`px-4 py-2 text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'details'
                  ? 'border-white text-white'
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              {lang === 'vi' ? 'Kiến trúc & Phân hệ' : 'Architecture & Modules'}
            </button>
            <button
              onClick={() => setActiveTab('raw')}
              className={`px-4 py-2 text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'raw'
                  ? 'border-white text-white'
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              {lang === 'vi' ? 'Bản thuyết minh đầy đủ' : 'Full Documentation'}
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6 text-slate-700">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* SHINEAI OVERVIEW */}
              {isShineAI && (
                <>
                  <div className="p-6 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 border border-purple-200 rounded-3xl space-y-3">
                    <span className="text-xs font-black text-purple-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                      Thông điệp cốt lõi
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                      "{SHINEAI_METADATA.motto}"
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      ShineAI xây dựng hệ thống AI đa lớp gồm: Phân tích bài làm tức thì, phát hiện xu hướng học tập dài hạn, tự động đề xuất lộ trình tháng và chatbot giao tiếp thích ứng theo từng vai trò (bé, cha mẹ, thầy cô).
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-purple-50/70 border border-purple-100 rounded-2xl">
                      <span className="text-xs font-black text-purple-700 uppercase">Đối tượng hỗ trợ</span>
                      <h4 className="font-extrabold text-slate-900 text-base mt-1">Trẻ ASD & ADHD</h4>
                      <p className="text-slate-600 text-xs mt-1">Học sinh rối loạn phổ tự kỷ, tăng động giảm chú ý và học sinh tiểu học cần môi trường trực quan.</p>
                    </div>

                    <div className="p-5 bg-indigo-50/70 border border-indigo-100 rounded-2xl">
                      <span className="text-xs font-black text-indigo-700 uppercase">Mô hình AI riêng</span>
                      <h4 className="font-extrabold text-slate-900 text-base mt-1">ShineLM (Fine-tuned Gemma)</h4>
                      <p className="text-slate-600 text-xs mt-1">Huấn luyện chuyên biệt từ Gemma với 100 mẫu dữ liệu giáo dục và thấu cảm tâm lý trẻ.</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3">Công nghệ phát triển</h4>
                    <div className="flex flex-wrap gap-2">
                      {SHINEAI_METADATA.techStack.map(tech => (
                        <span key={tech} className="px-3.5 py-1.5 bg-slate-100 text-slate-800 text-xs font-bold rounded-xl">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* HÀNH TRÌNH XANH OVERVIEW */}
              {isHanhTrinhXanh && (
                <>
                  <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl space-y-3">
                    <span className="text-xs font-black text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-emerald-600" />
                      Mục đích & Ý nghĩa nhân văn
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      Đồng cảm với nhân viên vệ sinh môi trường & nâng cao ý thức xanh
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Công việc dọn vệ sinh rác thải luôn nặng nhọc và nguy hiểm. Trò chơi mô phỏng chân thực thử thách quét dọn rác trên đường phố và dưới đáy biển để các bạn học sinh thấu hiểu, trân quý công lao của cô chú lao công và cùng chung tay bảo vệ Trái Đất.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-sky-50 border border-sky-100 rounded-2xl">
                      <span className="px-2.5 py-0.5 bg-sky-600 text-white text-[10px] font-black rounded uppercase">Cửa 1</span>
                      <h4 className="font-extrabold text-slate-900 text-base mt-2">Dọn rác trên đường phố</h4>
                      <p className="text-slate-600 text-xs mt-1">Điều khiển nhân viên vệ sinh dùng chổi, tránh xe cộ để không bị trừ điểm, nâng cấp lên xe gom rác.</p>
                    </div>

                    <div className="p-5 bg-teal-50 border border-teal-100 rounded-2xl">
                      <span className="px-2.5 py-0.5 bg-teal-600 text-white text-[10px] font-black rounded uppercase">Cửa 2</span>
                      <h4 className="font-extrabold text-slate-900 text-base mt-2">Dọn rác dưới đáy biển</h4>
                      <p className="text-slate-600 text-xs mt-1">Thợ lặn thu gom rác trôi dạt tự do, tránh cá mập hung dữ, hướng tới mốc 100 điểm vinh quang.</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3">Công cụ AI sáng tạo đã ứng dụng</h4>
                    <div className="flex flex-wrap gap-2">
                      {HANHTRINHXANH_METADATA.techStack.map(tech => (
                        <span key={tech} className="px-3.5 py-1.5 bg-slate-100 text-slate-800 text-xs font-bold rounded-xl">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* VUI HỌC TIẾNG VIỆT OVERVIEW */}
              {isVuiHocTV && (
                <>
                  <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-3xl space-y-3">
                    <span className="text-xs font-black text-amber-700 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      Bộ sách Chân Trời Sáng Tạo (GDPT 2018)
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      Học chữ cái, âm vần Tiếng Việt lớp 1 trực quan & hứng thú
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Phần mềm bám sát 19 bài học chuẩn, kết hợp công nghệ tương tác mô phỏng, luyện gõ phím 10 ngón và các trò chơi thú vị giúp học sinh tự tin tiếp thu tiếng Việt mà không cảm thấy áp lực.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-center">
                      <div className="text-2xl font-black text-amber-600 mb-1">19</div>
                      <div className="text-xs font-bold text-slate-600">Bài học âm vần</div>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-center">
                      <div className="text-2xl font-black text-rose-600 mb-1">10+</div>
                      <div className="text-xs font-bold text-slate-600">Dạng bài tập & Game</div>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-center">
                      <div className="text-2xl font-black text-blue-600 mb-1">10 Ngón</div>
                      <div className="text-xs font-bold text-slate-600">Luyện gõ bàn phím</div>
                    </div>
                  </div>
                </>
              )}

              {/* OPENTWIN OVERVIEW */}
              {isOpenTwin && (
                <>
                  <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-700 flex items-center justify-center font-black">⚡</div>
                      <div>
                        <h4 className="font-black text-amber-900 text-sm">
                          {lang === 'vi' ? 'Trạng thái dự án: Đang phát triển' : 'Status: In Active Development'}
                        </h4>
                        <p className="text-amber-700 text-xs">Phiên bản kiến trúc v5.0 chuẩn bị cho cuộc thi Sáng tạo kỹ thuật</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-amber-200/60 text-amber-900 font-black text-xs rounded-full">v5.0</span>
                  </div>

                  <div className="p-6 bg-slate-900 text-white rounded-3xl shadow-md space-y-3">
                    <div className="flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" />
                      {lang === 'vi' ? 'Triết lý cốt lõi' : 'Core Philosophy'}
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed font-semibold text-slate-200">
                      "{OPENTWIN_METADATA.coreMotto[lang]}"
                    </p>
                  </div>
                </>
              )}

              {/* GREENBIN OVERVIEW */}
              {isGreenBin && (
                <>
                  <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <span className="text-xs font-black text-emerald-700 uppercase tracking-wider">Mô hình STEM Môi trường</span>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">Robot Phân Loại Rác Tự Động Chi Phí Thấp</h3>
                      </div>
                      <a href={GREENBIN_METADATA.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-md shadow-emerald-200 transition-all cursor-pointer">
                        <ExternalLink className="w-4 h-4" />
                        greenbin.ai.studio
                      </a>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Sử dụng camera chụp hình ảnh, AI nhận diện và Raspberry Pi 4 điều khiển servo lật máng trượt bằng bìa carton thân thiện môi trường để phân loại rác Plastic & Other.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          {/* TAB 2: DETAILS */}
          {activeTab === 'details' && (
            <div className="space-y-6">
              {getSections().map((sec) => (
                <div key={sec.id} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                  <h4 className="text-base font-extrabold text-slate-900">
                    {lang === 'vi' ? sec.titleVi : sec.titleEn}
                  </h4>
                  <pre className="whitespace-pre-wrap font-sans text-sm text-slate-700 leading-relaxed">
                    {sec.contentVi}
                  </pre>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: FULL DOCUMENT FILE */}
          {activeTab === 'raw' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 font-bold">
                  {project.docFileLabel || 'ThuyetMinh.md'}
                </span>
                <button
                  onClick={() => {
                    const text = getSections().map(s => `## ${s.titleVi}\n\n${s.contentVi}`).join('\n\n---\n\n');
                    handleCopyText(text);
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  {copied ? (lang === 'vi' ? 'Đã sao chép!' : 'Copied!') : (lang === 'vi' ? 'Sao chép văn bản' : 'Copy Text')}
                </button>
              </div>

              <div className="p-5 bg-slate-900 text-slate-100 rounded-2xl font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto max-h-[500px]">
                <p className="text-blue-400 font-bold mb-4"># BẢN THUYẾT MINH PHẦN MỀM SÁNG TẠO: {project.docFileLabel?.split('.')[0]}</p>
                <p className="text-slate-400 mb-4">{`// Tác giả: Trần Bảo Khiêm - Trường PT Thực hành Sư phạm ĐH An Giang`}</p>
                {getSections().map((s, idx) => (
                  <div key={idx} className="mb-6">
                    <p className="text-amber-400 font-bold mb-2">## {s.titleVi}</p>
                    <p className="whitespace-pre-wrap text-slate-300">{s.contentVi}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="text-xs text-slate-500 font-medium">
            Tác giả: Trần Bảo Khiêm &bull; Portfolio Chính Thức
          </div>
          <div className="flex gap-3">
            {isGreenBin && (
              <a
                href={GREENBIN_METADATA.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Website GreenBin
              </a>
            )}
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl font-bold text-xs transition-colors cursor-pointer"
            >
              {lang === 'vi' ? 'Đóng' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDocModal;
