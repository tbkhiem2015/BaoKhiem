
import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { PERSONAL_INFO, ACHIEVEMENTS, PROJECTS, SKILLS, MEDIA, YOUTUBE_CHANNELS } from './constants';
import { Award, Code, Youtube, MapPin, Calendar, School, Users, Newspaper, ExternalLink, ChevronRight, CheckCircle, MessageSquare, Star, Trophy } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100/50 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-sky-100/50 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-full text-yellow-700 text-sm font-black mb-8 shadow-sm">
                <Trophy className="w-4 h-4 text-yellow-600" />
                GIẢI NHẤT QUỐC GIA TIN HỌC TRẺ 2024
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Chào bạn! <br/>
                Mình là <span className="gradient-text">{PERSONAL_INFO.fullName}</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                {PERSONAL_INFO.bio}
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black shadow-xl shadow-blue-200 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3"
                >
                  <Users className="w-6 h-6" />
                  HỌC CÙNG KHIÊM
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 bg-white border-2 border-slate-100 hover:border-blue-600 text-slate-700 hover:text-blue-600 rounded-2xl font-black transition-all transform hover:scale-105 active:scale-95"
                >
                  XEM DỰ ÁN
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group [perspective:1000px]">
                <div className="absolute -inset-6 bg-gradient-to-tr from-yellow-400 via-blue-500 to-sky-400 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl z-20 transform rotate-12 group-hover:scale-110 transition-transform">
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
                    <p className="text-sm font-bold text-yellow-400 uppercase tracking-[0.2em] mb-1">Champion 2024</p>
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
              <h4 className="text-xl font-black text-slate-900 mb-2">Ngày sinh</h4>
              <p className="text-slate-600 font-bold">{PERSONAL_INFO.birthDate}</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:bg-white hover:border-sky-100 hover:shadow-2xl transition-all duration-500 group">
              <MapPin className="w-12 h-12 text-sky-600 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-black text-slate-900 mb-2">Địa chỉ</h4>
              <p className="text-slate-600 font-bold">{PERSONAL_INFO.location}</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:bg-white hover:border-indigo-100 hover:shadow-2xl transition-all duration-500 group">
              <School className="w-12 h-12 text-indigo-600 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-black text-slate-900 mb-2">Trường học</h4>
              <p className="text-slate-600 font-bold leading-snug">{PERSONAL_INFO.school}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Bảng Vàng Thành Tích</h2>
            <div className="h-2 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {ACHIEVEMENTS.map((item) => (
              <div key={item.id} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
                <Trophy className="absolute -bottom-4 -right-4 w-32 h-32 text-slate-50 group-hover:text-blue-50 transition-colors" />
                <div className="flex justify-between items-start mb-6">
                  <Award className="w-12 h-12 text-yellow-600 p-2 bg-yellow-50 rounded-xl" />
                  <span className="px-4 py-1 bg-slate-100 text-slate-600 font-black rounded-full text-xs">{item.year}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 font-medium relative z-10">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Kỹ năng lập trình</h2>
              <div className="space-y-10">
                {SKILLS.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-4">
                        <span className="text-blue-400">{skill.icon}</span>
                        <span className="font-bold text-xl">{skill.name}</span>
                      </div>
                      <span className="font-bold text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700 text-center">
                <div className="text-4xl font-black text-blue-400 mb-2">D1</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Bảng thi</div>
              </div>
              <div className="p-8 bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700 text-center">
                <div className="text-4xl font-black text-sky-400 mb-2">7+</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Năm code</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Dự án Sáng tạo</h2>
            <a href="https://scratch.mit.edu/users/Khiemchoigame2015/" target="_blank" className="hidden sm:flex items-center gap-2 text-blue-600 font-bold group">
              Tất cả dự án <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
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
                <h2 className="text-3xl font-black text-slate-900">Tiêu điểm Báo chí</h2>
              </div>
              <div className="space-y-4">
                {MEDIA.map((item) => (
                  <a key={item.id} href={item.link} target="_blank" className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-xl transition-all group">
                    <div>
                      <span className="text-xs font-black text-blue-600 uppercase mb-2 block">{item.source}</span>
                      <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{item.title}</h4>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-blue-600" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-10">
                <Youtube className="w-8 h-8 text-red-600" />
                <h2 className="text-3xl font-black text-slate-900">Kênh YouTube</h2>
              </div>
              <div className="grid gap-6">
                {YOUTUBE_CHANNELS.map((channel) => (
                  <div key={channel.id} className="p-8 bg-white rounded-3xl border border-slate-100 text-center hover:shadow-2xl transition-all group">
                    <Youtube className="w-12 h-12 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-black text-slate-900 mb-4">{channel.name}</h3>
                    <a href={channel.link} target="_blank" className="inline-block px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-red-600 transition-colors">ĐĂNG KÝ</a>
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
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl">K</div>
            <span className="font-black text-xl text-slate-900 tracking-tighter uppercase">TRẦN BẢO KHIÊM</span>
          </div>
          <div className="flex justify-center gap-8 mb-10 text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors"><Code /></a>
            <a href="https://www.youtube.com/@KhiemSonic" className="hover:text-red-600 transition-colors"><Youtube /></a>
            <a href="#" className="hover:text-sky-500 transition-colors"><MessageSquare /></a>
          </div>
          <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.5em]">
            &copy; 2024 - BAO KHIEM OFFICIAL PORTFOLIO
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
