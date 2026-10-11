import React from 'react';
import { Project, Achievement, MediaMention, YoutubeChannel, Language, LocalizedProp } from './types';
import { Code, BookOpen } from 'lucide-react';

export const getLocalizedText = (value: LocalizedProp | undefined, lang: Language): string => {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[lang] || value.vi || '';
};

export const PERSONAL_INFO = {
  fullName: "Trần Bảo Khiêm",
  birthDate: {
    vi: "2 tháng 6 năm 2015",
    en: "June 2, 2015"
  },
  location: {
    vi: "Bình Đức, Long Xuyên, An Giang",
    en: "Binh Duc, Long Xuyen, An Giang, Vietnam"
  },
  school: {
    vi: "Lớp 6A1, trường Trung học cơ sở Lý Thường Kiệt",
    en: "Class 6A1, Ly Thuong Kiet Secondary School"
  },
  bio: {
    vi: "Lập trình viên nhí đam mê sáng tạo nội dung và giải thuật. Luôn khát khao chia sẻ kiến thức công nghệ đến bạn bè cùng trang lứa.",
    en: "Young programmer passionate about algorithmic problem solving and creative coding. Dedicated to sharing technology passion with peers."
  },
  profileImage: "https://tainangviet.vn/source/image/DMG06540.jpg"
};

export const UI_TRANSLATIONS = {
  vi: {
    nav: {
      about: "Giới thiệu",
      achievements: "Thành tích",
      skills: "Kỹ năng",
      projects: "Dự án",
      community: "Cộng đồng",
      media: "Truyền thông"
    },
    hero: {
      badge: "GIẢI NHẤT QUỐC GIA TIN HỌC TRẺ 2025",
      greeting: "Chào bạn!",
      intro: "Mình là",
      championTag: "Champion 2025",
      ctaLearn: "HỌC CÙNG KHIÊM",
      ctaProjects: "XEM DỰ ÁN"
    },
    about: {
      birthDate: "Ngày sinh",
      location: "Địa chỉ",
      school: "Trường học"
    },
    achievements: {
      title: "Bảng Vàng Thành Tích",
      subtitle: "Những cột mốc và giải thưởng đáng tự hào trên con đường chinh phục công nghệ",
      tabAll: "Tất cả thành tích",
      tab2026: "Năm 2026",
      tab2025: "Năm 2025",
      board2026Title: "Bảng Vàng Thành Tích 2026",
      board2025Title: "Bảng Vàng Thành Tích 2025",
      latestTag: "Mới nhất",
      nationalTag: "Giải Quốc Gia"
    },
    skills: {
      title: "Kỹ năng lập trình",
      divisionBadge: "Bảng thi đấu",
      experienceBadge: "Năm code"
    },
    projects: {
      title: "Dự án Sáng tạo",
      viewAll: "Tất cả dự án"
    },
    media: {
      title: "Tiêu điểm Báo chí",
      youtubeTitle: "Kênh YouTube & Cộng đồng",
      subscribe: "ĐĂNG KÝ"
    },
    footer: {
      role: "PORTFOLIO CHÍNH THỨC",
      copyright: "2026 - TRẦN BẢO KHIÊM PORTFOLIO"
    }
  },
  en: {
    nav: {
      about: "About",
      achievements: "Achievements",
      skills: "Skills",
      projects: "Projects",
      community: "Community",
      media: "Press"
    },
    hero: {
      badge: "NATIONAL FIRST PRIZE IN YOUNG INFORMATICS 2025",
      greeting: "Hello there!",
      intro: "I am",
      championTag: "Champion 2025",
      ctaLearn: "LEARN WITH KHIEM",
      ctaProjects: "VIEW PROJECTS"
    },
    about: {
      birthDate: "Date of Birth",
      location: "Location",
      school: "School"
    },
    achievements: {
      title: "Honors & Achievements",
      subtitle: "Proud milestones and awards in my technology learning journey",
      tabAll: "All Achievements",
      tab2026: "Year 2026",
      tab2025: "Year 2025",
      board2026Title: "2026 Honors Board",
      board2025Title: "2025 Honors Board",
      latestTag: "Latest",
      nationalTag: "National Award"
    },
    skills: {
      title: "Programming Skills",
      divisionBadge: "Contest Divisions",
      experienceBadge: "Years Coding"
    },
    projects: {
      title: "Creative Projects",
      viewAll: "All Projects"
    },
    media: {
      title: "Press Highlights",
      youtubeTitle: "YouTube & Community",
      subscribe: "SUBSCRIBE"
    },
    footer: {
      role: "OFFICIAL PORTFOLIO",
      copyright: "2026 - TRAN BAO KHIEM PORTFOLIO"
    }
  }
};

