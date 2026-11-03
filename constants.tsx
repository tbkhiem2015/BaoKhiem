import React from 'react';
import { Project, Achievement, MediaMention, YoutubeChannel, Language, LocalizedProp, Certificate } from './types';
import { Code, BookOpen, Terminal, Globe } from 'lucide-react';

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
  profileImage: "/BaoKhiem.jpg"
};

export const UI_TRANSLATIONS = {
  vi: {
    nav: {
      about: "Giới thiệu",
      achievements: "Thành tích",
      awards: "Khen thưởng",
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
      tab2024: "Năm 2024",
      board2026Title: "Bảng Vàng Thành Tích 2026",
      board2025Title: "Bảng Vàng Thành Tích 2025",
      board2024Title: "Bảng Vàng Thành Tích 2024",
      latestTag: "Mới nhất",
      nationalTag: "Giải Quốc Gia"
    },
    awards: {
      title: "Mục Khen Thưởng & Bằng Khen",
      subtitle: "Danh sách Bằng khen chuẩn định dạng <Bảng thi>-<Năm>-<Cấp thi> vinh danh thành tích xuất sắc qua các kỳ thi",
      formatBadge: "Định dạng Bằng khen: <Bảng thi>-<Năm>-<Cấp thi>",
      tabAll: "Tất cả Bằng khen",
      tabNational: "Cấp Quốc Gia",
      tabRegional: "Cấp Khu Vực",
      tabProvincial: "Cấp Tỉnh & TP",
      tabSchool: "Cấp Trường",
      copyCode: "Sao chép mã",
      copied: "Đã chép!",
      issuer: "Đơn vị khen tặng",
      level: "Cấp khen thưởng",
      division: "Bảng thi",
      year: "Năm trao tặng",
      viewCertificate: "Xem Bằng Khen",
      officialSeal: "CHỨNG NHẬN CHÍNH THỨC",
      totalAwards: "Tổng số Bằng khen"
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
      awards: "Awards",
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
      tab2024: "Year 2024",
      board2026Title: "2026 Honors Board",
      board2025Title: "2025 Honors Board",
      board2024Title: "2024 Honors Board",
      latestTag: "Latest",
      nationalTag: "National Award"
    },
    awards: {
      title: "Commendations & Certificates",
      subtitle: "Certificates of Merit cataloged in <Division>-<Year>-<Contest Level> format honoring outstanding achievements",
      formatBadge: "Certificate Format: <Division>-<Year>-<Contest Level>",
      tabAll: "All Certificates",
      tabNational: "National Level",
      tabRegional: "Regional Level",
      tabProvincial: "Provincial & City",
      tabSchool: "School Level",
      copyCode: "Copy Code",
      copied: "Copied!",
      issuer: "Issuing Authority",
      level: "Award Level",
      division: "Division",
      year: "Award Year",
      viewCertificate: "View Certificate",
      officialSeal: "OFFICIAL MERIT",
      totalAwards: "Total Certificates"
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
    id: "p-shineai",
    title: {
      vi: "ShineAI — Học Tập Cá Nhân Hóa Bằng AI",
      en: "ShineAI — Personalized AI Learning Platform"
    },
    description: {
      vi: "Hệ sinh thái AI đa tầng hỗ trợ học tập cá nhân hóa cho học sinh tiểu học và trẻ có nhu cầu đặc biệt (ASD, ADHD). Nghiên cứu và thử nghiệm thành công mô hình ngôn ngữ chuyên biệt ShineLM (Fine-tuned từ Gemma).",
      en: "Multi-layer AI ecosystem providing personalized learning for elementary students and special needs (ASD, ADHD). Successfully fine-tuned Google Gemma into the specialized ShineLM model."
    },
    tags: ["AI Đa Tầng", "Fine-tuned Gemma", "ShineLM", "NestJS", "ReactJS", "EdTech"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    statusBadge: {
      vi: "Hệ Sinh Thái AI",
      en: "AI Ecosystem"
    },
    docType: "shineai",
    docFileLabel: "ShineAI_ThuyetMinh.md"
  },
  {
    id: "p-hanhtrinhxanh",
    title: {
      vi: "Hành Trình Xanh — Game Bảo Vệ Môi Trường",
      en: "Green Journey — Environmental Protection Game"
    },
    description: {
      vi: "Game giáo dục nâng cao ý thức bảo vệ môi trường và đồng cảm với nhân viên vệ sinh. Khám phá 2 cửa thử thách (đường phố & đáy biển), ứng dụng AI tạo nhân vật (Leonardo AI, D-ID, Vbee). Định hướng phát triển game Thực tế ảo VR.",
      en: "Educational game raising environmental awareness and empathy for sanitation workers. Features 2 challenge levels (city street & ocean floor), utilizing AI generation tools (Leonardo AI, D-ID, Vbee). Future roadmap includes VR integration."
    },
    tags: ["Scratch 3.0", "Môi Trường", "Leonardo AI", "D-ID", "Game Giáo Dục"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    statusBadge: {
      vi: "Scratch & AI",
      en: "Scratch & AI"
    },
    docType: "hanhtrinhxanh",
    docFileLabel: "HanhTrinhXanh_ThuyetMinh.md"
  },
  {
    id: "p-vuihoctv",
    title: {
      vi: "Vui Học Tiếng Việt 1",
      en: "Fun Vietnamese Grade 1"
    },
    description: {
      vi: "Phần mềm tương tác bám sát bộ sách Chân Trời Sáng Tạo (GDPT 2018), gồm 19 bài học âm vần, luyện gõ phím 10 ngón và chuỗi trò chơi giáo dục rèn luyện tư duy ngôn ngữ cho học sinh lớp 1.",
      en: "Interactive software aligned with the 2018 curriculum, featuring 19 phonics lessons, 10-finger typing practice, and educational mini-games fostering language development for first graders."
    },
    tags: ["Scratch", "Tiếng Việt 1", "Chân Trời Sáng Tạo", "Smart Classroom"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
    statusBadge: {
      vi: "GDPT 2018",
      en: "GDPT 2018"
    },
    docType: "vuihoctiengviet",
    docFileLabel: "VuiHocTiengViet1_ThuyetMinh.md"
  },
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
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  // --- NĂM 2026 ---
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
    id: "a-2026-a-khuvuc",
    title: {
      vi: "Giải Nhì Hội thi Tin học trẻ cấp Khu vực Miền Nam Bảng A",
      en: "Second Prize - Category A, Southern Regional Round of Young Informatics Contest"
    },
    year: "2026",
    category: "Bảng A",
    badge: {
      vi: "Giải Nhì Miền Nam",
      en: "2nd Regional Prize"
    },
    description: {
      vi: "Thành tích xuất sắc đạt Giải Nhì Bảng A (Lập trình giải thuật cá nhân) Vòng thi Khu vực Miền Nam tại Hội thi Tin học trẻ năm 2026.",
      en: "Outstanding achievement winning Second Prize in Category A (Individual Algorithmic Contest) at the Southern Regional Round of the Young Informatics Contest 2026."
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
      vi: "Giải Ba bảng D2 Vòng Khu vực Miền Nam Hội thi Tin Học Trẻ",
      en: "Third Prize - Category D2, Southern Regional Round of Young Informatics Contest"
    },
    year: "2026",
    category: "Bảng D2",
    badge: {
      vi: "Giải Ba Miền Nam",
      en: "3rd Regional Prize"
    },
    description: {
      vi: "Thành tích xuất sắc đạt Giải Ba Bảng D2 (Sản phẩm sáng tạo phần mềm) Vòng thi Khu vực Miền Nam tại Hội thi Tin học trẻ năm 2026.",
      en: "Excellently awarded Third Prize in Category D2 (Creative Software Products) at the Southern Regional Round of the 2026 Young Informatics Contest."
    },
    isHighlight: true
  },
  {
    id: "a-2026-robot-truong",
    title: {
      vi: "Giải C cuộc thi Thiết kế đồ dùng học tập cấp Trường",
      en: "Prize C - School-level Learning Tools Design Contest"
    },
    year: "2026",
    category: "Sáng tạo",
    badge: {
      vi: "Cấp Trường",
      en: "School Level"
    },
    description: {
      vi: "Đạt giải C với sản phẩm công nghệ thông minh 'Robot giao tiếp tiếng anh cho bé' hỗ trợ học tập ngoại ngữ trực quan.",
      en: "Awarded Prize C for the smart technology project 'English Communication Robot for Kids'."
    },
    isHighlight: false
  },

  // --- NĂM 2025 ---
  {
    id: "a-2025-1",
    title: {
      vi: "Giải Nhất Quốc gia Hội thi Tin Học Trẻ bảng D1",
      en: "First National Prize - National Young Informatics Contest (Category D1)"
    },
    year: "2025",
    category: "Bảng D1",
    badge: {
      vi: "Quán Quân Toàn Quốc",
      en: "National Champion"
    },
    description: {
      vi: "Ngôi vị Quán quân Toàn quốc Bảng D1 (Sản phẩm sáng tạo) trong cuộc thi tin học danh giá nhất cả nước dành cho học sinh.",
      en: "First National Prize and Champion title in Category D1 (Creative Software) at the National Young Informatics Contest 2025."
    },
    isHighlight: true
  },
  {
    id: "a-2025-d1-khuvuc",
    title: {
      vi: "Giải Nhất Hội thi Tin học trẻ cấp Khu vực Miền Nam Bảng D1",
      en: "First Prize - Category D1, Southern Regional Round of Young Informatics Contest"
    },
    year: "2025",
    category: "Bảng D1",
    badge: {
      vi: "Giải Nhất Miền Nam",
      en: "1st Regional Prize"
    },
    description: {
      vi: "Xuất sắc đoạt Giải Nhất Bảng D1 Vòng Khu vực Miền Nam, đại diện khu vực tiến thẳng vào Vòng Chung kết Quốc gia.",
      en: "Won First Prize in Category D1 at the Southern Regional Round, advancing directly to the National Finals."
    },
    isHighlight: true
  },
  {
    id: "a-2025-d1-tinh",
    title: {
      vi: "Giải Nhất Hội thi Tin học trẻ cấp Tỉnh An Giang Bảng D1",
      en: "First Prize - Category D1, An Giang Provincial Young Informatics Contest"
    },
    year: "2025",
    category: "Bảng D1",
    badge: {
      vi: "Giải Nhất Tỉnh",
      en: "1st Provincial Prize"
    },
    description: {
      vi: "Đạt giải Nhất cấp Tỉnh An Giang Bảng D1 với phần mềm sáng tạo được hội đồng giám khảo đánh giá xuất sắc.",
      en: "Excellently awarded First Prize at An Giang Provincial Contest in Category D1."
    },
    isHighlight: true
  },
  {
    id: "a-2025-d1-tp",
    title: {
      vi: "Giải Nhất Hội thi Tin học trẻ cấp TP. Long Xuyên Bảng D1",
      en: "First Prize - Category D1, Long Xuyen City Young Informatics Contest"
    },
    year: "2025",
    category: "Bảng D1",
    badge: {
      vi: "Giải Nhất TP",
      en: "1st City Prize"
    },
    description: {
      vi: "Đoạt Giải Nhất cấp Thành phố Long Xuyên Bảng D1, xuất sắc dẫn đầu khối tiểu học toàn thành phố.",
      en: "First Prize in Category D1 at Long Xuyen City Young Informatics Contest."
    },
    isHighlight: true
  },
  {
    id: "a-2025-a-tp",
    title: {
      vi: "Giải Nhì Hội thi Tin học trẻ cấp TP. Long Xuyên Bảng A",
      en: "Second Prize - Category A, Long Xuyen City Young Informatics Contest"
    },
    year: "2025",
    category: "Bảng A",
    badge: {
      vi: "Giải Nhì TP",
      en: "2nd City Prize"
    },
    description: {
      vi: "Đạt Giải Nhì Bảng A (Lập trình giải thuật) cấp Thành phố Long Xuyên, khẳng định năng lực thuật toán vững vàng.",
      en: "Won Second Prize in Category A (Algorithms) at Long Xuyen City Young Informatics Contest."
    },
    isHighlight: true
  },
  {
    id: "a-2025-a-tinh",
    title: {
      vi: "Giải Khuyến khích Hội thi Tin học trẻ cấp Tỉnh An Giang Bảng A",
      en: "Encouragement Prize - Category A, An Giang Provincial Young Informatics Contest"
    },
    year: "2025",
    category: "Bảng A",
    badge: {
      vi: "Khuyến khích Tỉnh",
      en: "Provincial Encouragement"
    },
    description: {
      vi: "Đạt Giải Khuyến khích Bảng A (Lập trình giải thuật cá nhân) cấp Tỉnh An Giang năm 2025.",
      en: "Encouragement Prize in Category A (Individual Algorithms) at the An Giang Provincial Contest 2025."
    },
    isHighlight: false
  },
  {
    id: "a-2025-dodunghoctap",
    title: {
      vi: "Giải A cuộc thi Thiết kế đồ dùng học tập cấp Trường",
      en: "Prize A - School-level Learning Tools Design Contest"
    },
    year: "2025",
    category: "Sáng tạo",
    badge: {
      vi: "Giải A Cấp Trường",
      en: "Prize A School"
    },
    description: {
      vi: "Đạt giải thưởng cao nhất (Giải A) tại cuộc thi Thiết kế đồ dùng học tập cấp Trường với sản phẩm học tập trực quan sinh động.",
      en: "Won top honor (Prize A) at the School-level Learning Tools Design Contest with innovative educational aids."
    },
    isHighlight: false
  },
  {
    id: "a-2025-hungbien-en",
    title: {
      vi: "Giải Ba cuộc thi Hùng biện tiếng Anh cấp Trường",
      en: "Third Prize - School-level English Eloquence Contest"
    },
    year: "2025",
    category: "Tiếng Anh",
    badge: {
      vi: "Giải Ba Hùng Biện",
      en: "3rd English Prize"
    },
    description: {
      vi: "Thể hiện bản lĩnh tự tin và khả năng thuyết trình lưu loát, đạt Giải Ba cuộc thi Hùng biện tiếng Anh cấp Trường.",
      en: "Demonstrated confident public speaking skills and fluent English presentation, winning Third Prize."
    },
    isHighlight: false
  },
  {
    id: "a-2025-2",
    title: {
      vi: "Top 10 học sinh xuất sắc của lớp",
      en: "Top 10 Outstanding Students of Class"
    },
    year: "2025",
    badge: {
      vi: "Học sinh Giỏi",
      en: "Honor Student"
    },
    description: {
      vi: "Duy trì phong độ học tập xuất sắc và tích cực tham gia các phong trào học đường.",
      en: "Continuously maintaining top-tier academic performance and active participation in school activities."
    }
  },

  // --- NĂM 2024 ---
  {
    id: "a-2024-d1-tinh",
    title: {
      vi: "Giải Nhì cấp Tỉnh Tin học trẻ bảng D1",
      en: "Second Provincial Prize - Young Informatics Contest (Category D1)"
    },
    year: "2024",
    category: "Bảng D1",
    badge: {
      vi: "Giải Nhì Tỉnh",
      en: "2nd Provincial Prize"
    },
    description: {
      vi: "Xuất sắc đạt Giải Nhì cấp Tỉnh ở Bảng D1 (Sản phẩm sáng tạo) tại Hội thi Tin học trẻ năm 2024, tạo bước đệm vững chắc cho thành tích Quán quân Toàn quốc năm 2025.",
      en: "Excellently won Second Prize at the provincial level in Category D1 at the 2024 Young Informatics Contest, laying the groundwork for the 2025 National Championship."
    },
    isHighlight: true
  },
  {
    id: "a-2024-st-ttnnd-tinh",
    title: {
      vi: "Giải Khuyến khích Sáng tạo Thanh thiếu niên, Nhi đồng Tỉnh An Giang lần thứ XIII năm 2024",
      en: "Encouragement Prize - 13th An Giang Provincial Youth & Children Innovation Contest 2024"
    },
    year: "2024",
    category: "Sáng tạo",
    badge: {
      vi: "Khuyến khích Tỉnh",
      en: "Provincial Encouragement"
    },
    description: {
      vi: "Đạt giải Khuyến khích cấp Tỉnh với sản phẩm 'Phần mềm vui học Tiếng việt lớp 1', ứng dụng công nghệ mô phỏng bài học sinh động theo chương trình GDPT 2018.",
      en: "Won Provincial Encouragement Prize with 'Fun Vietnamese Grade 1', simulating intuitive lessons aligned with the 2018 curriculum."
    },
    isHighlight: true
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
      vi: "Lập trình thi đấu C++",
      en: "Competitive Programming with C++"
    }, 
    level: 50, 
    icon: <Terminal className="w-5 h-5" /> 
  },
  { 
    name: {
      vi: "Lập trình sáng tạo với Scratch",
      en: "Creative Programming with Scratch"
    }, 
    level: 100, 
    icon: <BookOpen className="w-5 h-5" /> 
  },
  { 
    name: {
      vi: "Lập trình web với React, NodeJS, TailwindCSS",
      en: "Web Development with React, NodeJS, TailwindCSS"
    }, 
    level: 50, 
    icon: <Globe className="w-5 h-5" /> 
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-d1-2025-bgd",
    code: "Bảng D1 - 2025 - Cấp Quốc gia",
    division: "Bảng D1",
    year: "2025",
    level: {
      vi: "Cấp Quốc gia",
      en: "National Level"
    },
    awardTitle: {
      vi: "Bằng khen của Bộ trưởng Bộ Giáo dục và Đào tạo (Giải Nhất Quốc gia)",
      en: "Certificate of Merit from the Minister of Education & Training (National First Prize)"
    },
    issuer: {
      vi: "Bộ trưởng Bộ Giáo dục và Đào tạo",
      en: "Minister of Education and Training"
    },
    date: "01/10/2025",
    decisionNo: "2727/QĐ-BGDĐT",
    signer: {
      vi: "Bộ trưởng: Nguyễn Kim Sơn",
      en: "Minister: Nguyen Kim Son"
    },
    description: {
      vi: "Tuyên dương và khen thưởng thành tích xuất sắc đạt Giải Nhất Bảng D1 tại Hội thi Tin học trẻ toàn quốc lần thứ XXXI - năm 2025.",
      en: "Commended for outstanding achievement in winning First Prize in Category D1 at the 31st National Young Informatics Contest 2025."
    },
    imageUrl: "/certificates/cert-bgd-2025.svg",
    badgeType: "national"
  },
  {
    id: "cert-dhqg-2025",
    code: "Bảng D1 - 2025 - Cấp Quốc gia",
    division: "Bảng D1",
    year: "2025",
    level: {
      vi: "Cấp Quốc gia",
      en: "National Level"
    },
    awardTitle: {
      vi: "Bằng khen của Giám đốc Đại học Quốc gia TP. Hồ Chí Minh",
      en: "Certificate of Merit from President of VNU-HCM"
    },
    issuer: {
      vi: "Đại học Quốc gia Thành phố Hồ Chí Minh",
      en: "Vietnam National University Ho Chi Minh City"
    },
    date: "21/10/2025",
    decisionNo: "2058/QĐ-ĐHQG",
    signer: {
      vi: "KT. Giám đốc - Phó Giám đốc: PGS.TS Nguyễn Thị Thanh Mai",
      en: "Vice President: Assoc. Prof. Dr. Nguyen Thi Thanh Mai"
    },
    description: {
      vi: "Bằng khen trao tặng thí sinh xuất sắc đạt Giải Nhất Bảng D1 Hội thi Tin học trẻ toàn quốc lần thứ 31 năm 2025. Ghi vào Sổ Vàng khen thưởng số: 01.",
      en: "Conferred for winning First Prize in Category D1 at the 31st National Young Informatics Contest 2025. Inscribed in the Golden Honor Book No. 01."
    },
    imageUrl: "/certificates/cert-dhqg-2025.svg",
    badgeType: "national"
  },
  {
    id: "cert-tuoitresangtao-2025",
    code: "Sáng tạo - 2025 - Cấp Quốc gia",
    division: "Sáng tạo",
    year: "2025",
    level: {
      vi: "Cấp Quốc gia",
      en: "National Level"
    },
    awardTitle: {
      vi: "Huy hiệu Tuổi Trẻ Sáng Tạo — Ban Chấp hành Trung ương Đoàn",
      en: "Creative Youth Badge - Central Committee of Youth Union"
    },
    issuer: {
      vi: "Ban Chấp hành Trung ương Đoàn TNCS Hồ Chí Minh",
      en: "Central Committee of Ho Chi Minh Communist Youth Union"
    },
    date: "10/08/2025",
    decisionNo: "1534 QĐKT/TWĐTN-VP",
    signer: {
      vi: "Bí thư thứ nhất BCH Trung ương Đoàn: Bùi Quang Huy",
      en: "First Secretary: Bui Quang Huy"
    },
    description: {
      vi: "Trao tặng danh hiệu và Huy hiệu Tuổi trẻ Sáng tạo cho cá nhân có công trình sáng tạo khoa học kỹ thuật tiêu biểu xuất sắc toàn quốc năm 2025.",
      en: "Conferred the prestigious National Creative Youth Badge for exceptional technological innovation in 2025."
    },
    imageUrl: "/certificates/cert-tuoitresangtao-2025.svg",
    badgeType: "national"
  },
  {
    id: "cert-d1-2025-quocgia",
    code: "Bảng D1 - 2025 - Cấp Quốc gia",
    division: "Bảng D1",
    year: "2025",
    level: {
      vi: "Cấp Quốc gia",
      en: "National Level"
    },
    awardTitle: {
      vi: "Bằng khen Giải Nhất Quốc gia Hội thi Tin Học Trẻ (Quán Quân Toàn Quốc)",
      en: "First National Prize Certificate - Young Informatics Contest (National Champion)"
    },
    issuer: {
      vi: "Ban Chấp hành Trung ương Đoàn TNCS Hồ Chí Minh & Bộ GD&ĐT",
      en: "Central Youth Union & Ministry of Education and Training"
    },
    date: "09/08/2025",
    decisionNo: "624-QĐ/TWĐTN-CTTN",
    signer: {
      vi: "Bí thư BCH Trung ương Đoàn: Ngô Văn Cương",
      en: "Secretary of Central Youth Union: Ngo Van Cuong"
    },
    description: {
      vi: "Bằng khen danh giá của Ban Chấp hành Trung ương Đoàn TNCS Hồ Chí Minh trao tặng thí sinh xuất sắc đạt Giải Nhất Bảng D1 (Sản phẩm sáng tạo phần mềm) Vòng Chung kết Toàn quốc năm 2025.",
      en: "Prestigious Certificate of Merit from the Central Youth Union awarded for winning First Prize in Category D1 at the National Finals 2025."
    },
    imageUrl: "/certificates/cert-bgd-2025.svg",
    badgeType: "national"
  },
  {
    id: "cert-a-2026-quocgia",
    code: "Bảng A - 2026 - Cấp Quốc gia",
    division: "Bảng A",
    year: "2026",
    level: {
      vi: "Cấp Quốc gia",
      en: "National Level"
    },
    awardTitle: {
      vi: "Bằng khen Giải Khuyến Khích Quốc gia Hội thi Tin Học Trẻ",
      en: "National Encouragement Prize Certificate - Young Informatics Contest"
    },
    issuer: {
      vi: "Ban Chấp hành Trung ương Đoàn TNCS Hồ Chí Minh",
      en: "Central Committee of Ho Chi Minh Communist Youth Union"
    },
    date: "2026",
    description: {
      vi: "Khen thưởng thành tích xuất sắc đạt Giải Khuyến Khích Quốc gia Bảng A (Lập trình giải thuật cá nhân) tại Vòng Chung kết Hội thi Tin học trẻ toàn quốc lần thứ XXXII năm 2026.",
      en: "Awarded by the Central Youth Union for achieving National Encouragement Prize in Category A (Individual Algorithms) at the 32nd National Young Informatics Contest 2026."
    },
    imageUrl: "/certificates/cert-a-2026-quocgia.svg",
    badgeType: "national"
  },
  {
    id: "cert-khuvuc-d1-2025",
    code: "Bảng D1 - 2025 - Cấp Khu vực",
    division: "Bảng D1",
    year: "2025",
    level: {
      vi: "Cấp Khu vực",
      en: "Regional Level"
    },
    awardTitle: {
      vi: "Giấy chứng nhận Giải Nhất Bảng D1 Vòng Khu vực Miền Nam Hội thi Tin Học Trẻ",
      en: "First Prize Certificate - Category D1, Southern Regional Round"
    },
    issuer: {
      vi: "Trung tâm Phát triển Khoa học, Công nghệ và Tài năng trẻ (CYTAST)",
      en: "Center for Young Science, Technology and Talent Development (CYTAST)"
    },
    date: "22/07/2025",
    decisionNo: "141-TB/KHCN",
    signer: {
      vi: "Phó Trưởng ban Thường trực BTC: Trần Hữu",
      en: "Standing Vice Head: Tran Huu"
    },
    description: {
      vi: "Xuất sắc đoạt Giải Nhất Bảng D1 Vòng Khu vực Miền Nam tại Hội thi Tin học trẻ toàn quốc lần thứ XXXI - năm 2025.",
      en: "Awarded First Prize in Category D1 at the Southern Regional Round 2025."
    },
    imageUrl: "/certificates/cert-khuvuc-d1-2025.svg",
    badgeType: "regional"
  },
  {
    id: "cert-a-2026-khuvuc",
    code: "Bảng A - 2026 - Cấp Khu vực",
    division: "Bảng A",
    year: "2026",
    level: {
      vi: "Cấp Khu vực",
      en: "Regional Level"
    },
    awardTitle: {
      vi: "Giấy chứng nhận Giải Nhì Bảng A Vòng Khu vực Miền Nam Hội thi Tin Học Trẻ",
      en: "Second Prize Certificate - Category A, Southern Regional Round"
    },
    issuer: {
      vi: "Trung tâm Phát triển Khoa học, Công nghệ và Tài năng trẻ (CYTAST)",
      en: "CYTAST - National Young Informatics Contest Organizing Committee"
    },
    date: "13/08/2026",
    decisionNo: "155-TB/KHCN",
    signer: {
      vi: "Giám đốc Trung tâm: Trịnh Minh Thái",
      en: "Director: Trinh Minh Thai"
    },
    description: {
      vi: "Chứng nhận thành tích xuất sắc đạt Giải Nhì Bảng A (Lập trình giải thuật cá nhân) Vòng thi Khu vực Miền Nam năm 2026.",
      en: "Awarded Second Prize in Category A (Individual Algorithms) at the Southern Regional Round 2026."
    },
    imageUrl: "/certificates/cert-khuvuc-a-2026.svg",
    badgeType: "regional"
  },
  {
    id: "cert-d2-2026-khuvuc",
    code: "Bảng D2 - 2026 - Cấp Khu vực",
    division: "Bảng D2",
    year: "2026",
    level: {
      vi: "Cấp Khu vực",
      en: "Regional Level"
    },
    awardTitle: {
      vi: "Giấy chứng nhận Giải Ba Bảng D2 Vòng Khu vực Miền Nam Hội thi Tin Học Trẻ",
      en: "Third Prize Certificate - Category D2, Southern Regional Round"
    },
    issuer: {
      vi: "Trung tâm Phát triển Khoa học, Công nghệ và Tài năng trẻ (CYTAST)",
      en: "CYTAST - National Young Informatics Contest Organizing Committee"
    },
    date: "13/08/2026",
    decisionNo: "155-TB/KHCN",
    signer: {
      vi: "Giám đốc Trung tâm: Trịnh Minh Thái",
      en: "Director: Trinh Minh Thai"
    },
    description: {
      vi: "Chứng nhận và khen thưởng đạt Giải Ba Bảng D2 (Sản phẩm sáng tạo phần mềm) Vòng thi Khu vực Miền Nam tại Hội thi Tin học trẻ toàn quốc năm 2026.",
      en: "Certificate honoring Third Prize in Category D2 (Creative Software Products) at the Southern Regional Round of the 2026 Young Informatics Contest."
    },
    imageUrl: "/certificates/cert-khuvuc-d2-2026.svg",
    badgeType: "regional"
  },
  {
    id: "cert-d1-2025-tinh",
    code: "Bảng D1 - 2025 - Cấp Tỉnh",
    division: "Bảng D1",
    year: "2025",
    level: {
      vi: "Cấp Tỉnh",
      en: "Provincial Level"
    },
    awardTitle: {
      vi: "Giấy công nhận Giải Nhất Bảng D1 Hội thi Tin học trẻ Tỉnh An Giang",
      en: "First Prize Certificate - Category D1, An Giang Provincial Young Informatics Contest"
    },
    issuer: {
      vi: "Ban Thường vụ Tỉnh Đoàn An Giang",
      en: "An Giang Provincial Youth Union"
    },
    date: "19/04/2025",
    decisionNo: "333-QĐ/TĐTN-TTNTH",
    signer: {
      vi: "Phó Bí thư Tỉnh Đoàn: Hồ Thị Hồng Phượng",
      en: "Vice Secretary: Ho Thi Hong Phuong"
    },
    description: {
      vi: "Công nhận và khen thưởng Giải Nhất cấp Tỉnh An Giang Bảng D1 (Sản phẩm sáng tạo khối Tiểu học) tại Hội thi Tin học trẻ lần thứ XXV năm 2025.",
      en: "Awarded First Prize at An Giang Provincial Contest in Category D1."
    },
    imageUrl: "/certificates/cert-tinh-d1-2025.svg",
    badgeType: "provincial"
  },
  {
    id: "cert-a-2025-tinh",
    code: "Bảng A - 2025 - Cấp Tỉnh",
    division: "Bảng A",
    year: "2025",
    level: {
      vi: "Cấp Tỉnh",
      en: "Provincial Level"
    },
    awardTitle: {
      vi: "Giấy công nhận Giải Khuyến khích Bảng A Hội thi Tin học trẻ Tỉnh An Giang",
      en: "Encouragement Prize Certificate - Category A, An Giang Provincial Contest"
    },
    issuer: {
      vi: "Ban Thường vụ Tỉnh Đoàn An Giang",
      en: "An Giang Provincial Youth Union"
    },
    date: "19/04/2025",
    decisionNo: "333-QĐ/TĐTN-TTNTH",
    signer: {
      vi: "Phó Bí thư Tỉnh Đoàn: Hồ Thị Hồng Phượng",
      en: "Vice Secretary: Ho Thi Hong Phuong"
    },
    description: {
      vi: "Công nhận đạt Giải Khuyến khích Bảng A (Lập trình giải thuật cá nhân) tại Hội thi Tin học trẻ tỉnh An Giang lần thứ XXV năm 2025.",
      en: "Encouragement Prize in Category A at An Giang Provincial Contest 2025."
    },
    imageUrl: "/certificates/cert-tinh-a-2025.svg",
    badgeType: "provincial"
  },
  {
    id: "cert-d1-2024-tinh",
    code: "Bảng D1 - 2024 - Cấp Tỉnh",
    division: "Bảng D1",
    year: "2024",
    level: {
      vi: "Cấp Tỉnh",
      en: "Provincial Level"
    },
    awardTitle: {
      vi: "Giấy công nhận Giải Nhì Bảng D1 Hội thi Tin học trẻ Tỉnh An Giang",
      en: "Second Provincial Prize Certificate - Category D1, Young Informatics Contest"
    },
    issuer: {
      vi: "Ban Thường vụ Tỉnh Đoàn An Giang",
      en: "An Giang Provincial Youth Union"
    },
    date: "23/03/2024",
    decisionNo: "201-QĐ/TĐTN-TTNTH",
    signer: {
      vi: "Phó Bí thư Tỉnh Đoàn: Hồ Thị Hồng Phượng",
      en: "Vice Secretary: Ho Thi Hong Phuong"
    },
    description: {
      vi: "Công nhận thành tích đạt Giải Nhì cấp Tỉnh Bảng D1 (Sản phẩm sáng tạo) tại Hội thi Tin học trẻ tỉnh An Giang lần thứ XXIV năm 2024.",
      en: "Second Prize in Category D1 at the 2024 Provincial Contest."
    },
    imageUrl: "/certificates/cert-tinh-d1-2024.svg",
    badgeType: "provincial"
  },
  {
    id: "cert-d1-2025-tp",
    code: "Bảng D1 - 2025 - Cấp Thành phố",
    division: "Bảng D1",
    year: "2025",
    level: {
      vi: "Cấp Thành phố",
      en: "City Level"
    },
    awardTitle: {
      vi: "Giấy khen Giải Nhất Hội thi Tin học trẻ cấp TP. Long Xuyên Bảng D1",
      en: "First Prize Certificate - Category D1, Long Xuyen City Young Informatics Contest"
    },
    issuer: {
      vi: "Trưởng Phòng Giáo dục và Đào tạo TP. Long Xuyên",
      en: "Head of Long Xuyen City Education & Training Department"
    },
    date: "10/04/2025",
    decisionNo: "499/QĐ-PGDĐT",
    signer: {
      vi: "Trưởng phòng: Dương Kiếm Anh",
      en: "Head: Duong Kiem Anh"
    },
    description: {
      vi: "Khen thưởng thành tích xuất sắc đạt Giải Nhất Bảng D1 (Sản phẩm sáng tạo) tại Hội thi Tin học trẻ thành phố Long Xuyên năm học 2024 - 2025.",
      en: "First Prize in Category D1 at Long Xuyen City Young Informatics Contest."
    },
    imageUrl: "/certificates/cert-tp-d1-2025.svg",
    badgeType: "city"
  },
  {
    id: "cert-a-2025-tp",
    code: "Bảng A - 2025 - Cấp Thành phố",
    division: "Bảng A",
    year: "2025",
    level: {
      vi: "Cấp Thành phố",
      en: "City Level"
    },
    awardTitle: {
      vi: "Giấy khen Giải Nhì Hội thi Tin học trẻ cấp TP. Long Xuyên Bảng A",
      en: "Second Prize Certificate - Category A, Long Xuyen City Young Informatics Contest"
    },
    issuer: {
      vi: "Trưởng Phòng Giáo dục và Đào tạo TP. Long Xuyên",
      en: "Head of Long Xuyen City Education & Training Department"
    },
    date: "10/04/2025",
    decisionNo: "499/QĐ-PGDĐT",
    signer: {
      vi: "Trưởng phòng: Dương Kiếm Anh",
      en: "Head: Duong Kiem Anh"
    },
    description: {
      vi: "Khen thưởng thành tích Giải Nhì Bảng A (Lập trình giải thuật cá nhân) tại Hội thi Tin học trẻ thành phố Long Xuyên năm học 2024 - 2025.",
      en: "Second Prize in Category A at Long Xuyen City Contest."
    },
    imageUrl: "/certificates/cert-tp-a-2025.svg",
    badgeType: "city"
  },
  {
    id: "cert-d2-2026-tinh",
    code: "Bảng D2 - 2026 - Cấp Tỉnh",
    division: "Bảng D2",
    year: "2026",
    level: {
      vi: "Cấp Tỉnh",
      en: "Provincial Level"
    },
    awardTitle: {
      vi: "Giấy khen Giải Nhất Cấp Tỉnh Hội thi Tin Học Trẻ Bảng D2",
      en: "First Provincial Prize Certificate - Young Informatics Contest"
    },
    issuer: {
      vi: "Ban Thường vụ Tỉnh Đoàn An Giang & Sở GD&ĐT An Giang",
      en: "An Giang Provincial Youth Union & Dept of Education and Training"
    },
    date: "2026",
    signer: {
      vi: "Bí thư Tỉnh Đoàn: Phan Duy Bằng",
      en: "Secretary: Phan Duy Bang"
    },
    description: {
      vi: "Tuyên dương và trao tặng cho thí sinh đạt thành tích Giải Nhất Bảng D2 (Sản phẩm sáng tạo phần mềm dành cho học sinh THCS) tại Hội thi Tin học trẻ tỉnh An Giang năm 2026.",
      en: "Commended and awarded First Prize in Category D2 (Creative Software Products for Secondary School) at the 2026 An Giang Provincial Young Informatics Contest."
    },
    imageUrl: "/certificates/cert-d2-2026-tinh.svg",
    badgeType: "provincial"
  },
  {
    id: "cert-st-2024-tinh",
    code: "Sáng tạo - 2024 - Cấp Tỉnh",
    division: "Sáng tạo",
    year: "2024",
    level: {
      vi: "Cấp Tỉnh",
      en: "Provincial Level"
    },
    awardTitle: {
      vi: "Giấy khen Giải Khuyến khích Sáng tạo Thanh thiếu niên, Nhi đồng Tỉnh An Giang",
      en: "Encouragement Prize Certificate - 13th An Giang Provincial Youth Innovation Contest 2024"
    },
    issuer: {
      vi: "Liên hiệp các Hội Khoa học & Kỹ thuật Tỉnh An Giang",
      en: "An Giang Provincial Union of Science & Technology Associations"
    },
    date: "Năm 2024",
    description: {
      vi: "Khen thưởng giải Khuyến khích cấp Tỉnh với sản phẩm 'Phần mềm vui học Tiếng việt lớp 1', ứng dụng công nghệ mô phỏng bài học sinh động theo chương trình GDPT 2018.",
      en: "Awarded Provincial Encouragement Prize for 'Fun Vietnamese Grade 1' software project."
    },
    imageUrl: "/certificates/cert-st-2024-tinh.svg",
    badgeType: "provincial"
  },
  {
    id: "cert-dodunghoctap-2025-truong",
    code: "Sáng tạo - 2025 - Cấp Trường",
    division: "Sáng tạo",
    year: "2025",
    level: {
      vi: "Cấp Trường",
      en: "School Level"
    },
    awardTitle: {
      vi: "Giải A cuộc thi Thiết kế đồ dùng học tập cấp Trường",
      en: "Prize A - School-level Learning Tools Design Contest"
    },
    issuer: {
      vi: "Trường Tiểu học Châu Văn Liêm, TP. Long Xuyên",
      en: "Chau Van Liem Primary School, Long Xuyen City"
    },
    date: "Năm học 2024 - 2025",
    signer: {
      vi: "Hiệu trưởng Trường Tiểu học Châu Văn Liêm",
      en: "Principal of Chau Van Liem Primary School"
    },
    description: {
      vi: "Khen thưởng thành tích đạt giải thưởng cao nhất (Giải A) tại cuộc thi Thiết kế đồ dùng học tập cấp Trường.",
      en: "Won top honor (Prize A) at the School-level Learning Tools Design Contest."
    },
    imageUrl: "/certificates/cert-dodunghoctap-2025-truong.svg",
    badgeType: "school"
  },
  {
    id: "cert-hungbien-2025-truong",
    code: "Tiếng Anh - 2025 - Cấp Trường",
    division: "Tiếng Anh",
    year: "2025",
    level: {
      vi: "Cấp Trường",
      en: "School Level"
    },
    awardTitle: {
      vi: "Giải Ba cuộc thi Hùng biện tiếng Anh cấp Trường",
      en: "Third Prize - School-level English Eloquence Contest"
    },
    issuer: {
      vi: "Trường Tiểu học Châu Văn Liêm, TP. Long Xuyên",
      en: "Chau Van Liem Primary School, Long Xuyen City"
    },
    date: "Năm học 2024 - 2025",
    signer: {
      vi: "Hiệu trưởng Trường Tiểu học Châu Văn Liêm",
      en: "Principal of Chau Van Liem Primary School"
    },
    description: {
      vi: "Khen thưởng Giải Ba cuộc thi Hùng biện tiếng Anh cấp Trường với phong thái tự tin và khả năng thuyết trình lưu loát.",
      en: "Third Prize in School-level English Eloquence Contest."
    },
    imageUrl: "/certificates/cert-hungbien-2025-truong.svg",
    badgeType: "school"
  },
  {
    id: "cert-robot-2026-truong",
    code: "Sáng tạo - 2026 - Cấp Trường",
    division: "Sáng tạo",
    year: "2026",
    level: {
      vi: "Cấp Trường",
      en: "School Level"
    },
    awardTitle: {
      vi: "Giải C cuộc thi Thiết kế đồ dùng học tập cấp Trường",
      en: "Prize C - School-level Learning Tools Design Contest"
    },
    issuer: {
      vi: "Ban Giám hiệu Trường PT Thực hành Sư phạm",
      en: "Practical Pedagogical High School"
    },
    date: "2026",
    description: {
      vi: "Khen thưởng đạt Giải C cuộc thi Thiết kế đồ dùng học tập cấp Trường với sản phẩm công nghệ 'Robot giao tiếp tiếng anh cho bé'.",
      en: "Commended for Prize C with the innovation project 'English Communication Robot for Kids'."
    },
    imageUrl: "/certificates/cert-robot-2026-truong.svg",
    badgeType: "school"
  },
  {
    id: "cert-hoctap-2025-truong",
    code: "Học tập - 2025 - Cấp Trường",
    division: "Toàn diện",
    year: "2024 - 2025",
    level: {
      vi: "Cấp Trường",
      en: "School Level"
    },
    awardTitle: {
      vi: "Giấy khen Học sinh Xuất sắc Tiêu biểu Toàn trường",
      en: "Certificate of Outstanding Academic Excellence"
    },
    issuer: {
      vi: "Ban Giám hiệu Nhà trường",
      en: "School Board of Management"
    },
    date: "2024 - 2025",
    description: {
      vi: "Khen thưởng danh hiệu Học sinh Hoàn thành Xuất sắc các nội dung học tập và rèn luyện, nằm trong Top 10 học sinh xuất sắc tiêu biểu của khối.",
      en: "Commended for achieving Outstanding Academic Excellence and ranking in the Top 10 outstanding students of the grade."
    },
    imageUrl: "/certificates/cert-hoctap-2025-truong.svg",
    badgeType: "academic"
  }
];
