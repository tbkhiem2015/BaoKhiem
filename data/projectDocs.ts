// Dữ liệu tài liệu chi tiết cho các dự án: ShineAI, Hành Trình Xanh, Vui Học Tiếng Việt 1, OpenTwin và GreenBin AI

export interface DocSection {
  id: string;
  titleVi: string;
  titleEn: string;
  contentVi: string;
}

// ---------------------- 1. SHINEAI ----------------------
export const SHINEAI_METADATA = {
  title: "ShineAI — Ứng dụng AI Hỗ Trợ Học Tập Cá Nhân Hóa",
  titleEn: "ShineAI — AI-Powered Personalized Learning Platform",
  docFileName: "ShineAI_ThuyetMinh.md",
  role: "Bản thuyết minh phần mềm sáng tạo ứng dụng Trí tuệ Nhân tạo đa tầng cho trẻ em đặc biệt (ASD, ADHD) và học sinh tiểu học.",
  motto: "Mỗi đứa trẻ là một cá thể riêng biệt — AI sẽ giúp tạo ra một lộ trình học tập riêng biệt cho từng em.",
  techStack: ["ReactJS", "NestJS", "TypeScript", "GraphQL", "Firebase Firestore & Auth", "Fine-tuned Gemma (ShineLM)", "OpenAI / Claude / Gemini API"]
};

export const SHINEAI_SECTIONS: DocSection[] = [
  {
    id: "core_idea",
    titleVi: "1. Ý tưởng cốt lõi & Giá trị nhân văn",
    titleEn: "1. Core Philosophy & Humane Value",
    contentVi: `Ý tưởng cốt lõi của ShineAI là:
"Mỗi đứa trẻ là một cá thể riêng biệt — AI sẽ giúp tạo ra một lộ trình học tập riêng biệt cho từng em."

a. Cá nhân hóa bằng AI đa lớp:
• AI phân tích từng bài làm: Phân tích ngay sau mỗi bài giúp phản hồi tức thì, chỉ ra lỗi sai cụ thể thay vì chỉ cho điểm.
• AI phân tích lịch sử học tập: Tổng hợp dữ liệu dài hạn để phát hiện xu hướng học tập, không chỉ đánh giá từng lần riêng lẻ.
• AI gợi ý bài học tiếp theo: Tự động đề xuất nội dung phù hợp theo điểm mạnh/yếu, giúp học đúng trọng tâm.
• AI tạo lộ trình học theo tháng: Xây dựng kế hoạch học tập có mục tiêu rõ ràng, cá nhân hóa theo từng học sinh.
• AI đánh giá tiến trình học: Đánh giá mức độ hoàn thành và nhịp độ học, giúp điều chỉnh kịp thời.
• AI Chat theo vai trò (bé – phụ huynh – giáo viên): Tùy biến cách giao tiếp theo từng đối tượng, tăng hiệu quả tương tác và hỗ trợ.

b. Đối tượng hỗ trợ đặc biệt:
• Trẻ tự kỷ (ASD - Autism Spectrum Disorder)
• Trẻ tăng động giảm chú ý (ADHD - Attention Deficit Hyperactivity Disorder)
• Trẻ gặp khó khăn trong giao tiếp và tập trung
• Học sinh Tiểu học cần môi trường học trực quan, sinh động.`
  },
  {
    id: "features",
    titleVi: "2. Hệ sinh thái 4 Vai trò & Trò chơi giáo dục",
    titleEn: "2. 4-Role Ecosystem & Educational Games",
    contentVi: `a. Hệ sinh thái 4 vai trò trên cùng hệ thống:
• Học sinh: Trải nghiệm học tập cá nhân hóa, có AI hỗ trợ và phản hồi liên tục.
• Phụ huynh: Theo dõi tiến trình và nhận gợi ý cách dạy con dựa trên dữ liệu thực.
• Giáo viên: Quản lý lớp, giao bài và phân tích học sinh một cách khoa học, tiết kiệm thời gian.
• Quản trị viên: Kiểm soát nội dung, dữ liệu và cấu hình hệ thống AI toàn diện.

b. Hệ thống học tập & trò chơi giáo dục:
• 10 loại câu hỏi bài tập tương tác phát triển toàn diện: Ngôn ngữ, Cảm xúc - Xã hội, Tập trung, Toán học, Kỹ năng sống.
• Nhóm trò chơi ghi nhớ: Lật thẻ, Simon Says, Nối dây.
• Nhóm trò chơi vận động: Chạm hình, Bắt vật rơi, Bắt chước động tác.
• Nhóm trò chơi sáng tạo: Ghép hình, Tạo hình động vật, Tô màu.
Giúp trẻ học mà không áp lực, vừa học vừa chơi!`
  },
  {
    id: "shinelm",
    titleVi: "3. Nghiên cứu Fine-tune mô hình ngôn ngữ ShineLM",
    titleEn: "3. ShineLM Language Model Research & Fine-Tuning",
    contentVi: `Bên cạnh việc tích hợp các mô hình AI lớn như OpenAI, Gemini, Claude:
Tác giả đã tự nghiên cứu và thử nghiệm thành công việc Fine-tune mô hình Gemma của Google để xây dựng mô hình AI chuyên biệt mang tên ShineLM:
• Nền tảng huấn luyện: Kaggle, Google Colab (GPU/TPU), Hugging Face, Unsloth (LoRA/QLoRA).
• Mô hình nền: Gemma.
• Dữ liệu huấn luyện: Bộ dữ liệu chuyên biệt gồm 100 mẫu dữ liệu giáo dục và hỗ trợ học sinh có nhu cầu đặc biệt.
• Kết quả: ShineLM có khả năng phản hồi thấu cảm theo ngữ cảnh giáo dục, từng bước làm chủ công nghệ AI độc lập của người Việt.`
  },
  {
    id: "comparison",
    titleVi: "4. So sánh với phần mềm truyền thống & Định hướng",
    titleEn: "4. Comparison with Traditional Software & Roadmap",
    contentVi: `So sánh thực tế:
• Cá nhân hóa học tập: Truyền thống (Hạn chế) | ShineAI (Toàn diện)
• Phân tích kết quả bằng AI: Truyền thống (Không) | ShineAI (Có)
• Gợi ý bài học tự động: Truyền thống (Không) | ShineAI (Có)
• Lộ trình học tập cá nhân hóa: Truyền thống (Không) | ShineAI (Có)
• Trợ lý AI đồng hành: Truyền thống (Không) | ShineAI (Có)
• Kết nối Học sinh - Phụ huynh - Giáo viên: Truyền thống (Một phần) | ShineAI (Đồng bộ)

Định hướng tương lai:
• Mở rộng ứng dụng di động iOS / Android.
• Tích hợp tương tác giọng nói hai chiều (Speech-to-Text & Text-to-Speech).
• Mở rộng mô hình ShineLM với tập dữ liệu quy mô lớn hơn.`
  }
];

