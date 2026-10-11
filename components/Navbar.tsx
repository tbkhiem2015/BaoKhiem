import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = UI_TRANSLATIONS[lang];

  const navItems = [
    { name: t.nav.about, href: 'about' },
    { name: t.nav.achievements, href: 'achievements' },
    { name: t.nav.skills, href: 'skills' },
    { name: t.nav.projects, href: 'projects' },
    { name: t.nav.community, href: 'community' },
    { name: t.nav.media, href: 'media' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/70 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer select-none" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-700 to-blue-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-200">
            K
          </div>
          <div className="leading-tight">
            <span className="font-extrabold text-base sm:text-lg block text-slate-900 tracking-tight">
              Trần Bảo Khiêm
            </span>
            <span className="text-[10px] font-bold text-blue-600 block uppercase tracking-wider">
              {lang === 'vi' ? 'Lập trình viên nhí' : 'Junior Coder'}
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Language Switcher & Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle Control */}
          <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200 shadow-inner">
            <button
              type="button"
              onClick={() => onLanguageChange('vi')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                lang === 'vi'
                  ? 'bg-blue-600 text-white shadow-sm scale-105'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-label="Tiếng Việt"
              title="Chuyển sang Tiếng Việt"
            >
              <span className="text-xs">🇻🇳</span>
              <span>VI</span>
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                lang === 'en'
                  ? 'bg-blue-600 text-white shadow-sm scale-105'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-label="English"
              title="Switch to English"
            >
              <span className="text-xs">🇬🇧</span>
              <span>EN</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base font-bold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50 last:border-none flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-slate-400 text-xs">→</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
