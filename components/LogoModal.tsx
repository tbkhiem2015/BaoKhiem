import React, { useState } from 'react';
import { X, Download, Check, Sparkles, Shield, Code, Palette, Eye } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { Language } from '../types';

interface LogoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const LogoModal: React.FC<LogoModalProps> = ({ isOpen, onClose, lang }) => {
  const [downloadedAsset, setDownloadedAsset] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = (path: string, filename: string) => {
    const a = document.createElement('a');
    a.href = path;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setDownloadedAsset(filename);
    setTimeout(() => setDownloadedAsset(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight">
                {lang === 'vi' ? 'Bộ Nhận Diện Thương Hiệu & Logo' : 'Brand Identity & Logo Kit'}
              </h3>
              <p className="text-xs text-blue-200">
                {lang === 'vi' ? 'Logo và Favicon vector chính thức của Trần Bảo Khiêm' : 'Official vector Logo and Favicon for Tran Bao Khiem'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Meaning & Concept */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 p-5 rounded-2xl border border-blue-100">
            <h4 className="text-sm font-black text-blue-950 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Palette className="w-4 h-4 text-blue-600" />
              {lang === 'vi' ? 'Ý Nghĩa Thiết Kế Logo & Favicon' : 'Design Meaning & Concept'}
            </h4>
            <div className="grid sm:grid-cols-3 gap-3 text-xs text-slate-700">
              <div className="bg-white/80 p-3 rounded-xl border border-blue-100">
                <span className="font-bold text-blue-700 block mb-1">
                  {lang === 'vi' ? '1. Chữ K & Code Brackets' : '1. Letter K & Code Brackets'}
                </span>
                <span>
                  {lang === 'vi' 
                    ? 'Chữ K viết tắt tên Khiêm, lồng ghép dấu đóng mở mã nguồn < > biểu trưng đam mê lập trình.' 
                    : 'The letter K for Khiem, framed by code tags < > symbolizing passion for coding.'}
                </span>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-blue-100">
                <span className="font-bold text-amber-600 block mb-1">
                  {lang === 'vi' ? '2. Ngôi Sao Vàng Đỉnh Cao' : '2. Gold Champion Star'}
                </span>
                <span>
                  {lang === 'vi' 
                    ? 'Ngôi sao 4 cánh tỏa sáng tượng trưng cho danh hiệu Quán quân Quốc gia Tin học trẻ 2025.' 
                    : '4-pointed radiant star honoring the 2025 National Youth Informatics Championship.'}
                </span>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-blue-100">
                <span className="font-bold text-indigo-700 block mb-1">
                  {lang === 'vi' ? '3. Sắc Xanh Công Nghệ' : '3. Tech Blue Palette'}
                </span>
                <span>
                  {lang === 'vi' 
                    ? 'Gradient xanh hoàng gia và cyan hiện đại, chuẩn nhận diện web & ứng dụng tương lai.' 
                    : 'Royal blue and vibrant cyan gradients representing cyber innovation and youth energy.'}
                </span>
              </div>
            </div>
          </div>

          {/* Asset 1: Favicon */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 transition-all">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Favicon Previews in different sizes */}
                <div className="flex items-center gap-2 p-3 bg-slate-100 rounded-xl">
                  <img src="/favicon.svg" alt="Favicon 48" className="w-12 h-12 drop-shadow-sm" />
                  <img src="/favicon.svg" alt="Favicon 32" className="w-8 h-8 drop-shadow-sm" />
                  <img src="/favicon.svg" alt="Favicon 16" className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-extrabold text-slate-900 text-sm">
                    Favicon Website (SVG)
                  </h5>
                  <p className="text-xs text-slate-500">
                    {lang === 'vi' 
                      ? 'Hiển thị trên tab trình duyệt (Chrome, Safari, Edge), bookmark và thanh địa chỉ.' 
                      : 'Used in browser tabs, bookmarks, and mobile shortcuts.'}
                  </p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-[10px] font-bold">
                    ✓ {lang === 'vi' ? 'Đã cài đặt vào <head>' : 'Active in <head>'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleDownload('/favicon.svg', 'favicon.svg')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-sm shrink-0 cursor-pointer"
              >
                {downloadedAsset === 'favicon.svg' ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                <span>{downloadedAsset === 'favicon.svg' ? (lang === 'vi' ? 'Đã tải' : 'Downloaded') : (lang === 'vi' ? 'Tải favicon.svg' : 'Download favicon.svg')}</span>
              </button>
            </div>
          </div>

          {/* Asset 2: Square Logo Badge */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 transition-all">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 p-1 bg-slate-900 rounded-2xl shrink-0 flex items-center justify-center">
                  <img src="/logo-square.svg" alt="Logo Badge" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h5 className="font-extrabold text-slate-900 text-sm">
                    Logo Square Badge (512x512 SVG)
                  </h5>
                  <p className="text-xs text-slate-500">
                    {lang === 'vi' 
                      ? 'Biểu tượng vuông sắc nét dùng làm Avatar, App Icon, hình đại diện mạng xã hội.' 
                      : 'High-res square badge for Avatars, Social Profiles, and App Icons.'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleDownload('/logo-square.svg', 'logo-square.svg')}
                className="px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-sm shrink-0 cursor-pointer"
              >
                {downloadedAsset === 'logo-square.svg' ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                <span>{downloadedAsset === 'logo-square.svg' ? (lang === 'vi' ? 'Đã tải' : 'Downloaded') : (lang === 'vi' ? 'Tải logo-square.svg' : 'Download logo-square.svg')}</span>
              </button>
            </div>
          </div>

          {/* Asset 3: Horizontal Brand Logo */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 transition-all">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-2 flex items-center justify-center overflow-hidden">
                  <img src="/logo.svg" alt="Logo Ngang" className="max-h-16 w-auto object-contain" />
                </div>
                <h5 className="font-extrabold text-slate-900 text-sm">
                  Logo Ngang Chuẩn (Horizontal Brand Lockup)
                </h5>
                <p className="text-xs text-slate-500">
                  {lang === 'vi' 
                    ? 'Bao gồm huy hiệu K, tên TRẦN BẢO KHIÊM và danh hiệu Quán quân Toàn quốc.' 
                    : 'Full brand mark with emblem, name typography, and championship banner.'}
                </p>
              </div>

              <button
                onClick={() => handleDownload('/logo.svg', 'logo-baokhiem.svg')}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-sm shrink-0 self-end sm:self-center cursor-pointer"
              >
                {downloadedAsset === 'logo-baokhiem.svg' ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                <span>{downloadedAsset === 'logo-baokhiem.svg' ? (lang === 'vi' ? 'Đã tải' : 'Downloaded') : (lang === 'vi' ? 'Tải logo.svg' : 'Download logo.svg')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>&copy; Thiết kế thương hiệu độc quyền cho Trần Bảo Khiêm</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl font-bold cursor-pointer transition-colors"
          >
            {lang === 'vi' ? 'Đóng' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoModal;
