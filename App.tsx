
import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { PERSONAL_INFO, ACHIEVEMENTS, PROJECTS, SKILLS, MEDIA, YOUTUBE_CHANNELS } from './constants';
import { Award, Code, Youtube, MapPin, Calendar, School, Users, Newspaper, ExternalLink, ChevronRight, CheckCircle, MessageSquare } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                Giải Nhất Quốc Gia Tin Học Trẻ 2024
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Chào bạn, mình là <span className="gradient-text">{PERSONAL_INFO.fullName}</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                {PERSONAL_INFO.bio} Hiện mình đang học tập tại quê hương <b>An Giang</b> yêu dấu.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-lg shadow-blue-200 transition-all transform hover:scale-105 active:scale-95"
                >
                  Học cùng mình
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-white border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95"
                >
                  Xem dự án
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 -z-10 opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-sky-500 rounded-3xl -rotate-3 -z-10 shadow-xl shadow-blue-200"></div>
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.fullName} 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/50"
                  onError={(e) => {
                    // Fallback nếu chưa lưu file ảnh kịp
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/boycoder/800/800";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section id="about" className="py-12 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4 hover:border-blue-200 transition-colors">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Sinh ngày</h4>
                <p className="text-slate-600 text-sm">{PERSONAL_INFO.birthDate}</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4 hover:border-sky-200 transition-colors">
              <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Địa chỉ</h4>
                <p className="text-slate-600 text-sm">{PERSONAL_INFO.location}</p>
              </div>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4 hover:border-indigo-200 transition-colors">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                <School className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Trường học</h4>
                <p className="text-slate-600 text-sm">{PERSONAL_INFO.school}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Thành tích nổi bật</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {ACHIEVEMENTS.map((item) => (
              <div key={item.id} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-4 bg-yellow-50 text-yellow-600 rounded-2xl group-hover:bg-yellow-100 transition-colors">
                    <Award className="w-8 h-8" />
                  </div>
                  <span className="text-slate-400 font-bold">{item.year}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Kỹ năng lập trình</h2>
              <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                Mình bắt đầu làm quen với lập trình từ năm 3 tuổi. Hiện tại, mình tập trung vào hai mảng chính là giải thuật và lập trình kéo thả sáng tạo.
              </p>
              <div className="space-y-8">
                {SKILLS.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <span className="p-2 bg-slate-800 rounded-lg text-blue-400">{skill.icon}</span>
                        <span className="font-semibold text-lg">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-800 rounded-full">
                      <div className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className="text-3xl font-bold text-blue-400 mb-1">D1</div>
                  <div className="text-sm text-slate-400">Bảng thi Quốc gia</div>
                </div>
                <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-sky-400/50 transition-colors">
                  <div className="text-3xl font-bold text-sky-400 mb-1">7+</div>
                  <div className="text-sm text-slate-400">Năm khám phá</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-indigo-400/50 transition-colors">
                  <div className="text-3xl font-bold text-indigo-400 mb-1">Top 10</div>
                  <div className="text-sm text-slate-400">Học sinh xuất sắc</div>
                </div>
                <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-purple-400/50 transition-colors">
                  <div className="text-3xl font-bold text-purple-400 mb-1">3+</div>
                  <div className="text-sm text-slate-400">Dự án lớn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Dự án của tôi</h2>
              <p className="text-slate-600">Những sản phẩm mình đã tâm huyết xây dựng.</p>
            </div>
            <a href="https://scratch.mit.edu/users/Khiemchoigame2015/" target="_blank" className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all group">
              Xem thêm trên Scratch <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Project Section */}
      <section id="community" className="py-24 bg-gradient-to-br from-blue-600 to-sky-700 text-white rounded-[3rem] mx-4 my-20 shadow-2xl overflow-hidden relative scroll-mt-24">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-5xl mx-auto px-8 relative z-10 text-center">
          <div className="inline-flex p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-8">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Dự án Cộng đồng: Học Scratch cùng Nhà Vô Địch</h2>
          <p className="text-xl text-blue-50/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Mình muốn chia sẻ kinh nghiệm đạt giải Nhất Quốc gia để hỗ trợ các bạn tiểu học cùng đam mê. Một cộng đồng nơi chúng mình cùng học, cùng thi và cùng sáng tạo.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              "Lộ trình thi Tin Học Trẻ",
              "Mẹo giải toán Scratch nhanh",
              "Hỗ trợ sửa lỗi dự án 1:1"
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex items-center gap-3 hover:bg-white/20 transition-colors">
                <CheckCircle className="w-5 h-5 text-sky-300 flex-shrink-0" />
                <span className="font-semibold text-left leading-snug">{feature}</span>
              </div>
            ))}
          </div>
          <button className="px-10 py-4 bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-full text-lg shadow-xl transition-all transform hover:scale-105 active:scale-95">
            Tham gia ngay
          </button>
        </div>
      </section>

      {/* Media & YouTube Section */}
      <section id="media" className="py-20 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Press Mentions */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Newspaper className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900">Báo chí nói về mình</h2>
              </div>
              <div className="space-y-4">
                {MEDIA.map((item) => (
                  <a 
                    key={item.id} 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <div>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{item.source}</span>
                      <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* YouTube Channels */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Youtube className="w-6 h-6 text-red-600" />
                <h2 className="text-3xl font-bold text-slate-900">Kênh YouTube</h2>
              </div>
              <div className="grid gap-6">
                {YOUTUBE_CHANNELS.map((channel) => (
                  <div key={channel.id} className="p-8 bg-white rounded-3xl border border-slate-200 flex flex-col items-center text-center hover:shadow-lg transition-all group">
                    <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                      <Youtube className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{channel.name}</h3>
                    <p className="text-slate-500 text-sm mb-6 italic">Chia sẻ kiến thức & Giải trí</p>
                    <a 
                      href={channel.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-bold transition-all transform hover:scale-105"
                    >
                      Đăng ký kênh
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">K</div>
            <span className="font-bold text-slate-900 tracking-tight text-xl">Trần Bảo Khiêm</span>
          </div>
          <p className="text-slate-500 text-sm mb-8">
            &copy; 2024 Design with 💙 for my journey.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors transform hover:scale-110"><Code className="w-5 h-5" /></a>
            <a href="https://www.youtube.com/@KhiemSonic" className="text-slate-400 hover:text-red-600 transition-colors transform hover:scale-110"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors transform hover:scale-110"><MessageSquare className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
