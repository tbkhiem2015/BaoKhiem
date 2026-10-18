import React, { useState, useRef, useEffect } from 'react';
import { Certificate, Language } from '../types';
import { getLocalizedText } from '../constants';
import { 
  Award, 
  X, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Image as ImageIcon, 
  Upload, 
  FileText, 
  ExternalLink, 
  RefreshCw, 
  ZoomIn, 
  Eye,
  Camera,
  Download,
  AlertCircle
} from 'lucide-react';

interface AwardModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onUpdateCertificateImage?: (certId: string, imageUrl: string) => void;
}

const AwardModal: React.FC<AwardModalProps> = ({ 
  certificate, 
  isOpen, 
  onClose, 
  lang,
  onUpdateCertificateImage
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'image' | 'diploma'>('image');
  const [inputUrl, setInputUrl] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadToast, setUploadToast] = useState<string | null>(null);
  const [hasImgError, setHasImgError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load custom image from localStorage if saved by user
  const [customImage, setCustomImage] = useState<string | null>(null);

  useEffect(() => {
    if (certificate) {
      const saved = localStorage.getItem(`cert_img_${certificate.id}`);
      setCustomImage(saved || null);
      setHasImgError(false);
      setActiveTab('image');
    }
  }, [certificate]);

  if (!isOpen || !certificate) return null;

  const currentDisplayImage = customImage || certificate.imageUrl;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(certificate.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const processFile = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      alert(lang === 'vi' ? 'Vui lòng chọn ảnh dung lượng dưới 10MB' : 'Please select an image under 10MB');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setCustomImage(result);
      localStorage.setItem(`cert_img_${certificate.id}`, result);
      if (onUpdateCertificateImage) {
        onUpdateCertificateImage(certificate.id, result);
      }
      setActiveTab('image');
      setUploadToast(lang === 'vi' ? 'Đã lưu ảnh bằng khen vào máy của bạn!' : 'Saved certificate photo successfully!');
      setTimeout(() => setUploadToast(null), 3000);
    };
    reader.readAsDataURL(file);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      processFile(file);
    }
  };

  const handleSaveUrl = () => {
    if (inputUrl.trim()) {
      setCustomImage(inputUrl.trim());
      localStorage.setItem(`cert_img_${certificate.id}`, inputUrl.trim());
      if (onUpdateCertificateImage) {
        onUpdateCertificateImage(certificate.id, inputUrl.trim());
      }
      setShowUrlInput(false);
      setInputUrl('');
      setActiveTab('image');
      setUploadToast(lang === 'vi' ? 'Đã liên kết link ảnh bằng khen thành công!' : 'Image link linked successfully!');
      setTimeout(() => setUploadToast(null), 3000);
    }
  };

  const handleRemoveImage = () => {
    localStorage.removeItem(`cert_img_${certificate.id}`);
    setCustomImage(null);
    setHasImgError(false);
    if (onUpdateCertificateImage) {
      onUpdateCertificateImage(certificate.id, '');
    }
  };

  const isNational = certificate.badgeType === 'national';
  const isRegional = certificate.badgeType === 'regional';

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div 
        className={`relative w-full max-w-4xl bg-slate-900 text-white rounded-3xl shadow-2xl border ${
          isDragging ? 'border-amber-400 ring-4 ring-amber-400/30' : 'border-slate-700/80'
        } overflow-hidden transform transition-all animate-scaleUp my-4`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hidden File Input */}
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileUpload} 
          accept="image/*" 
          className="hidden" 
        />

        {/* Success Toast */}
        {uploadToast && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs shadow-xl flex items-center gap-2 animate-bounce">
            <Check className="w-4 h-4 stroke-[3]" />
            <span>{uploadToast}</span>
          </div>
        )}

        {/* Header Action Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-slate-800 bg-slate-950/90">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-amber-500 text-slate-950 rounded-full text-xs font-black tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              {lang === 'vi' ? 'BẰNG KHEN CHÍNH THỨC' : 'OFFICIAL MERIT'}
            </span>
            <span className="text-xs font-bold text-slate-300 hidden md:inline">
              Mã: <code className="font-mono bg-slate-800 px-2 py-0.5 rounded border border-slate-700 text-amber-400 font-bold">{certificate.code}</code>
            </span>
          </div>

          {/* Tab Switcher & Action Buttons */}
          <div className="flex items-center gap-2">
            <div className="bg-slate-800/90 p-1 rounded-xl flex items-center border border-slate-700 text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveTab('image')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'image'
                    ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? 'Ảnh Bằng Khen' : 'Actual Photo'}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('diploma')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'diploma'
                    ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? 'Bản Thuyết Minh' : 'Diploma Layout'}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleCopyCode}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              title="Sao chép định dạng <Bảng thi>-<Năm>-<Cấp thi>"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">{lang === 'vi' ? 'Đã sao chép' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden sm:inline">{lang === 'vi' ? 'Chép mã' : 'Copy'}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          {activeTab === 'image' ? (
            <div className="space-y-4">
              {/* Info Header Banner */}
              <div className="bg-gradient-to-r from-blue-950/90 via-slate-900 to-indigo-950/90 border border-blue-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/30">
                    <Award className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="font-black text-amber-300 block text-sm">
                      {getLocalizedText(certificate.awardTitle, lang)}
                    </span>
                    <span className="text-slate-300 text-xs font-medium">
                      {getLocalizedText(certificate.issuer, lang)} • {certificate.date || certificate.year}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                    title={lang === 'vi' ? 'Tùy chọn nạp thêm ảnh chụp từ thiết bị' : 'Optionally upload custom scan'}
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{customImage ? (lang === 'vi' ? 'Đổi ảnh khác' : 'Change photo') : (lang === 'vi' ? 'Tải ảnh khác lên' : 'Upload photo')}</span>
                  </button>
                </div>
              </div>

              {/* Photo View Box */}
              {currentDisplayImage ? (
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 group shadow-2xl flex flex-col items-center justify-center">
                  <div className="max-h-[62vh] w-full flex items-center justify-center p-3 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
                    <img 
                      src={currentDisplayImage} 
                      alt={getLocalizedText(certificate.awardTitle, lang)} 
                      onError={() => {
                        // Fallback to default certificate image
                        if (customImage) {
                          setCustomImage(null);
                        }
                      }}
                      className="max-h-[60vh] max-w-full w-auto object-contain rounded-xl shadow-2xl border border-slate-800/80 bg-white"
                    />
                  </div>

                  {/* Image Overlay Bar */}
                  <div className="w-full bg-slate-900/95 border-t border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                        {lang === 'vi' ? 'Ảnh bằng khen thực tế' : 'Real certificate photo'}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-300 font-mono font-medium">{certificate.code}</span>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <a 
                        href={currentDisplayImage} 
                        download={`BangKhen_${certificate.code.replace(/[^a-zA-Z0-9]/g, '_')}.svg`}
                        className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-bold flex items-center gap-1 transition-colors cursor-pointer"
                        title={lang === 'vi' ? 'Tải ảnh bằng khen về máy' : 'Download certificate photo'}
                      >
                        <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>{lang === 'vi' ? 'Tải ảnh về' : 'Download'}</span>
                      </a>
                      <a 
                        href={currentDisplayImage} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-bold flex items-center gap-1 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{lang === 'vi' ? 'Xem cỡ lớn' : 'Full size'}</span>
                      </a>
                      {customImage && (
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="px-3 py-1.5 bg-red-600/20 hover:bg-red-600/40 text-red-300 border border-red-500/30 rounded-lg font-bold transition-colors cursor-pointer"
                          title={lang === 'vi' ? 'Khôi phục ảnh mặc định' : 'Restore default'}
                        >
                          {lang === 'vi' ? 'Khôi phục ảnh gốc' : 'Restore'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ) : null}

                  {/* URL Input Form */}
                  {showUrlInput && (
                    <div className="mt-6 max-w-md mx-auto p-4 bg-slate-900 border border-slate-700 rounded-2xl text-left animate-fadeIn">
                      <label className="block text-xs font-bold text-slate-300 mb-2">
                        {lang === 'vi' ? 'Dán link ảnh bằng khen (Google Drive, Imgur, Cloudinary...):' : 'Paste Image URL:'}
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="url"
                          value={inputUrl}
                          onChange={(e) => setInputUrl(e.target.value)}
                          placeholder="https://example.com/bang-khen.jpg"
                          className="flex-1 px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                        <button
                          type="button"
                          onClick={handleSaveUrl}
                          className="px-4 py-2 bg-amber-500 text-slate-950 rounded-xl text-xs font-black hover:bg-amber-400 transition-colors cursor-pointer"
                        >
                          {lang === 'vi' ? 'Lưu' : 'Save'}
                        </button>
                      </div>
                    </div>
                  )}

              {/* Award Details Info */}
              <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800/80">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <h4 className="text-lg font-black text-amber-400 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span>{getLocalizedText(certificate.awardTitle, lang)}</span>
                  </h4>
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-slate-800 rounded-lg border border-slate-700 text-slate-300">
                    {certificate.code}
                  </span>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block mb-1">{lang === 'vi' ? 'Đơn vị khen tặng:' : 'Issued by:'}</span>
                    <span className="font-bold text-slate-200">{getLocalizedText(certificate.issuer, lang)}</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block mb-1">{lang === 'vi' ? 'Cấp & Thời gian:' : 'Level & Date:'}</span>
                    <span className="font-bold text-slate-200">{certificate.level[lang]} — {certificate.date || `Năm ${certificate.year}`}</span>
                  </div>
                  {certificate.decisionNo && (
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-500 block mb-1">{lang === 'vi' ? 'Số Quyết định ban hành:' : 'Decision No:'}</span>
                      <span className="font-mono font-bold text-amber-400">{certificate.decisionNo}</span>
                    </div>
                  )}
                  {certificate.signer && (
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-500 block mb-1">{lang === 'vi' ? 'Người ký ban hành:' : 'Signer:'}</span>
                      <span className="font-bold text-slate-200">{getLocalizedText(certificate.signer, lang)}</span>
                    </div>
                  )}
                </div>

                {certificate.description && (
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                    {getLocalizedText(certificate.description, lang)}
                  </p>
                )}
              </div>
            </div>
          ) : (
            /* Traditional Diploma Layout Tab */
            <div className="relative p-6 sm:p-10 bg-amber-50/95 text-slate-900 rounded-2xl shadow-xl border-8 border-double border-amber-600/70">
              {/* Corner Ornaments */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-700"></div>
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-700"></div>
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-700"></div>
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-700"></div>

              {/* National Emblem Header */}
              <div className="text-center mb-6">
                <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-800">
                  CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                </p>
                <p className="text-xs font-semibold text-slate-700 underline underline-offset-4 decoration-amber-600 mb-4">
                  Độc lập - Tự do - Hạnh phúc
                </p>

                <div className="inline-block px-4 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border mb-3 bg-amber-100 text-amber-900 border-amber-300">
                  {certificate.code}
                </div>

                <h2 className="text-2xl sm:text-4xl font-serif font-black tracking-wide uppercase text-amber-900 my-2">
                  {isNational ? 'BẰNG KHEN' : isRegional ? 'GIẤY CHỨNG NHẬN' : 'GIẤY KHEN'}
                </h2>
                
                <p className="text-xs sm:text-sm font-serif font-bold text-slate-800 uppercase tracking-wider max-w-xl mx-auto mt-2">
                  {getLocalizedText(certificate.issuer, lang)}
                </p>
                <p className="text-xs italic text-slate-600">
                  {lang === 'vi' ? 'TẶNG THƯỞNG CHO' : 'PROUDLY CONFERRED UPON'}
                </p>
              </div>

              {/* Recipient */}
              <div className="text-center my-6 py-4 border-y border-amber-200/80 bg-white/50 rounded-xl">
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 uppercase tracking-widest text-amber-950">
                  TRẦN BẢO KHIÊM
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  {lang === 'vi' ? 'Sinh ngày 02 tháng 06 năm 2015' : 'Born: June 2, 2015'} • Long Xuyên, An Giang
                </p>
              </div>

              {/* Merit Text */}
              <div className="text-center space-y-3 max-w-2xl mx-auto mb-8">
                <p className="text-sm sm:text-base font-bold text-slate-800">
                  Đã có thành tích xuất sắc đạt:
                </p>
                <div className="p-3 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 rounded-xl border border-amber-300/80 shadow-sm inline-block px-6">
                  <p className="text-base sm:text-lg font-black text-amber-950 uppercase">
                    {getLocalizedText(certificate.awardTitle, lang)}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif italic pt-2">
                  &ldquo;{getLocalizedText(certificate.description, lang)}&rdquo;
                </p>
              </div>

              {/* Signatures & Seal */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-amber-200/80 text-xs">
                <div className="text-left space-y-1.5">
                  <p className="text-[11px] text-slate-500 font-mono">
                    Mã bằng khen: <span className="font-bold text-slate-800">{certificate.code}</span>
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Phân loại: <span className="font-bold text-slate-800">{certificate.division} — {certificate.level[lang]}</span>
                  </p>
                  {certificate.decisionNo && (
                    <p className="text-[11px] text-slate-600 font-mono">
                      Số Quyết định: <span className="font-bold text-amber-900 bg-amber-200/60 px-1.5 py-0.5 rounded">{certificate.decisionNo}</span>
                    </p>
                  )}
                  <p className="text-[11px] text-slate-500">
                    Thời gian: <span className="font-bold text-slate-800">{certificate.date || `Năm ${certificate.year}`}</span>
                  </p>
                </div>

                <div className="text-center space-y-2 relative">
                  <p className="italic text-slate-600">
                    {certificate.date ? (certificate.date.includes('/') ? `Ngày ${certificate.date}` : certificate.date) : `Năm ${certificate.year}`}
                  </p>
                  <p className="font-bold uppercase text-slate-800 tracking-wide text-[11px]">
                    {certificate.signer ? getLocalizedText(certificate.signer, lang) : (lang === 'vi' ? 'TM. BAN TỔ CHỨC' : 'ORGANIZING COMMITTEE')}
                  </p>
                  
                  {/* Stamp Graphic */}
                  <div className="w-24 h-24 mx-auto my-1 rounded-full border-4 border-dashed border-red-600/80 flex flex-col items-center justify-center text-red-600 transform -rotate-12 bg-red-50/40 shadow-xs">
                    <ShieldCheck className="w-6 h-6 stroke-[2]" />
                    <span className="text-[9px] font-black uppercase tracking-tighter text-center px-1">
                      CHỨNG NHẬN CHÍNH THỨC
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">{lang === 'vi' ? 'Định dạng Bằng khen chuẩn:' : 'Standard Certificate format:'}</span>
            <code className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800 text-amber-400 font-bold font-mono">
              &lt;Bảng thi&gt;-&lt;Năm&gt;-&lt;Cấp thi&gt;
            </code>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors cursor-pointer"
          >
            {lang === 'vi' ? 'Đóng cửa sổ' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AwardModal;
