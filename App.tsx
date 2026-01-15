
import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { PERSONAL_INFO, ACHIEVEMENTS, PROJECTS, SKILLS, MEDIA, YOUTUBE_CHANNELS } from './constants';
import { Award, Code, Youtube, MapPin, Calendar, School, Users, Newspaper, ExternalLink, ChevronRight, CheckCircle, MessageSquare, Star } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-24">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-bold mb-8 shadow-sm">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                Giải Nhất Quốc Gia Tin Học Trẻ 2024
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Mình là <span className="gradient-text">{PERSONAL_INFO.fullName}</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {PERSONAL_INFO.bio} <br/>
                <span className="font-medium text-slate-800">Tự hào là người con của đất An Giang.</span>
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-xl shadow-blue-200 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Học cùng mình
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 bg-white border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95"
                >
                  Xem dự án
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                {/* Decorative frames */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-[2.5rem] blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-3 -z-10 opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-sky-500 rounded-[2.5rem] -rotate-3 -z-10 opacity-10 group-hover:-rotate-6 transition-transform duration-500"></div>
                
                <div className="relative w-full max-w-sm lg:max-w-md aspect-[4/5] bg-white rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src={PERSONAL_INFO.profileImage} 
                    alt="Trần Bảo Khiêm nhận giải Nhất Quốc gia" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1599305090598-fe179d501c27?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                    <p className="text-sm font-medium opacity-90">Khoảnh khắc tự hào</p>
                    <p className="text-lg font-bold italic">"Đam mê dẫn lối thành công"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section id="about" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-5 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all group">
              <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Sinh ngày</h4>
                <p className="text-slate-600 font-medium">{PERSONAL_INFO.birthDate}</p>
              </div>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-5 hover:bg-white hover:shadow-xl hover:border-sky-100 transition-all group">
              <div className="p-4 bg-sky-100 text-sky-600 rounded-2xl group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Quê quán</h4>
                <p className="text-slate-600 font-medium">{PERSONAL_INFO.location}</p>
              </div>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-5 hover:bg-white hover:shadow-xl hover:border-indigo-100 transition-all group">
              <div className="p-4 bg-indigo-100 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <School className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Đang học tại</h4>
                <p className="text-slate-600 font-medium">{PERSONAL_INFO.school}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Thành tích nổi bật</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {ACHIEVEMENTS.map((item) => (
              <div key={item.id} className="relative p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Award className="w-32 h-32" />
                </div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-yellow-50 text-yellow-600 rounded-2xl group-hover:bg-yellow-100 transition-colors">
                    <Award className="w-10 h-10" />
                  </div>
                  <span className="px-4 py-1.5 bg-slate-100 text-slate-600 font-bold rounded-full text-sm">{item.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Kỹ năng lập trình</h2>
              <p className="text-slate-400 mb-12 leading-relaxed text-xl">
                Bắt đầu làm quen với lập trình từ năm 3 tuổi, hiện tại mình đang nỗ lực rèn luyện tư duy giải thuật nâng cao và phát triển ứng dụng sáng tạo.
              </p>
              <div className="space-y-10">
                {SKILLS.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-4">
                        <span className="p-3 bg-slate-800 rounded-xl text-blue-400 border border-slate-700">{skill.icon}</span>
                        <span className="font-bold text-xl">{skill.name}</span>
                      </div>
                      <span className="text-lg font-bold text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full p-0.5">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-1000 ease-out" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="p-8 bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-all transform hover:-translate-y-2">
                  <div className="text-4xl font-black text-blue-400 mb-2">D1</div>
                  <div className="text-slate-400 font-medium">Bảng thi Quốc gia</div>
                </div>
                <div className="p-8 bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700 hover:border-sky-400/50 transition-all transform hover:-translate-y-2">
                  <div className="text-4xl font-black text-sky-400 mb-2">7+</div>
                  <div className="text-slate-400 font-medium">Năm kinh nghiệm</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-8 bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700 hover:border-indigo-400/50 transition-all transform hover:-translate-y-2">
                  <div className="text-4xl font-black text-indigo-400 mb-2">Top 1</div>
                  <div className="text-slate-400 font-medium">Học sinh Tiêu biểu</div>
                </div>
                <div className="p-8 bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700 hover:border-purple-400/50 transition-all transform hover:-translate-y-2">
                  <div className="text-4xl font-black text-purple-400 mb-2">3+</div>
                  <div className="text-slate-400 font-medium">Kênh YouTube</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-3">Dự án Sáng tạo</h2>
              <p className="text-xl text-slate-600">Những sản phẩm được xây dựng bằng niềm đam mê.</p>
            </div>
            <a href="https://scratch.mit.edu/users/Khiemchoigame2015/" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-700 rounded-full font-bold hover:bg-blue-100 transition-all group">
              Khám phá Scratch <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 text-white rounded-[3.5rem] shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="px-8 py-16 lg:p-20 relative z-10 text-center">
            <div className="inline-flex p-5 bg-white/20 backdrop-blur-xl rounded-3xl mb-10 shadow-inner">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">Học Scratch cùng<br/>Nhà Vô Địch Quốc Gia</h2>
            <p className="text-xl text-blue-50/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Mục tiêu của mình là xây dựng một cộng đồng cùng tiến bộ. Mình sẵn sàng chia sẻ các phương pháp giải bài tập, tư duy thuật toán và kinh nghiệm thực chiến từ các cuộc thi lớn.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                "Giải đề thi Tin Học Trẻ",
                "Phát triển Game sáng tạo",
                "Học lập trình vui vẻ"
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/15 backdrop-blur-md p-5 rounded-2xl flex items-center gap-4 hover:bg-white/25 transition-all cursor-default">
                  <CheckCircle className="w-6 h-6 text-sky-300 flex-shrink-0" />
                  <span className="font-bold text-lg text-left">{feature}</span>
                </div>
              ))}
            </div>
            <button className="group px-12 py-5 bg-white text-blue-700 hover:bg-blue-50 font-black rounded-full text-xl shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto">
              Tham gia ngay
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Media & Social */}
      <section id="media" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* News */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200">
                  <Newspaper className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl font-black text-slate-900">Tiêu điểm Báo chí</h2>
              </div>
              <div className="space-y-6">
                {MEDIA.map((item) => (
                  <a 
                    key={item.id} 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-7 bg-white rounded-[2rem] border border-slate-100 hover:border-blue-300 hover:shadow-xl transition-all group"
                  >
                    <div className="flex-1 pr-4">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-black uppercase tracking-widest mb-3">
                        {item.source}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-12">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* YouTube */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-red-600 rounded-2xl shadow-lg shadow-red-200">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl font-black text-slate-900">Kênh YouTube</h2>
              </div>
              <div className="grid gap-8">
                {YOUTUBE_CHANNELS.map((channel) => (
                  <div key={channel.id} className="relative p-10 bg-white rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-2xl transition-all group overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                       <Youtube className="w-24 h-24 text-red-600" />
                    </div>
                    <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-red-100">
                      <Youtube className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">{channel.name}</h3>
                    <p className="text-slate-500 font-medium mb-8">Kiến thức & Đam mê lập trình</p>
                    <a 
                      href={channel.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-slate-900 hover:bg-red-600 text-white rounded-2xl font-black transition-all transform hover:scale-105 shadow-xl"
                    >
                      XEM NGAY
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
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-blue-200">K</div>
            <span className="font-black text-2xl text-slate-900 tracking-tighter">TRẦN BẢO KHIÊM</span>
          </div>
          <p className="text-slate-500 font-medium max-w-md mx-auto mb-10">
            Học tập không ngừng, sáng tạo không giới hạn. Hành trình của mình chỉ mới bắt đầu!
          </p>
          <div className="flex justify-center gap-8">
            {[
              { icon: <Code />, link: "#", color: "hover:text-blue-600" },
              { icon: <Youtube />, link: "https://www.youtube.com/@KhiemSonic", color: "hover:text-red-600" },
              { icon: <MessageSquare />, link: "#", color: "hover:text-sky-500" }
            ].map((social, i) => (
              <a key={i} href={social.link} className={`text-slate-400 ${social.color} transition-all transform hover:scale-125`}>
                {React.cloneElement(social.icon as React.ReactElement, { className: "w-7 h-7" })}
              </a>
            ))}
          </div>
          <div className="mt-12 text-slate-400 text-sm font-bold uppercase tracking-widest">
            &copy; 2024 - Coded with 💙 by Bao Khiem
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
