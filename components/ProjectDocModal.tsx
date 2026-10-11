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
  ArrowRight, 
  CheckCircle, 
  Code, 
  Boxes 
} from 'lucide-react';
import { 
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
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isGreenBin = project.docType === 'greenbin';
  const isOpenTwin = project.docType === 'opentwin';

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
        <div className={`p-6 sm:p-8 text-white relative flex-shrink-0 ${
          isGreenBin 
            ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700' 
            : 'bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900'
        }`}>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-black rounded-full uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5" />
                  {project.docFileLabel || 'Project_Document.md'}
                </span>

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

              <p className="text-white/80 text-sm sm:text-base max-w-2xl font-medium">
                {isOpenTwin ? OPENTWIN_METADATA.role : GREENBIN_METADATA.tagline[lang]}
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
              className={`px-4 py-2 text-sm font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'border-white text-white'
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              {lang === 'vi' ? 'Tổng quan & Kiến trúc' : 'Overview & Architecture'}
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`px-4 py-2 text-sm font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === 'details'
                  ? 'border-white text-white'
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              {isGreenBin 
                ? (lang === 'vi' ? 'Phần cứng & Cơ cấu' : 'Hardware & Mechanics') 
                : (lang === 'vi' ? 'Nguyên tắc & Luồng dữ liệu' : 'Principles & Workflow')}
            </button>
            <button
              onClick={() => setActiveTab('raw')}
              className={`px-4 py-2 text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'raw'
                  ? 'border-white text-white'
                  : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              {lang === 'vi' ? 'Nội dung tài liệu file' : 'File Documentation'}
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6 text-slate-700">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {isOpenTwin && (
                <>
                  {/* Status Banner */}
                  <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-700 flex items-center justify-center font-black">
                        ⚡
                      </div>
                      <div>
                        <h4 className="font-black text-amber-900 text-sm">
                          {lang === 'vi' ? 'Trạng thái dự án: Đang phát triển' : 'Status: In Active Development'}
                        </h4>
                        <p className="text-amber-700 text-xs">
                          {lang === 'vi' 
                            ? 'Phiên bản kiến trúc v5.0 chuẩn bị cho cuộc thi Sáng tạo kỹ thuật' 
                            : 'Architectural specification v5.0 for tech innovation showcase'}
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-amber-200/60 text-amber-900 font-black text-xs rounded-full">
                      v5.0
                    </span>
                  </div>

                  {/* Core Motto */}
                  <div className="p-6 bg-slate-900 text-white rounded-3xl shadow-md space-y-3">
                    <div className="flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" />
                      {lang === 'vi' ? 'Triết lý cốt lõi' : 'Core Philosophy'}
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed font-semibold text-slate-200">
                      "{OPENTWIN_METADATA.coreMotto[lang]}"
                    </p>
                  </div>

                  {/* 4 Core Concepts Matrix */}
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-blue-600" />
                      {lang === 'vi' ? '4 Khái niệm học tập nền tảng' : '4 Core Learning Concepts'}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-5 bg-blue-50/60 rounded-2xl border border-blue-100">
                        <span className="text-xs font-black text-blue-600 uppercase">School Program</span>
                        <h5 className="font-extrabold text-slate-900 text-base mt-1">Học sinh phải học gì?</h5>
                        <p className="text-slate-600 text-xs mt-1">Chương trình chuẩn theo trường/lớp (Ví dụ: THCS Lớp 6A1 - Lý Thường Kiệt).</p>
                      </div>
                      <div className="p-5 bg-indigo-50/60 rounded-2xl border border-indigo-100">
                        <span className="text-xs font-black text-indigo-600 uppercase">Personal Program</span>
                        <h5 className="font-extrabold text-slate-900 text-base mt-1">Lộ trình muốn học?</h5>
                        <p className="text-slate-600 text-xs mt-1">Lập trình giải thuật, HSG Tin học THCS, IELTS, dự án mở rộng.</p>
                      </div>
                      <div className="p-5 bg-amber-50/60 rounded-2xl border border-amber-100">
                        <span className="text-xs font-black text-amber-700 uppercase">Learning Journal</span>
                        <h5 className="font-extrabold text-slate-900 text-base mt-1">Thực tế học & hiểu đến đâu?</h5>
                        <p className="text-slate-600 text-xs mt-1">Nhật ký 30 giây: Môn, bài, mức hiểu (🟢/🟡/🔴), lỗ hổng kiến thức.</p>
                      </div>
                      <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-100">
                        <span className="text-xs font-black text-emerald-700 uppercase">Digital Twin</span>
                        <h5 className="font-extrabold text-slate-900 text-base mt-1">Đang ở đâu & làm gì tiếp?</h5>
                        <p className="text-slate-600 text-xs mt-1">Phân tích lỗ hổng (Gap Analysis) & đưa ra hành động cá nhân hóa.</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3">
                      {lang === 'vi' ? 'Công nghệ nền tảng' : 'Technology Stack'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {OPENTWIN_METADATA.techStack.map((tech) => (
                        <span key={tech} className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {isGreenBin && (
                <>
                  {/* GreenBin Overview Banner */}
                  <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <span className="text-xs font-black text-emerald-700 uppercase tracking-wider">
                          Mô hình STEM Môi trường
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                          Robot Phân Loại Rác Tự Động Chi Phí Thấp
                        </h3>
                      </div>
                      <a
                        href={GREENBIN_METADATA.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-md shadow-emerald-200 transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        greenbin.ai.studio
                      </a>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {lang === 'vi'
                        ? 'GreenBin AI giải quyết bài toán phân loại rác tại nguồn bằng giải pháp đơn giản, hiệu quả: Sử dụng camera chụp hình ảnh, mô hình Computer Vision nhận diện và Raspberry Pi 4 điều khiển servo lật máng trượt bằng bìa carton thân thiện với môi trường.'
                        : 'GreenBin AI solves the source waste sorting challenge simply and effectively: Utilizing camera capture, computer vision AI classification, and Raspberry Pi 4 controlling an eco-friendly cardboard flap.'}
                    </p>
                  </div>

                  {/* 6-Step Pipeline Visual */}
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 text-emerald-600" />
                      {lang === 'vi' ? 'Quy trình hoạt động 6 bước' : '6-Step Operational Pipeline'}
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {GREENBIN_METADATA.pipelineSteps.map((step) => (
                        <div key={step.step} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-3">
                          <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                            {step.step}
                          </span>
                          <div>
                            <h5 className="font-extrabold text-slate-900 text-sm">
                              {lang === 'vi' ? step.nameVi : step.nameEn}
                            </h5>
                            <p className="text-slate-500 text-xs mt-0.5">
                              {lang === 'vi' ? step.descVi : step.descEn}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2 Bins Classification Guide */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-sky-50 border-2 border-sky-200 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 bg-sky-600 text-white font-black text-xs rounded-lg uppercase">
                          Lật Trái → Plastic (Nhựa)
                        </span>
                        <span className="text-xs font-bold text-sky-700">Ngăn 1</span>
                      </div>
                      <p className="text-slate-700 text-xs font-semibold leading-relaxed">
                        Chai nhựa, ly/cốc nhựa, bao bì nhựa, vỏ hộp nhựa nhỏ.
                      </p>
                    </div>

                    <div className="p-5 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 bg-emerald-700 text-white font-black text-xs rounded-lg uppercase">
                          Lật Phải → Other (Còn lại)
                        </span>
                        <span className="text-xs font-bold text-emerald-700">Ngăn 2</span>
                      </div>
                      <p className="text-slate-700 text-xs font-semibold leading-relaxed">
                        Giấy, lá cây, vỏ hộp carton, rác sinh hoạt thông thường.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* TAB 2: DETAILS & ARCHITECTURE */}
          {activeTab === 'details' && (
            <div className="space-y-6">
              {isOpenTwin && (
                <div className="space-y-6">
                  {OPENTWIN_SECTIONS.map((sec) => (
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

              {isGreenBin && (
                <div className="space-y-6">
                  {/* Hardware List Cards */}
                  <div>
                    <h4 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-emerald-600" />
                      {lang === 'vi' ? 'Linh kiện phần cứng chính' : 'Main Hardware Components'}
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {GREENBIN_METADATA.hardwareComponents.map((item) => (
                        <div key={item.name} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                          <h5 className="font-extrabold text-slate-900 text-sm">{item.name}</h5>
                          <p className="text-slate-600 text-xs mt-1">
                            {lang === 'vi' ? item.roleVi : item.roleEn}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {GREENBIN_SECTIONS.map((sec) => (
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
            </div>
          )}

          {/* TAB 3: FULL DOCUMENT FILE */}
          {activeTab === 'raw' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  {project.docFileLabel || 'DOCUMENT_FILE'}
                </span>
                <button
                  onClick={() => {
                    const text = isOpenTwin 
                      ? OPENTWIN_SECTIONS.map(s => `## ${s.titleVi}\n\n${s.contentVi}`).join('\n\n---\n\n')
                      : GREENBIN_SECTIONS.map(s => `## ${s.titleVi}\n\n${s.contentVi}`).join('\n\n---\n\n');
                    handleCopyText(text);
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  {copied ? (lang === 'vi' ? 'Đã sao chép!' : 'Copied!') : (lang === 'vi' ? 'Sao chép tài liệu' : 'Copy Document')}
                </button>
              </div>

              <div className="p-5 bg-slate-900 text-slate-100 rounded-2xl font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto max-h-[500px]">
                {isOpenTwin && (
                  <div>
                    <p className="text-blue-400 font-bold mb-4"># OpenTwin --- Student Digital Twin AI (v5.0)</p>
                    <p className="text-slate-400 mb-4">{`// Source of Truth cho kiến trúc sản phẩm & mô hình học tập cá nhân hóa`}</p>
                    {OPENTWIN_SECTIONS.map((s, idx) => (
                      <div key={idx} className="mb-6">
                        <p className="text-amber-400 font-bold mb-2">## {s.titleVi}</p>
                        <p className="whitespace-pre-wrap text-slate-300">{s.contentVi}</p>
                      </div>
                    ))}
                  </div>
                )}

                {isGreenBin && (
                  <div>
                    <p className="text-emerald-400 font-bold mb-4"># GreenBin AI --- AI Smart Waste Sorting Robot</p>
                    <p className="text-slate-400 mb-4">{`// Brochure & Technical Specification Document`}</p>
                    {GREENBIN_SECTIONS.map((s, idx) => (
                      <div key={idx} className="mb-6">
                        <p className="text-teal-400 font-bold mb-2">## {s.titleVi}</p>
                        <p className="whitespace-pre-wrap text-slate-300">{s.contentVi}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="text-xs text-slate-500 font-medium">
            {isOpenTwin 
              ? (lang === 'vi' ? 'Dự án nghiên cứu & phát triển bởi Trần Bảo Khiêm' : 'R&D Project by Tran Bao Khiem')
              : (lang === 'vi' ? 'Dự án STEM Robotics & Môi trường' : 'STEM Robotics & Environment Project')}
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
                {lang === 'vi' ? 'Xem Website GreenBin' : 'Visit Website'}
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
