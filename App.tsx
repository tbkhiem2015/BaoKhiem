
import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { PERSONAL_INFO, ACHIEVEMENTS, PROJECTS, SKILLS, MEDIA, YOUTUBE_CHANNELS } from './constants';
import { Award, Code, Youtube, MapPin, Calendar, School, Users, Newspaper, ExternalLink, ChevronRight, CheckCircle, MessageSquare, Star, Trophy } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section - The "Winner" Layout */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-24">
        {/* Animated Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100/50 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-sky-100/50 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Text Content */}
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
              
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-black text-slate-900 tracking-tighter">7+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Năm Lập Trình</span>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-black text-slate-900 tracking-tighter">10+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Dự án Scratch</span>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-black text-slate-900 tracking-tighter">Gold</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">D1 Winner</span>
                </div>
              </div>
            </div>

            {/* Winner Image Frame */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group perspective-1000">
                {/* Glow effects */}
                <div className="absolute -inset-6 bg-gradient-to-tr from-yellow-400 via-blue-500 to-sky-400 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl z-20 transform rotate-12 group-hover:scale-110 transition-transform">
                   <Star className="w-12 h-12 text-white fill-white" />
                </div>
                
                {/* Main Frame */}
                <div className="relative w-full max-w-sm lg:max-w-md aspect-[1/1.2] bg-white rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-[12px] border-white ring-1 ring-slate-100 transform transition-all duration-700 group-hover:rotate-1 group-hover:scale-[1.02]">
                  <img 
                    src={PERSONAL_INFO.profileImage} 
                    alt="Trần Bảo Khiêm nhận giải Nhất Quốc gia" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if local image not found
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1599305090598-fe179d501c27?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  
                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
                    <p className="text-sm font-bold text-yellow-400 uppercase tracking-[0.2em] mb-1">Champion 2024</p>
                    <p className="text-2xl font-black tracking-tight">Trần Bảo Khiêm</p>
                    <p className="text-sm opacity-80 font-medium">Hội thi Tin Học Trẻ Toàn quốc</p>
                  </div>
                </div>
                
                {/* floating badge */}
                <div className="absolute -bottom-8 -left-8 p-6 bg-white rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Kỹ năng</p>
                    <p className="text-lg font-black text-slate-900 tracking-tight">Python & Scratch</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Profile Overview */}
      <section id="about" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-10 bg-slate-50 rounded-[2.5rem] border border-transparent hover:bg-white hover:border-blue-100 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                <Calendar className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">Ngày sinh</h4>
              <p className="text-slate-600 font-bold text-lg">{PERSONAL_INFO.birthDate}</p>
            </div>
            
            <div className="group p-10 bg-slate-50 rounded-[2.5rem] border border-transparent hover:bg-white hover:border-sky-100 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-500">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">Địa chỉ</h4>
              <p className="text-slate-600 font-bold text-lg">{PERSONAL_INFO.location}</p>
            </div>
            
            <div className="group p-10 bg-slate-50 rounded-[2.5rem] border border-transparent hover:bg-white hover:border-indigo-100 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                <School className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">Trường học</h4>
              <p className="text-slate-600 font-bold text-lg leading-snug">{PERSONAL_INFO.school}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement List */}
      <section id="achievements" className="py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tighter">Bảng Vàng Thành Tích</h2>
            <div className="h-2 w-32 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            {ACHIEVEMENTS.map((item) => (
              <div key={item.id} className="relative p-12 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Trophy className="w-48 h-48" />
                </div>
                <div className="flex justify-between items-start mb-8">
                  <div className="p-5 bg-yellow-50 text-yellow-600 rounded-[1.5rem] group-hover:bg-yellow-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                    <Award className="w-10 h-10" />
                  </div>
                  <span className="px-6 py-2 bg-slate-100 text-slate-600 font-black rounded-full text-sm uppercase tracking-widest">{item.year}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[180px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tight">Vũ khí công nghệ</h2>
              <p className="text-slate-400 mb-16 leading-relaxed text-xl font-medium">
                Mình không chỉ giải toán bằng code, mà còn biến những ý tưởng thành hiện thực thông qua các dòng lệnh logic.
              </p>
              <div className="space-y-12">
                {SKILLS.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-5">
                      <div className="flex items-center gap-5">
                        <span className="p-4 bg-slate-800 rounded-2xl text-blue-400 border border-slate-700 shadow-xl">{skill.icon}</span>
                        <span className="font-black text-2xl tracking-tight">{skill.name}</span>
                      </div>
                      <span className="text-xl font-black text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-4 bg-slate-800 rounded-full p-1 border border-slate-700">
                      <div className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-blue-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-1000 ease-out" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-8 pt-16">
                <div className="p-10 bg-slate-800/40 backdrop-blur-xl rounded-[2.5rem] border border-slate-700/50 hover:border-blue-500/50 transition-all transform hover:-translate-y-3 shadow-2xl">
                  <div className="text-5xl font-black text-blue-400 mb-3 tracking-tighter">D1</div>
                  <div className="text-slate-400 font-black uppercase tracking-widest text-xs">Phân khúc thi</div>
                </div>
                <div className="p-10 bg-slate-800/40 backdrop-blur-xl rounded-[2.5rem] border border-slate-700/50 hover:border-sky-400/50 transition-all transform hover:-translate-y-3 shadow-2xl">
                  <div className="text-5xl font-black text-sky-400 mb-3 tracking-tighter">7+</div>
                  <div className="text-slate-400 font-black uppercase tracking-widest text-xs">Năm lập trình</div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="p-10 bg-slate-800/40 backdrop-blur-xl rounded-[2.5rem] border border-slate-700/50 hover:border-indigo-400/50 transition-all transform hover:-translate-y-3 shadow-2xl">
                  <div className="text-5xl font-black text-indigo-400 mb-3 tracking-tighter">TOP</div>
                  <div className="text-slate-400 font-black uppercase tracking-widest text-xs">Học sinh giỏi</div>
                </div>
                <div className="p-10 bg-slate-800/40 backdrop-blur-xl rounded-[2.5rem] border border-slate-700/50 hover:border-purple-400/50 transition-all transform hover:-translate-y-3 shadow-2xl">
                  <div className="text-5xl font-black text-purple-400 mb-3 tracking-tighter">10+</div>
                  <div className="text-slate-400 font-black uppercase tracking-widest text-xs">Dự án lớn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">Dự án Sáng tạo</h2>
              <p className="text-xl text-slate-500 font-medium">Biến những ý tưởng điên rồ thành sản phẩm thật.</p>
            </div>
            <a href="https://scratch.mit.edu/users/Khiemchoigame2015/" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-blue-50 text-blue-700 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all group">
              KHÁM PHÁ SCRATCH <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Community / Mentorship */}
      <section id="community" className="py-24 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 text-white rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(37,99,235,0.4)] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          
          <div className="px-10 py-20 lg:p-24 relative z-10 text-center">
            <div className="inline-flex p-6 bg-white/20 backdrop-blur-2xl rounded-3xl mb-12 shadow-inner border border-white/20">
              <Users className="w-14 h-14 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight">Học Scratch cùng<br/>Nhà Vô Địch Quốc Gia</h2>
            <p className="text-xl lg:text-2xl text-blue-50/90 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
              Khiêm tin rằng lập trình không hề khó nếu chúng ta cùng nhau học tập. Mình sẽ chia sẻ tất cả bí kíp giải toán và làm game cho các bạn.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              {[
                "Giải thuật thi Quốc gia",
                "Lập trình Game 2D",
                "Tư duy Toán học Code"
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-[1.5rem] flex items-center gap-5 border border-white/10 hover:bg-white/20 transition-all">
                  <CheckCircle className="w-8 h-8 text-sky-300 flex-shrink-0" />
                  <span className="font-black text-xl text-left tracking-tight">{feature}</span>
                </div>
              ))}
            </div>
            <button className="group px-14 py-6 bg-white text-blue-700 hover:bg-blue-50 font-black rounded-3xl text-2xl shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-4 mx-auto">
              THAM GIA NGAY
              <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Press & Socials */}
      <section id="media" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Press */}
            <div>
              <div className="flex items-center gap-5 mb-12">
                <div className="p-4 bg-blue-600 rounded-3xl shadow-xl shadow-blue-200">
                  <Newspaper className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Truyền thông</h2>
              </div>
              <div className="space-y-8">
                {MEDIA.map((item) => (
                  <a 
                    key={item.id} 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-blue-400 hover:shadow-2xl transition-all group"
                  >
                    <div className="flex-1 pr-6">
                      <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-xl text-xs font-black uppercase tracking-[0.2em] mb-4">
                        {item.source}
                      </span>
                      <h4 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {item.title}
                      </h4>
                    </div>
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-12 group-hover:scale-110 shadow-inner">
                      <ExternalLink className="w-7 h-7" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* YouTube Channels */}
            <div>
              <div className="flex items-center gap-5 mb-12">
                <div className="p-4 bg-red-600 rounded-3xl shadow-xl shadow-red-200">
                  <Youtube className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Kênh YouTube</h2>
              </div>
              <div className="grid gap-10">
                {YOUTUBE_CHANNELS.map((channel) => (
                  <div key={channel.id} className="relative p-12 bg-white rounded-[3rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all group overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                       <Youtube className="w-32 h-32 text-red-600" />
                    </div>
                    <div className="w-24 h-24 bg-red-50 text-red-600 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-6 shadow-xl shadow-red-100">
                      <Youtube className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{channel.name}</h3>
                    <p className="text-slate-500 font-bold mb-10 text-lg uppercase tracking-widest text-xs opacity-60">Creative & Coding Content</p>
                    <a 
                      href={channel.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-5 bg-slate-900 hover:bg-red-600 text-white rounded-2xl font-black transition-all transform hover:scale-105 shadow-2xl tracking-widest"
                    >
                      ĐĂNG KÝ NGAY
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Footer */}
      <footer className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-16 h-16 bg-blue-600 rounded-[1.5rem] flex items-center justify-center text-white font-black text-3xl shadow-2xl shadow-blue-200">K</div>
            <span className="font-black text-4xl text-slate-900 tracking-tighter uppercase">TRẦN BẢO KHIÊM</span>
          </div>
          <p className="text-slate-500 font-bold max-w-2xl mx-auto mb-12 text-xl leading-relaxed italic">
            "Không có bài toán nào quá khó, chỉ có những nỗ lực chưa đủ nhiều."
          </p>
          
          <div className="flex justify-center gap-10 mb-16">
            {[
              { icon: <Code />, link: "https://scratch.mit.edu/users/Khiemchoigame2015/", color: "hover:text-blue-600" },
              { icon: <Youtube />, link: "https://www.youtube.com/@KhiemSonic", color: "hover:text-red-600" },
              { icon: <MessageSquare />, link: "#", color: "hover:text-sky-500" }
            ].map((social, i) => (
              <a key={i} href={social.link} target="_blank" className={`text-slate-300 ${social.color} transition-all transform hover:scale-125`}>
                {React.cloneElement(social.icon as React.ReactElement, { className: "w-10 h-10" })}
              </a>
            ))}
          </div>
          
          <div className="text-slate-300 text-sm font-black uppercase tracking-[0.5em]">
            &copy; 2024 - BAO KHIEM OFFICIAL PORTFOLIO
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
