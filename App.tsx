import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ProjectDocModal from './components/ProjectDocModal';
import AwardModal from './components/AwardModal';
import BrandLogo from './components/BrandLogo';
import LogoModal from './components/LogoModal';
import { 
  PERSONAL_INFO, 
  ACHIEVEMENTS, 
  CERTIFICATES,
  PROJECTS, 
  SKILLS, 
  MEDIA, 
  YOUTUBE_CHANNELS, 
  UI_TRANSLATIONS,
  getLocalizedText 
} from './constants';
import { Language, Project, Certificate } from './types';
import { 
  Award, 
  Code, 
  Youtube, 
  MapPin, 
  Calendar, 
  School, 
  Users, 
  Newspaper, 
  ExternalLink, 
  ChevronRight, 
  MessageSquare, 
  Star, 
  Trophy,
  Medal,
  FileCheck,
  Check,
  Copy,
  Sparkles,
  ShieldCheck,
  Camera,
  Eye,
  Download,
  Upload
} from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('khiem_lang');
    return saved === 'en' ? 'en' : 'vi';
  });
  const [yearFilter, setYearFilter] = useState<'all' | '2026' | '2025' | '2024'>('all');
  const [selectedProjectDoc, setSelectedProjectDoc] = useState<Project | null>(null);
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);

  // Awards / Khen thưởng state
  const [awardLevelFilter, setAwardLevelFilter] = useState<'all' | 'national' | 'regional' | 'provincial'>('all');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [copiedCertId, setCopiedCertId] = useState<string | null>(null);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);

  // Real Certificate Photos Map from LocalStorage
  const [customCertImages, setCustomCertImages] = useState<Record<string, string>>(() => {
    const map: Record<string, string> = {};
    CERTIFICATES.forEach((c) => {
      const saved = localStorage.getItem(`cert_img_${c.id}`);
      if (saved) map[c.id] = saved;
    });
    return map;
  });

  const batchUploadRef = useRef<HTMLInputElement>(null);
  const [batchToast, setBatchToast] = useState<string | null>(null);

  const handleUpdateCertImage = (certId: string, imageSrc: string) => {
    setCustomCertImages((prev) => {
      const updated = { ...prev };
      if (imageSrc) {
        updated[certId] = imageSrc;
      } else {
        delete updated[certId];
      }
      return updated;
    });
  };

  const handleBatchUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    let processed = 0;
    const fileList = Array.from(files);

    fileList.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        const cleanName = file.name.trim();
        const matched = CERTIFICATES.find(c => 
          c.imageUrl && (
            c.imageUrl.includes(cleanName) || 
            cleanName.includes(c.imageUrl.replace(/^\//, ''))
          )
        );

        if (matched) {
          localStorage.setItem(`cert_img_${matched.id}`, dataUrl);
          setCustomCertImages(prev => ({ ...prev, [matched.id]: dataUrl }));
        } else {
          const unassigned = CERTIFICATES.find(c => !localStorage.getItem(`cert_img_${c.id}`));
          if (unassigned) {
            localStorage.setItem(`cert_img_${unassigned.id}`, dataUrl);
            setCustomCertImages(prev => ({ ...prev, [unassigned.id]: dataUrl }));
          }
        }
        processed++;
        if (processed === fileList.length) {
          setBatchToast(lang === 'vi' ? `Đã nạp ${processed} ảnh bằng khen thành công!` : `Successfully loaded ${processed} certificate photos!`);
          setTimeout(() => setBatchToast(null), 4000);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleOpenCertModal = (cert: Certificate) => {
    setSelectedCert(cert);
    setIsCertModalOpen(true);
  };

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCertId(id);
    setTimeout(() => setCopiedCertId(null), 2000);
  };

  const handleOpenProjectDoc = (project: Project) => {
    setSelectedProjectDoc(project);
    setIsDocModalOpen(true);
  };

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('khiem_lang', newLang);
  };

  const t = UI_TRANSLATIONS[lang];

  const filteredCertificates = CERTIFICATES.filter((cert) => {
    if (awardLevelFilter === 'all') return true;
    return cert.badgeType === awardLevelFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-800">
      <Navbar lang={lang} onLanguageChange={handleLanguageChange} />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100/50 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-sky-100/50 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* National First Prize Badge 2025 */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border border-yellow-200/90 rounded-full text-yellow-800 text-xs sm:text-sm font-black mb-8 shadow-sm">
                <Trophy className="w-4 h-4 text-amber-500 fill-amber-400" />
                <span>{t.hero.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                {t.hero.greeting} <br/>
                {t.hero.intro} <span className="gradient-text">{PERSONAL_INFO.fullName}</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                {PERSONAL_INFO.bio[lang]}
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 sm:px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black shadow-xl shadow-blue-200/80 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 text-sm sm:text-base cursor-pointer"
                >
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  {t.hero.ctaLearn}
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 sm:px-10 py-4 bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 rounded-2xl font-black transition-all transform hover:scale-105 active:scale-95 text-sm sm:text-base cursor-pointer shadow-sm hover:shadow"
                >
                  {t.hero.ctaProjects}
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group [perspective:1000px]">
                <div className="absolute -inset-6 bg-gradient-to-tr from-amber-400 via-blue-500 to-sky-400 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-tr from-yellow-400 to-amber-400 rounded-full flex items-center justify-center shadow-xl z-20 transform rotate-12 group-hover:scale-110 transition-transform">
                   <Star className="w-10 h-10 text-white fill-white" />
                </div>
                
                <div className="relative w-full max-w-sm lg:max-w-md aspect-[1/1.2] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white ring-1 ring-slate-100 transform transition-all duration-700 group-hover:rotate-1 group-hover:scale-[1.02]">
                  <img 
                    src={PERSONAL_INFO.profileImage} 
                    alt="Trần Bảo Khiêm" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1599305090598-fe179d501c27?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
                    <p className="text-sm font-bold text-yellow-400 uppercase tracking-[0.2em] mb-1">{t.hero.championTag}</p>
                    <p className="text-2xl font-black tracking-tight">{PERSONAL_INFO.fullName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Overview */}
      <section id="about" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:bg-white hover:border-blue-100 hover:shadow-2xl transition-all duration-500 group">
              <Calendar className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-black text-slate-900 mb-2">{t.about.birthDate}</h4>
              <p className="text-slate-600 font-bold">{PERSONAL_INFO.birthDate[lang]}</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:bg-white hover:border-sky-100 hover:shadow-2xl transition-all duration-500 group">
              <MapPin className="w-12 h-12 text-sky-600 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-black text-slate-900 mb-2">{t.about.location}</h4>
              <p className="text-slate-600 font-bold">{PERSONAL_INFO.location[lang]}</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:bg-white hover:border-indigo-100 hover:shadow-2xl transition-all duration-500 group">
              <School className="w-12 h-12 text-indigo-600 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-black text-slate-900 mb-2">{t.about.school}</h4>
              <p className="text-slate-600 font-bold leading-snug">{PERSONAL_INFO.school[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">{t.achievements.title}</h2>
            <p className="text-slate-500 max-w-xl mx-auto font-medium mb-6">{t.achievements.subtitle}</p>
            <div className="h-2 w-24 bg-blue-600 mx-auto rounded-full"></div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
              <button
                type="button"
                onClick={() => setYearFilter('all')}
                className={`px-5 py-2.5 rounded-2xl font-bold text-sm transition-all cursor-pointer ${
                  yearFilter === 'all'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                    : 'bg-white text-slate-600 hover:text-blue-600 border border-slate-200'
                }`}
              >
                {t.achievements.tabAll}
              </button>
              <button
                type="button"
                onClick={() => setYearFilter('2026')}
                className={`px-5 py-2.5 rounded-2xl font-bold text-sm transition-all cursor-pointer flex items-center gap-2 ${
                  yearFilter === '2026'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105'
                    : 'bg-white text-slate-600 hover:text-indigo-600 border border-slate-200'
                }`}
              >
                <span>{t.achievements.tab2026}</span>
                <span className={`text-[10px] uppercase px-2 py-0.5 rounded-full font-black ${
                  yearFilter === '2026' ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-700'
                }`}>
                  {t.achievements.latestTag}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setYearFilter('2025')}
                className={`px-5 py-2.5 rounded-2xl font-bold text-sm transition-all cursor-pointer ${
                  yearFilter === '2025'
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-200 scale-105'
                    : 'bg-white text-slate-600 hover:text-amber-600 border border-slate-200'
                }`}
              >
                {t.achievements.tab2025}
              </button>
              <button
                type="button"
                onClick={() => setYearFilter('2024')}
                className={`px-5 py-2.5 rounded-2xl font-bold text-sm transition-all cursor-pointer ${
                  yearFilter === '2024'
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-200 scale-105'
                    : 'bg-white text-slate-600 hover:text-sky-600 border border-slate-200'
                }`}
              >
                {t.achievements.tab2024}
              </button>
            </div>
          </div>

          <div className="space-y-12">
            {/* BẢNG VÀNG 2026 */}
            {(yearFilter === 'all' || yearFilter === '2026') && (
              <div className="bg-gradient-to-br from-indigo-50/60 via-white to-blue-50/40 p-6 sm:p-10 rounded-[3rem] border border-indigo-100/80 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                          {t.achievements.board2026Title}
                        </h3>
                        <span className="px-2.5 py-0.5 bg-indigo-600 text-white text-[11px] font-black rounded-full uppercase tracking-wider animate-pulse">
                          {t.achievements.latestTag}
                        </span>
                      </div>
                      <p className="text-slate-500 text-sm font-medium">Hội thi Tin Học Trẻ Toàn Quốc & Khu vực 2026</p>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 bg-indigo-100 text-indigo-800 font-black rounded-full text-xs">
                    Năm 2026
                  </span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ACHIEVEMENTS.filter(item => item.year === '2026').map((item) => {
                    const isFirstPrize = item.id.includes('d2-tinh');
                    const isThirdPrize = item.id.includes('d2-kk');
                    return (
                      <div 
                        key={item.id} 
                        className={`p-7 sm:p-8 bg-white border-2 rounded-[2.5rem] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between ${
                          isFirstPrize 
                            ? 'border-amber-300/80 ring-1 ring-amber-200/50' 
                            : isThirdPrize
                            ? 'border-orange-300/80 ring-1 ring-orange-200/50'
                            : 'border-indigo-100 hover:border-indigo-300'
                        }`}
                      >
                        <Trophy className="absolute -bottom-6 -right-6 w-32 h-32 text-indigo-50/70 group-hover:text-indigo-100/70 transition-colors pointer-events-none" />
                        
                        <div>
                          <div className="flex justify-between items-start gap-3 mb-5">
                            <div className="flex items-center gap-3">
                              <Award className={`w-12 h-12 p-2.5 rounded-2xl group-hover:scale-110 transition-transform ${
                                isFirstPrize 
                                  ? 'text-amber-600 bg-amber-50' 
                                  : isThirdPrize
                                  ? 'text-orange-600 bg-orange-50'
                                  : 'text-indigo-600 bg-indigo-50'
                              }`} />
                              <div>
                                <span className={`inline-block px-3 py-0.5 font-black rounded-lg text-xs uppercase tracking-wider ${
                                  isFirstPrize 
                                    ? 'bg-amber-600 text-white' 
                                    : isThirdPrize
                                    ? 'bg-orange-600 text-white'
                                    : 'bg-indigo-600 text-white'
                                }`}>
                                  {item.category}
                                </span>
                                <span className="block text-[11px] font-bold text-slate-400 mt-0.5">
                                  {getLocalizedText(item.badge, lang)}
                                </span>
                              </div>
                            </div>
                            <span className="px-3.5 py-1 bg-slate-100 text-slate-700 font-black rounded-full text-xs">
                              {item.year}
                            </span>
                          </div>

                          <h4 className="text-xl font-black text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                            {getLocalizedText(item.title, lang)}
                          </h4>
                          <p className="text-slate-600 text-sm font-medium relative z-10 leading-relaxed mb-4">
                            {getLocalizedText(item.description, lang)}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                          <span>Tin Học Trẻ 2026</span>
                          <span className="text-indigo-600 group-hover:translate-x-1 transition-transform">★</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* BẢNG VÀNG 2025 */}
            {(yearFilter === 'all' || yearFilter === '2025') && (
              <div className="bg-gradient-to-br from-amber-50/50 via-white to-slate-50/60 p-6 sm:p-10 rounded-[3rem] border border-amber-100 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-200">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        {t.achievements.board2025Title}
                      </h3>
                      <p className="text-slate-500 text-sm font-medium">Hội thi Tin Học Trẻ Toàn Quốc & Thành tích học tập</p>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 bg-amber-100 text-amber-800 font-black rounded-full text-xs">
                    Năm 2025
                  </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {ACHIEVEMENTS.filter(item => item.year.includes('2025')).map((item) => (
                    <div 
                      key={item.id} 
                      className="p-8 sm:p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
                    >
                      <Trophy className="absolute -bottom-4 -right-4 w-32 h-32 text-slate-50 group-hover:text-amber-50 transition-colors pointer-events-none" />
                      
                      <div className="flex justify-between items-start mb-6">
                        <Award className="w-12 h-12 text-yellow-600 p-2.5 bg-yellow-50 rounded-2xl group-hover:scale-110 transition-transform" />
                        <div className="flex items-center gap-2">
                          {item.category && (
                            <span className="px-3 py-1 bg-amber-50 text-amber-700 font-black rounded-full text-xs">
                              {item.category}
                            </span>
                          )}
                          <span className="px-4 py-1 bg-slate-100 text-slate-700 font-black rounded-full text-xs">
                            {item.year}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                        {getLocalizedText(item.title, lang)}
                      </h4>
                      <p className="text-slate-500 font-medium relative z-10 leading-relaxed">
                        {getLocalizedText(item.description, lang)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BẢNG VÀNG 2024 */}
            {(yearFilter === 'all' || yearFilter === '2024') && (
              <div className="bg-gradient-to-br from-sky-50/50 via-white to-slate-50/60 p-6 sm:p-10 rounded-[3rem] border border-sky-100 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-sky-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-sky-200">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        {t.achievements.board2024Title}
                      </h3>
                      <p className="text-slate-500 text-sm font-medium">Hội thi Tin Học Trẻ Tỉnh An Giang 2024</p>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 bg-sky-100 text-sky-800 font-black rounded-full text-xs">
                    Năm 2024
                  </span>
                </div>

                <div className="grid lg:grid-cols-1 gap-8">
                  {ACHIEVEMENTS.filter(item => item.year === '2024').map((item) => (
                    <div 
                      key={item.id} 
                      className="p-8 sm:p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
                    >
                      <Trophy className="absolute -bottom-4 -right-4 w-32 h-32 text-slate-50 group-hover:text-sky-50 transition-colors pointer-events-none" />
                      
                      <div className="flex justify-between items-start mb-6">
                        <Award className="w-12 h-12 text-sky-600 p-2.5 bg-sky-50 rounded-2xl group-hover:scale-110 transition-transform" />
                        <div className="flex items-center gap-2">
                          {item.category && (
                            <span className="px-3 py-1 bg-sky-50 text-sky-700 font-black rounded-full text-xs">
                              {item.category}
                            </span>
                          )}
                          <span className="px-4 py-1 bg-slate-100 text-slate-700 font-black rounded-full text-xs">
                            {item.year}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                        {getLocalizedText(item.title, lang)}
                      </h4>
                      <p className="text-slate-500 font-medium relative z-10 leading-relaxed max-w-3xl">
                        {getLocalizedText(item.description, lang)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Awards & Certificates Section */}
      <section id="awards" className="py-24 bg-gradient-to-b from-white via-amber-50/25 to-slate-50 scroll-mt-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            {/* Format Notice Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 text-amber-900 rounded-full text-xs font-black mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{t.awards.formatBadge}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              {t.awards.title}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium text-base sm:text-lg mb-8 leading-relaxed">
              {t.awards.subtitle}
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setAwardLevelFilter('all')}
                className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  awardLevelFilter === 'all'
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-200 scale-105'
                    : 'bg-white text-slate-600 hover:text-amber-700 border border-slate-200 hover:border-amber-300'
                }`}
              >
                {t.awards.tabAll} ({CERTIFICATES.length})
              </button>
              <button
                type="button"
                onClick={() => setAwardLevelFilter('national')}
                className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                  awardLevelFilter === 'national'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-200 scale-105'
                    : 'bg-white text-slate-600 hover:text-red-600 border border-slate-200 hover:border-red-300'
                }`}
              >
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.awards.tabNational}</span>
              </button>
              <button
                type="button"
                onClick={() => setAwardLevelFilter('regional')}
                className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                  awardLevelFilter === 'regional'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105'
                    : 'bg-white text-slate-600 hover:text-indigo-600 border border-slate-200 hover:border-indigo-300'
                }`}
              >
                <Medal className="w-3.5 h-3.5 text-indigo-300" />
                <span>{t.awards.tabRegional}</span>
              </button>
              <button
                type="button"
                onClick={() => setAwardLevelFilter('provincial')}
                className={`px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                  awardLevelFilter === 'provincial'
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-200 scale-105'
                    : 'bg-white text-slate-600 hover:text-sky-600 border border-slate-200 hover:border-sky-300'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-sky-300" />
                <span>{t.awards.tabProvincial}</span>
              </button>
            </div>
          </div>

          {/* Official Certificates Showcase Banner */}
          <div className="mb-8 p-5 bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-white rounded-3xl border border-blue-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center shrink-0 shadow-inner">
                <Trophy className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-black text-sm sm:text-base text-amber-300 tracking-wide">
                  {lang === 'vi' ? 'Bộ Sưu Tập Bằng Khen & Giấy Khen Thực Tế' : 'Official Merits & Certificates Collection'}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {lang === 'vi' 
                    ? 'Toàn bộ ảnh bằng khen cấp Quốc gia, Khu vực và Tỉnh An Giang được tích hợp trực tiếp, nhấp vào từng bằng khen để phóng to chi tiết.' 
                    : 'All official diplomas and awards are directly integrated. Click any certificate to inspect full resolution.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <input 
                type="file" 
                ref={batchUploadRef} 
                multiple 
                accept="image/*" 
                onChange={handleBatchUpload} 
                className="hidden" 
              />
              <button
                type="button"
                onClick={() => batchUploadRef.current?.click()}
                className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                title={lang === 'vi' ? 'Tùy chọn tải thêm ảnh chụp thực tế từ thiết bị' : 'Optionally upload certificate scans from your device'}
              >
                <Upload className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Tùy chọn nạp thêm ảnh từ máy' : 'Upload scans from device'}</span>
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          {batchToast && (
            <div className="mb-6 p-3 bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 rounded-2xl text-xs font-bold text-center animate-fadeIn">
              {batchToast}
            </div>
          )}

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCertificates.map((cert) => {
              const isNational = cert.badgeType === 'national';
              const isRegional = cert.badgeType === 'regional';
              const isCopied = copiedCertId === cert.id;
              const certImgSrc = customCertImages[cert.id] || cert.imageUrl;

              return (
                <div
                  key={cert.id}
                  className={`relative p-7 sm:p-8 bg-white rounded-[2.5rem] border-2 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden ${
                    isNational
                      ? 'border-amber-300/90 ring-1 ring-amber-200/60 bg-gradient-to-b from-amber-50/30 to-white'
                      : isRegional
                      ? 'border-indigo-200 ring-1 ring-indigo-100 bg-gradient-to-b from-indigo-50/30 to-white'
                      : 'border-slate-200 hover:border-blue-300 bg-gradient-to-b from-slate-50/40 to-white'
                  }`}
                >
                  {/* Decorative background watermark */}
                  <Award className="absolute -bottom-6 -right-6 w-36 h-36 text-slate-100 group-hover:text-amber-100/60 transition-colors pointer-events-none" />

                  <div>
                    {/* Header: Format Badge <Bảng thi>-<Năm>-<Cấp thi> & Level Badge */}
                    <div className="flex flex-col gap-2.5 mb-5">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        {/* The Key Format Label: <Bảng thi>-<Năm>-<Cấp thi> */}
                        <div className="flex items-center gap-1.5 bg-slate-900 text-white px-3 py-1.5 rounded-xl shadow-sm">
                          <FileCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <code className="text-xs font-mono font-black tracking-wide">
                            {cert.code}
                          </code>
                        </div>

                        {/* Level badge */}
                        <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                          isNational
                            ? 'bg-red-100 text-red-700 border border-red-200'
                            : isRegional
                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                            : 'bg-sky-100 text-sky-700 border border-sky-200'
                        }`}>
                          {cert.level[lang]}
                        </span>
                        {/* Official Certificate Badge */}
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1 shadow-xs">
                          <Camera className="w-3 h-3 text-emerald-600" />
                          <span>{lang === 'vi' ? 'Bằng khen thực tế' : 'Real Certificate'}</span>
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                          <span>{t.awards.division}: {cert.division}</span>
                        </span>
                        <span>{t.awards.year}: {cert.year}</span>
                      </div>
                    </div>

                    {/* Certificate Real Photo Card Preview */}
                    <div 
                      onClick={() => handleOpenCertModal(cert)}
                      className="relative mb-5 rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-900 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group/img"
                    >
                      {/* Image element with onError fallback */}
                      <img 
                        src={certImgSrc} 
                        alt={getLocalizedText(cert.awardTitle, lang)}
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                          const fallback = (e.target as HTMLElement).nextElementSibling;
                          if (fallback) (fallback as HTMLElement).style.display = 'flex';
                        }}
                        className="w-full h-44 object-cover object-center transition-transform duration-300 group-hover/img:scale-105"
                        loading="lazy"
                      />

                      {/* Fallback frame if image is loading or unavailable */}
                      <div 
                        style={{ display: 'none' }}
                        className="w-full h-44 bg-gradient-to-br from-amber-50 via-white to-amber-100/60 p-4 flex-col justify-between text-slate-900 border-4 border-double border-amber-600/60 rounded-xl"
                      >
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 bg-amber-600 text-white rounded text-[10px] font-black uppercase tracking-wider">
                            {isNational ? 'BẰNG KHEN' : isRegional ? 'CHỨNG NHẬN' : 'GIẤY KHEN'}
                          </span>
                          <span className="text-[10px] font-bold text-slate-500">{cert.year}</span>
                        </div>
                        <div className="my-auto text-center px-2">
                          <p className="text-xs font-black text-amber-950 uppercase line-clamp-2">
                            {getLocalizedText(cert.awardTitle, lang)}
                          </p>
                          <p className="text-[11px] font-bold text-slate-700 mt-1">
                            TRẦN BẢO KHIÊM
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-600 font-bold border-t border-amber-200/80 pt-1">
                          <span className="text-amber-800">{cert.division}</span>
                          <span className="text-blue-600 font-black">{lang === 'vi' ? 'Bấm xem phóng to' : 'Click to inspect'}</span>
                        </div>
                      </div>

                      {/* Overlay Bar */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end justify-between p-3 opacity-90 group-hover/img:opacity-100 transition-opacity">
                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-blue-600 text-white flex items-center gap-1 shadow-sm">
                          <Eye className="w-3 h-3" />
                          <span>{lang === 'vi' ? 'Xem ảnh bằng khen' : 'View Certificate'}</span>
                        </span>
                        {cert.decisionNo ? (
                          <span className="text-[10px] font-mono text-amber-300 font-bold bg-slate-950/90 px-2 py-0.5 rounded border border-amber-500/40">
                            {cert.decisionNo}
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded">
                            {cert.date || cert.year}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Award Title */}
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-amber-700 transition-colors leading-snug mb-3">
                      {getLocalizedText(cert.awardTitle, lang)}
                    </h3>

                    {/* Issuer */}
                    <div className="mb-4 p-3 bg-amber-50/70 rounded-xl border border-amber-200/70 text-xs font-bold text-amber-950 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[10px] text-amber-700 uppercase tracking-wider">{t.awards.issuer}:</span>
                        <span>{getLocalizedText(cert.issuer, lang)}</span>
                      </div>
                    </div>

                    {/* Description */}
                    {cert.description && (
                      <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                        {getLocalizedText(cert.description, lang)}
                      </p>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 z-10">
                    <button
                      type="button"
                      onClick={() => handleOpenCertModal(cert)}
                      className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl text-xs font-black shadow-md shadow-amber-200/60 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>{t.awards.viewCertificate}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopyCode(cert.code, cert.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
                        isCopied
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                          : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                      title={t.awards.copyCode}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{t.awards.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>{t.awards.copyCode}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section id="skills" className="py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">{t.skills.title}</h2>
              <div className="space-y-10">
                {SKILLS.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-4">
                        <span className="text-blue-400">{skill.icon}</span>
                        <span className="font-bold text-xl">{getLocalizedText(skill.name, lang)}</span>
                      </div>
                      <span className="font-bold text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
                      <div className="h-full bg-blue-500 rounded-full transition-all duration-700" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700 text-center">
                <div className="text-2xl sm:text-3xl font-black text-blue-400 mb-2">A • D1 • D2</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{t.skills.divisionBadge}</div>
              </div>
              <div className="p-8 bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700 text-center">
                <div className="text-4xl font-black text-sky-400 mb-2">7+</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{t.skills.experienceBadge}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">{t.projects.title}</h2>
            <a 
              href="https://scratch.mit.edu/users/Khiemchoigame2015/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 group"
            >
              {t.projects.viewAll} <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                lang={lang} 
                onOpenDoc={handleOpenProjectDoc} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Media & Social */}
      <section id="media" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <Newspaper className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-black text-slate-900">{t.media.title}</h2>
              </div>
              <div className="space-y-4">
                {MEDIA.map((item) => (
                  <a 
                    key={item.id} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-xl transition-all group"
                  >
                    <div>
                      <span className="text-xs font-black text-blue-600 uppercase mb-2 block">{item.source}</span>
                      <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {getLocalizedText(item.title, lang)}
                      </h4>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-blue-600 shrink-0 ml-4" />
                  </a>
                ))}
              </div>
            </div>

            <div id="community" className="scroll-mt-28">
              <div className="flex items-center gap-4 mb-10">
                <Youtube className="w-8 h-8 text-red-600" />
                <h2 className="text-3xl font-black text-slate-900">{t.media.youtubeTitle}</h2>
              </div>
              <div className="grid gap-6">
                {YOUTUBE_CHANNELS.map((channel) => (
                  <div key={channel.id} className="p-8 bg-white rounded-3xl border border-slate-100 text-center hover:shadow-2xl transition-all group">
                    <Youtube className="w-12 h-12 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-black text-slate-900 mb-2">{getLocalizedText(channel.name, lang)}</h3>
                    {channel.desc && (
                      <p className="text-slate-500 text-sm mb-6">{getLocalizedText(channel.desc, lang)}</p>
                    )}
                    <a 
                      href={channel.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-red-600 transition-colors"
                    >
                      {t.media.subscribe}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center gap-3 mb-8">
            <BrandLogo 
              size="lg" 
              subtitleText={lang === 'vi' ? 'Trang web & Portfolio chính thức' : 'Official Website & Portfolio'}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            
            {/* Button to open Logo & Favicon Kit Modal */}
            <div className="mt-2">
              <button
                type="button"
                onClick={() => setIsLogoModalOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 rounded-xl text-xs font-bold transition-all shadow-2xs hover:shadow-xs cursor-pointer group"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500 group-hover:rotate-12 transition-transform" />
                <span>{lang === 'vi' ? 'Xem & Tải Logo / Favicon Web' : 'View & Download Website Logo / Favicon'}</span>
                <Download className="w-3.5 h-3.5 text-blue-600" />
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-8 mb-10 text-slate-400">
            <a 
              href="https://scratch.mit.edu/users/Khiemchoigame2015/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full hover:bg-slate-100 hover:text-blue-600 transition-all"
              aria-label="Scratch Profile"
            >
              <Code />
            </a>
            <a 
              href="https://www.youtube.com/@KhiemSonic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full hover:bg-slate-100 hover:text-red-600 transition-all"
              aria-label="YouTube Channel"
            >
              <Youtube />
            </a>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
            &copy; {t.footer.copyright}
          </p>
        </div>
      </footer>

      {/* Project Document Modal */}
      <ProjectDocModal
        project={selectedProjectDoc}
        isOpen={isDocModalOpen}
        onClose={() => setIsDocModalOpen(false)}
        lang={lang}
      />

      {/* Award Certificate Modal */}
      <AwardModal
        certificate={selectedCert}
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        lang={lang}
        onUpdateCertificateImage={handleUpdateCertImage}
      />

      {/* Logo & Favicon Kit Modal */}
      <LogoModal
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
        lang={lang}
      />
    </div>
  );
};

export default App;
