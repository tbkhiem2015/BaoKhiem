
import React from 'react';
import { Project, Achievement, MediaMention, YoutubeChannel } from './types';
import { Award, Code, Youtube, MapPin, Calendar, School, BookOpen, Users } from 'lucide-react';

export const PERSONAL_INFO = {
  fullName: "Trần Bảo Khiêm",
  birthDate: "2 tháng 6 năm 2015",
  location: "Bình Đức, Long Xuyên, An Giang",
  school: "Lớp 5, trường Phổ thông Thực hành Sư phạm - Đại học An Giang",
  bio: "Lập trình viên nhí đam mê sáng tạo nội dung và giải thuật. Luôn khát khao chia sẻ kiến thức công nghệ đến bạn bè cùng trang lứa.",
  profileImage: "/profile.jpg" 
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Hành trình xanh",
    description: "Dự án về giáo dục môi trường và bảo vệ trái đất thông qua các trò chơi tương tác.",
    tags: ["Scratch", "Environment"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Vui học Tiếng Việt lớp 1",
    description: "Ứng dụng hỗ trợ học chữ cái và vần Tiếng Việt cho các bạn bắt đầu vào lớp 1.",
    tags: ["Education", "Scratch"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "ShineAI",
    description: "Dự án khám phá trí tuệ nhân tạo dành cho học sinh tiểu học.",
    tags: ["AI", "Creative"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "a1",
    title: "Giải Nhất Quốc gia Hội thi Tin Học Trẻ bảng D1",
    year: "2024",
    description: "Thành tích cao nhất trong cuộc thi tin học uy tín nhất dành cho học sinh tại Việt Nam."
  },
  {
    id: "a2",
    title: "Top 10 học sinh xuất sắc của lớp",
    year: "Nhiều năm liền",
    description: "Duy trì phong độ học tập ổn định tại trường Phổ thông Thực hành Sư phạm."
  }
];

export const MEDIA: MediaMention[] = [
  { 
    id: "m1", 
    source: "Báo Tài năng Việt", 
    title: "Trần Bảo Khiêm chinh phục bảng D1 Tin học trẻ toàn quốc", 
    link: "https://tainangviet.vn/tran-bao-khiem-chinh-phuc-bang-d1-tin-hoc-tre-toan-quoc-voi-dam-me-lap-trinh-tu-nam-3-tuoi-dar6750/" 
  },
  { 
    id: "m2", 
    source: "Báo An Giang", 
    title: "Cậu bé 10 tuổi ấp ủ niềm đam mê lập trình", 
    link: "https://baoangiang.com.vn/cau-be-10-tuoi-ap-u-niem-dam-me-lap-trinh-a461191.html" 
  },
  { 
    id: "m4", 
    source: "Báo Sinh viên ĐH An Giang", 
    title: "Tài năng nhí trường Thực hành Sư phạm", 
    link: "https://enews.agu.edu.vn/index.php?option=com_content&view=article&id=25713&Itemid=121" 
  }
];

export const YOUTUBE_CHANNELS: YoutubeChannel[] = [
  { id: "y1", name: "Khiêm Gaming", link: "https://www.youtube.com/@Khiemchoigame2015" },
  { id: "y2", name: "Học Cùng Bảo Khiêm", link: "https://www.youtube.com/@KhiemSonic" }
];

export const SKILLS = [
  { name: "Lập trình giải thuật với Python", level: 85, icon: <Code className="w-5 h-5" /> },
  { name: "Lập trình sáng tạo với Scratch", level: 95, icon: <BookOpen className="w-5 h-5" /> },
];