// ---------------------- 2. HÀNH TRÌNH XANH ----------------------
export const HANHTRINHXANH_METADATA = {
  title: "Hành Trình Xanh — Game Giáo Dục Bảo Vệ Môi Trường",
  titleEn: "Green Journey — Environmental Protection Game",
  docFileName: "HanhTrinhXanh_ThuyetMinh.md",
  role: "Bản thuyết minh phần mềm sáng tạo Hành Trình Xanh lập trình trên Scratch 3.0, thông điệp bảo vệ môi trường và đồng cảm với nhân viên vệ sinh.",
  author: "Trần Bảo Khiêm (Lớp 3A - Trường PT Thực hành Sư phạm)",
  techStack: ["Scratch 3.0", "Leonardo AI (Tạo ảnh)", "Remove-bg AI", "Vbee AI (Chuyển lời thoại)", "D-ID AI (Nhân vật AI)"]
};

export const HANHTRINHXANH_SECTIONS: DocSection[] = [
  {
    id: "purpose",
    titleVi: "1. Mục đích & Ý nghĩa nhân văn",
    titleEn: "1. Humane Purpose & Meaning",
    contentVi: `• Vệ sinh rác thải là một công việc cực khổ, nặng nhọc và nguy hiểm. Phần mềm là một game nhỏ mô phỏng sự khó khăn cũng như nguy hiểm của nhân viên vệ sinh.
• Nâng cao ý thức bảo vệ môi trường cho các bạn học sinh và cộng đồng, gửi thông điệp hãy chung tay bảo vệ môi trường và đồng cảm, trân trọng cống hiến của cô chú công nhân vệ sinh.
• Nhà trường có thể lồng ghép phần mềm vào các tiết học đạo đức, kỹ năng sống để giáo dục ý thức thông qua hình thức vừa học vừa chơi.`
  },
  {
    id: "gameplay",
    titleVi: "2. Hướng dẫn chơi & 2 Cửa game thử thách",
    titleEn: "2. Gameplay & 2 Challenge Levels",
    contentVi: `a. Cửa 1: Dọn rác trên đường phố
• Điều khiển nhân viên vệ sinh dùng chổi quét dọn rác trên đường.
• Mối nguy hiểm: Xe cộ qua lại trên phố, nếu va chạm sẽ bị trừ điểm!
• Nâng cấp: Đạt 20 điểm được nâng cấp từ đi bộ sang chạy xe gom rác.
• Qua cửa: Đạt 50 điểm sẽ chúc mừng thắng cửa 1 và chuyển sang cửa 2.

b. Cửa 2: Dọn rác dưới đáy biển
• Nhân vật chuyển thành thợ lặn dọn rác dưới biển.
• Mối nguy hiểm: Cá mập bơi ngẫu nhiên, chạm vào sẽ bị trừ điểm!
• Rác dưới biển trôi dạt tự do không cố định, tăng độ thử thách.
• Chiến thắng: Đạt 100 điểm sẽ hoàn thành hành trình xuất sắc!

c. Tính điểm các loại rác:
• Rác hữu cơ: +1 điểm
• Lon kim loại: +2 điểm
• Bao rác lớn: +4 điểm
• Quà thưởng xuất hiện xoay tròn đổi màu tại các mốc 20, 40, 60, 80 điểm.`
  },
  {
    id: "ai_application",
    titleVi: "3. Ứng dụng Trí tuệ Nhân tạo (AI) sáng tạo",
    titleEn: "3. Creative AI Tools Integration",
    contentVi: `Tác giả đã chủ động làm chủ và ứng dụng thành thạo các công cụ AI hiện đại để thiết kế đồ họa, âm thanh cho trò chơi:
• Leonardo.ai (AI Image Generation): Tạo hình ảnh nhân vật cô chú lao công, xe rác, người thợ lặn, cậu bé cổ vũ và sinh vật biển.
• Remove-bg.ai: Tự động tách nền sắc nét cho các nhân vật và sprite game.
• Vbee.vn: Chuyển văn bản thành lời thoại âm thanh sinh động bằng giọng đọc tiếng Việt tự nhiên.
• D-ID.com: Chuyển lời thoại thành nhân vật ảo chuyển động chân thực để chào mừng và cổ vũ người chơi.`
  },
  {
    id: "future",
    titleVi: "4. Hướng phát triển: Game Thực tế ảo (VR) + AI",
    titleEn: "4. Future Vision: VR Game with AI Waste Recognition",
    contentVi: `Ý tưởng phát triển nâng cao: Xây dựng game Thực tế ảo (VR) kết hợp AI nhận diện rác ngoài đời thực:
• Người dùng sử dụng điện thoại, tablet hoặc kính VR quay lại hành động nhặt rác bỏ vào đúng nơi quy định.
• Hệ thống AI phân tích hình ảnh thực tế xem rác bỏ đúng hay sai, phân loại rác để tự động tích điểm thưởng vào hồ sơ cá nhân.
• Liên kết với nhà trường để làm tiêu chí đánh giá ý thức bảo vệ môi trường của học sinh.`
  }
];