export const PROJECTS: Project[] = [
  {
    id: "p-opentwin",
    title: {
      vi: "OpenTwin — Student Digital Twin AI",
      en: "OpenTwin — Student Digital Twin AI"
    },
    description: {
      vi: "Nền tảng AI xây dựng Bản Sao Số học tập cho từng học sinh: liên tục quan sát qua Learning Journal, theo dõi tri thức, cá nhân hóa lộ trình và gia sư AI đồng hành.",
      en: "Student Digital Twin AI platform: continuously observing via Learning Journals, tracking knowledge, and personalizing adaptive learning."
    },
    tags: ["AI", "Digital Twin", "FastAPI", "EdTech", "Đang phát triển"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    statusBadge: {
      vi: "Đang phát triển",
      en: "In Development"
    },
    docType: "opentwin",
    docFileLabel: "OpenTwin_Project_Context.md"
  },
  {
    id: "p-greenbin",
    title: {
      vi: "GreenBin AI — Robot Phân Loại Rác Thông Minh",
      en: "GreenBin AI — AI Smart Waste Sorting Robot"
    },
    description: {
      vi: "Sản phẩm STEM phân loại rác tự động tại nguồn sử dụng Raspberry Pi 4, Webcam, AI nhận diện và servo điều khiển mảng trượt bằng bìa carton.",
      en: "STEM robot for automatic source waste sorting using Raspberry Pi 4, Webcam, AI computer vision, and servo flap sorting in an eco cardboard body."
    },
    tags: ["STEM", "Robotics", "Computer Vision", "Raspberry Pi", "Môi trường"],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
    statusBadge: {
      vi: "STEM Sáng Tạo",
      en: "STEM & Robotics"
    },
    docType: "greenbin",
    docFileLabel: "GreenBin_AI_Brochure.pdf",
    link: "https://greenbin.ai.studio"
  },
  {
    id: "1",
    title: {
      vi: "Hành trình xanh",
      en: "Green Journey"
    },
    description: {
      vi: "Dự án về giáo dục môi trường và bảo vệ trái đất thông qua các trò chơi tương tác sáng tạo.",
      en: "An environmental education and Earth protection project using interactive storytelling."
    },
    tags: ["Scratch", "Environment"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    title: {
      vi: "Vui học Tiếng Việt lớp 1",
      en: "Fun Vietnamese Grade 1"
    },
    description: {
      vi: "Ứng dụng hỗ trợ học chữ cái và vần Tiếng Việt cho các bạn học sinh bước vào lớp 1.",
      en: "Interactive application assisting first graders with alphabet and phonetics learning."
    },
    tags: ["Education", "Scratch"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    title: {
      vi: "ShineAI",
      en: "ShineAI"
    },
    description: {
      vi: "Dự án khám phá trí tuệ nhân tạo và học máy dành cho học sinh tiểu học & THCS.",
      en: "AI exploration project introducing machine learning concepts to youth and students."
    },
    tags: ["AI", "Creative"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "a-2026-d2-tinh",
    title: {
      vi: "Giải Nhất Cấp Tỉnh Hội thi Tin Học Trẻ bảng D2",
      en: "First Provincial Prize - Young Informatics Contest (Category D2)"
    },
    year: "2026",
    category: "Bảng D2",
    badge: {
      vi: "Giải Nhất Tỉnh",
      en: "1st Provincial Prize"
    },
    description: {
      vi: "Xuất sắc đạt giải Nhất cấp tỉnh ở Bảng D2 (Sản phẩm sáng tạo dành cho học sinh THCS) tại Hội thi Tin học trẻ 2026.",
      en: "Excellently awarded First Prize at the provincial level in Category D2 (Creative Software Products) at the 2026 Young Informatics Contest."
    },
    isHighlight: true
  },
  {
    id: "a-2026-1",
    title: {
      vi: "Giải Khuyến Khích Quốc gia Hội thi Tin Học Trẻ bảng A",
      en: "National Encouragement Prize - National Young Informatics Contest (Category A)"
    },
    year: "2026",
    category: "Bảng A",
    badge: {
      vi: "Quốc gia 2026",
      en: "National 2026"
    },
    description: {
      vi: "Thành tích đáng tự hào tại Bảng A (thi đấu lập trình giải thuật cá nhân) Hội thi Tin học trẻ toàn quốc năm 2026.",
      en: "Proud accomplishment in Category A (individual algorithmic competition) at the National Young Informatics Contest 2026."
    },
    isHighlight: true
  },
  {
    id: "a-2026-d2-kk",
    title: {
      vi: "Giải Khuyến Khích Sơ khảo Quốc gia Hội thi Tin Học Trẻ bảng D2",
      en: "National Preliminary Encouragement Prize - Young Informatics Contest (Category D2)"
    },
    year: "2026",
    category: "Bảng D2",
    badge: {
      vi: "Sơ khảo QG 2026",
      en: "National Prelim 2026"
    },
    description: {
      vi: "Thành tích ấn tượng tại Vòng sơ khảo Quốc gia Bảng D2 (Sản phẩm sáng tạo phần mềm) Hội thi Tin học trẻ năm 2026.",
      en: "Impressive achievement in the National Preliminary Round for Category D2 (Creative Software Products) at the 2026 Young Informatics Contest."
    },
    isHighlight: true
  },
  {
    id: "a-2025-1",
    title: {
      vi: "Giải Nhất Quốc gia Hội thi Tin Học Trẻ bảng D1",
      en: "First National Prize - National Young Informatics Contest (Category D1)"
    },
    year: "2025",
    category: "Bảng D1",
    badge: {
      vi: "Quán Quân 2025",
      en: "Champion 2025"
    },
    description: {
      vi: "Thành tích cao nhất trong cuộc thi tin học danh giá nhất cả nước dành cho thanh thiếu nhi.",
      en: "The highest prize in Vietnam's most prestigious youth informatics competition."
    },
    isHighlight: true
  },
  {
    id: "a-2025-2",
    title: {
      vi: "Top 10 học sinh xuất sắc của lớp",
      en: "Top 10 Outstanding Students of Class"
    },
    year: "2024 - 2025",
    badge: {
      vi: "Học sinh Giỏi",
      en: "Honor Student"
    },
    description: {
      vi: "Duy trì phong độ học tập xuất sắc và tích cực tham gia các phong trào học đường.",
      en: "Continuously maintaining top-tier academic performance and active participation in school activities."
    }
  }
];

export const MEDIA: MediaMention[] = [
  { 
    id: "m1", 
    source: "Báo Tài năng Việt", 
    title: {
      vi: "Trần Bảo Khiêm chinh phục bảng D1 Tin học trẻ toàn quốc với đam mê lập trình từ năm 3 tuổi",
      en: "Tran Bao Khiem conquers Category D1 National Young Informatics Contest"
    },
    link: "https://tainangviet.vn/tran-bao-khiem-chinh-phuc-bang-d1-tin-hoc-tre-toan-quoc-voi-dam-me-lap-trinh-tu-nam-3-tuoi-dar6750/" 
  },
  { 
    id: "m2", 
    source: "Báo An Giang", 
    title: {
      vi: "Cậu bé 10 tuổi ấp ủ niềm đam mê lập trình",
      en: "10-year-old boy nurtured with a deep passion for programming"
    },
    link: "https://baoangiang.com.vn/cau-be-10-tuoi-ap-u-niem-dam-me-lap-trinh-a461191.html" 
  },
  { 
    id: "m4", 
    source: "Báo Sinh viên ĐH An Giang", 
    title: {
      vi: "Tài năng nhí đam mê nghiên cứu khoa học và lập trình",
      en: "Young coding talent passionate about scientific research"
    },
    link: "https://enews.agu.edu.vn/index.php?option=com_content&view=article&id=25713&Itemid=121" 
  }
];

export const YOUTUBE_CHANNELS: YoutubeChannel[] = [
  { 
    id: "y1", 
    name: "Khiêm Gaming", 
    desc: {
      vi: "Kênh giải trí & chia sẻ quá trình làm game Scratch",
      en: "Entertainment channel sharing Scratch game dev"
    },
    link: "https://www.youtube.com/@Khiemchoigame2015" 
  },
  { 
    id: "y2", 
    name: {
      vi: "Học Cùng Bảo Khiêm",
      en: "Learn With Bao Khiem"
    }, 
    desc: {
      vi: "Kênh học tập, giải thuật, chia sẻ kiến thức Tin học trẻ",
      en: "Tutorials on computer science, coding & algorithms"
    },
    link: "https://www.youtube.com/@KhiemSonic" 
  }
];

export const SKILLS = [
  { 
    name: {
      vi: "Lập trình giải thuật với Python",
      en: "Algorithmic Problem Solving in Python"
    }, 
    level: 85, 
    icon: <Code className="w-5 h-5" /> 
  },
  { 
    name: {
      vi: "Lập trình sáng tạo với Scratch",
      en: "Creative Programming with Scratch"
    }, 
    level: 95, 
    icon: <BookOpen className="w-5 h-5" /> 
  },
];