// ---------------------- 3. VUI HỌC TIẾNG VIỆT 1 ----------------------
export const VUIHOCTIENGVIET_METADATA = {
  title: "Phần Mềm Vui Học Tiếng Việt 1",
  titleEn: "Fun Vietnamese Grade 1 Interactive Software",
  docFileName: "VuiHocTiengViet1_ThuyetMinh.md",
  role: "Bản thuyết minh phần mềm sáng tạo hỗ trợ học sinh lớp 1 học chữ cái, âm vần theo bộ sách Chân Trời Sáng Tạo (GDPT 2018).",
  author: "Trần Bảo Khiêm (Lớp 4G - Trường PT Thực hành Sư phạm)",
  techStack: ["Scratch", "Tương tác mô phỏng", "Chương trình GDPT 2018", "Tập gõ phím 10 ngón"]
};

export const VUIHOCTIENGVIET_SECTIONS: DocSection[] = [
  {
    id: "purpose",
    titleVi: "1. Mục đích & Ý nghĩa giáo dục",
    titleEn: "1. Purpose & Educational Value",
    contentVi: `• Bám sát chương trình GDPT 2018 (Bộ sách Chân Trời Sáng Tạo) giúp học sinh lớp 1 tiếp cận chữ cái, âm vần một cách trực quan, vui nhộn.
• Rèn luyện kỹ năng Tiếng Việt qua bài học, bài ôn tập và tương tác đa giác quan (nghe, nhìn, thao tác chuột, gõ phím).
• Hỗ trợ giáo viên trên lớp học thông minh (Smart Classroom) và giúp phụ huynh dễ dàng đồng hành cùng con tại nhà.`
  },
  {
    id: "games",
    titleVi: "2. Hệ thống bài học & Trò chơi giáo dục",
    titleEn: "2. Lessons Structure & Educational Games",
    contentVi: `a. Cấu trúc 4 phân hệ chính:
• Bài học (19 bài học chữ cái & âm vần phong phú)
• Ôn bài
• Luyện tập (Sắp xếp từ ngữ, trắc nghiệm, chọn đúng/sai, sắp xếp ký tự, chọn đối xứng)
• Trò chơi học tập

b. Các mini-games đặc sắc:
• Bảo vệ hành tinh xanh: Mô phỏng Hệ mặt trời kết hợp nhận diện chữ cái.
• Mèo vượt chông gai để nhặt chữ: Điều khiển nhân vật vượt chướng ngại vật thu thập âm vần đúng.
• Tập gõ phím 10 ngón: Rèn luyện kỹ năng gõ bàn phím chuẩn cho học sinh ngay từ lớp 1.
• Vòng quay kỳ diệu & Luyện trí nhớ từ ngữ hình ảnh.`
  },
  {
    id: "future",
    titleVi: "3. Khả năng ứng dụng & Định hướng AI tương lai",
    titleEn: "3. Practical Application & Future AI Integration",
    contentVi: `• Ứng dụng rộng rãi: Trường học, lớp học hòa nhập, trung tâm gia sư, và trẻ em vùng sâu vùng xa tự học offline.
• Hỗ trợ học sinh gặp khó khăn trong ngôn ngữ và phát âm.
• Định hướng nâng cấp:
  - Tích hợp AI chấm điểm phát âm tiếng Việt chuẩn.
  - AI cá nhân hóa lộ trình học theo tốc độ tiếp thu của từng bé.
  - Mở rộng phiên bản lên màn hình cảm ứng máy tính bảng và điện thoại di động.`
  }
];

// ---------------------- 4. OPENTWIN ----------------------
export const OPENTWIN_METADATA = {
  title: "OpenTwin — Student Digital Twin AI",
  version: "5.0",
  status: {
    vi: "Đang phát triển",
    en: "In Development"
  },
  docFileName: "OpenTwin_Project_Context.md",
  role: "Source of Truth cho kiến trúc sản phẩm, domain model, AI intelligence, roadmap và nguyên tắc phát triển.",
  coreMotto: {
    vi: "School Program = Học sinh phải học gì | Goal = Học sinh muốn đạt gì | Learning Journal = Học sinh thực tế đã học gì | Digital Twin = Học sinh đang ở đâu và nên làm gì tiếp theo",
    en: "School Program = What must be learned | Goal = What student wants to achieve | Learning Journal = What student actually learned | Digital Twin = Where student is & what to do next"
  },
  techStack: ["React / Next.js", "FastAPI (Python)", "PostgreSQL + pgvector", "Hybrid RAG + MAG", "LangGraph Multi-Agent", "LLM Model Router"]
};

export const OPENTWIN_SECTIONS: DocSection[] = [
  {
    id: "overview",
    titleVi: "1. Tổng quan & Triết lý cốt lõi",
    titleEn: "1. Overview & Core Philosophy",
    contentVi: `OpenTwin là nền tảng AI xây dựng Bản Sao Số học tập của từng học sinh, liên tục quan sát, ghi nhớ, cập nhật trạng thái kiến thức/kỹ năng và cá nhân hóa quá trình học tập.

OpenTwin không chỉ là chatbot hỏi-đáp thông thường:
• Chatbot thông thường: Question → LLM → Answer
• OpenTwin: Student → Observation → Digital Twin → Student State (Knowledge + Memory + Skills + Goals) → Reason/Plan → Agent → LLM → Personalized Action → Loop.

Mục tiêu cốt lõi: Một người bạn học tập thông minh luôn quan sát, hiểu, ghi nhớ và đồng hành cùng học sinh.`
  },
  {
    id: "concepts",
    titleVi: "2. Mô hình 4 Khái niệm cốt lõi",
    titleEn: "2. Four Core Learning Concepts",
    contentVi: `• School Program (Chương trình học): Học sinh PHẢI học gì? (Chương trình chuẩn theo khối lớp, trường học ví dụ THCS Lý Thường Kiệt Lớp 6).
• Personal Learning Program: Học sinh MUỐN học theo lộ trình nào? (Lập trình HSG Tin học, IELTS, kỹ năng...).
• Goal (Mục tiêu): Học sinh MUỐN ĐẠT được gì? (Đạt giải Tin học trẻ, 9+ Toán...).
• Learning Journal (Nhật ký học tập): Học sinh THỰC TẾ đã học gì và hiểu đến đâu mỗi ngày (Cảm biến dữ liệu thời gian thực cho Digital Twin).

→ Digital Twin kết hợp tất cả để trả lời: Học sinh đang ở đâu và nên làm gì tiếp theo?`
  },
  {
    id: "architecture",
    titleVi: "3. Kiến trúc kỹ thuật & Trí tuệ AI",
    titleEn: "3. Technical Architecture & AI Intelligence",
    contentVi: `• Backend: Python + FastAPI phục vụ toàn bộ Intelligent Domain API.
• Database: PostgreSQL + pgvector lưu trữ vector embeddings và structured states.
• Hybrid RAG + MAG:
  - RAG: Truy xuất tài liệu giáo khoa, chương trình chuẩn bên ngoài (External Knowledge).
  - MAG (Memory-Augmented Generation): Truy xuất lịch sử học, lỗi sai, thói quen riêng của học sinh (Student Memory).
• Knowledge Graph & Knowledge Tracing (BKT / DKT): Theo dõi độ thành thạo kiến thức theo thời gian, phân tích lỗ hổng (Gap Analysis).
• Model Router: Tự động điều phối giữa các mô hình AI theo độ phức tạp bài toán và ngân sách định mức của học sinh.`
  },
  {
    id: "workflow",
    titleVi: "4. Luồng hoạt động hằng ngày (Daily Loop)",
    titleEn: "4. Daily Learning Workflow",
    contentVi: `1. Học sinh ghi nhận Learning Journal (chỉ mất 30-60 giây): Môn học, bài học, mức độ hiểu (🟢 Hiểu rõ / 🟡 Hiểu một phần / 🔴 Chưa hiểu), điểm số nếu có.
2. Observation Engine chuyển thành sự kiện quan sát.
3. Digital Twin cập nhật trạng thái kiến thức & kỹ năng.
4. Tracing Engine đánh giá độ thành thạo và phân tích lỗ hổng kiến thức.
5. Recommendation Engine đưa ra đề xuất học tập cá nhân hóa ngày hôm sau.`
  }
];

// ---------------------- 5. GREENBIN AI ----------------------
export const GREENBIN_METADATA = {
  title: "GreenBin AI — AI Smart Waste Sorting Robot",
  tagline: {
    vi: "Vì một môi trường xanh bắt đầu từ những hành động nhỏ!",
    en: "Smart Waste Sorting — One Step Toward a Greener Future!"
  },
  website: "https://greenbin.ai.studio",
  docFileName: "GreenBin_AI_Brochure.pdf",
  projectType: "STEM / AI / Robotics / Computer Vision / Môi trường",
  targetAudience: "Học sinh THCS",
  pipelineSteps: [
    { step: 1, nameVi: "Rác", nameEn: "Waste", descVi: "Đưa vật phẩm rác vào phễu nhận diện", descEn: "Place waste item into detection slot" },
    { step: 2, nameVi: "Webcam chụp", nameEn: "Webcam Capture", descVi: "Camera chụp hình ảnh thời gian thực", descEn: "Real-time image captured by camera" },
    { step: 3, nameVi: "AI Phân loại", nameEn: "AI Classification", descVi: "Mô hình Computer Vision nhận diện loại rác", descEn: "Computer Vision model classifies waste" },
    { step: 4, nameVi: "Raspberry Pi 4", nameEn: "Raspberry Pi 4", descVi: "Xử lý logic và ra quyết định điều khiển", descEn: "Processes logic & sends control command" },
    { step: 5, nameVi: "Servo SG90", nameEn: "Servo Control", descVi: "Lật tấm chắn/flap sang trái hoặc phải", descEn: "Flips flap left or right" },
    { step: 6, nameVi: "Thùng rác", nameEn: "Target Bin", descVi: "Rác trượt chính xác vào thùng Plastic hoặc Other", descEn: "Waste slides into Plastic or Other bin" }
  ],
  hardwareComponents: [
    { name: "Raspberry Pi 4", roleVi: "Bộ xử lý AI & điều khiển trung tâm", roleEn: "AI processor & central controller" },
    { name: "Webcam", roleVi: "Chụp hình ảnh rác theo thời gian thực", roleEn: "Real-time waste image capture" },
    { name: "Servo SG90", roleVi: "Động cơ servo lật mảng trượt trái / phải", roleEn: "Servo motor controls left/right flap" },
    { name: "Nguồn 5V", roleVi: "Cung cấp nguồn điện ổn định cho hệ thống", roleEn: "Stable 5V system power supply" },
    { name: "Thùng Carton", roleVi: "Khung cơ khí thân thiện môi trường, chi phí thấp", roleEn: "Eco-friendly low-cost cardboard body" },
    { name: "2 Ngăn rác", roleVi: "Phân loại rõ ràng: Plastic (Nhựa) & Other (Còn lại)", roleEn: "Two sorting compartments: Plastic & Other" }
  ]
};

export const GREENBIN_SECTIONS: DocSection[] = [
  {
    id: "overview",
    titleVi: "1. Tổng quan dự án",
    titleEn: "1. Project Overview",
    contentVi: `GreenBin AI là một sản phẩm STEM độc lập, được phát triển bởi học sinh THCS, sử dụng công nghệ AI và Robotics để xây dựng một robot phân loại rác đơn giản, chi phí thấp, dễ chế tạo và dễ trình diễn.

• Tên sản phẩm: AI Smart Waste Sorting Robot
• Website dự án: https://greenbin.ai.studio
• Mục tiêu: Xây dựng robot phân loại rác đơn giản, chi phí thấp, sử dụng Raspberry Pi 4 + webcam + AI + 1 servo để tự động đưa rác vào đúng thùng.`
  },
  {
    id: "problem",
    titleVi: "2. Vấn đề cần giải quyết",
    titleEn: "2. The Problem We Want to Solve",
    contentVi: `Phân loại rác tại nguồn giúp rác có khả năng được tái chế hoặc xử lý phù hợp hơn. Trong mô hình STEM dành cho học sinh, việc xây dựng hệ thống công nghiệp quá phức tạp và tốn kém.

GreenBin AI chọn cách tiếp cận đơn giản:
• Chỉ phân loại 2 nhóm chính: Plastic (Nhựa) / Other (Còn lại).
• Dùng camera thay cho nhiều loại cảm biến phức tạp.
• Dùng AI để nhận dạng hình ảnh rác.
• Dùng 1 servo duy nhất để thay đổi hướng rơi.
• Tận dụng bìa carton để chế tạo toàn bộ mô hình thân thiện môi trường.`
  },
  {
    id: "mechanism",
    titleVi: "3. Cơ cấu cơ khí & Phân loại rác",
    titleEn: "3. Mechanical Structure & Sorting",
    contentVi: `Toàn bộ khung cơ khí được làm bằng THÙNG CARTON / BÌA CARTON:
• Máng trượt: Dẫn hướng rác rơi từ trên xuống.
• Tấm chắn / Flap: Được điều khiển trực tiếp bởi 1 động cơ servo SG90.
• 2 Hướng rẽ:
  - LẬT TRÁI (LEFT) → Rác trượt vào Thùng Plastic (Chai nhựa, ly cốc nhựa, bao bì nhựa...)
  - LẬT PHẢI (RIGHT) → Rác trượt vào Thùng Other (Giấy, lá cây, rác sinh hoạt...)`
  },
  {
    id: "hardware",
    titleVi: "4. Phần cứng & Sơ đồ kết nối",
    titleEn: "4. Main Hardware & Connections",
    contentVi: `• Raspberry Pi 4: Bộ não xử lý AI và điều khiển tín hiệu PWM cho servo.
• Webcam: Gắn trên máng trượt để chụp cận cảnh rác vừa được bỏ vào.
• Servo SG90 (hoặc tương đương): Góc quay linh hoạt để gạt tấm chắn.
• Nguồn cấp 5V: Cung cấp điện cho Raspberry Pi và động cơ.
• Thùng Carton 2 ngăn: Ngăn chứa rác Plastic và Other độc lập.`
  }
];
