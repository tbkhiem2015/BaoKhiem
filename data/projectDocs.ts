// Dữ liệu tài liệu chi tiết cho các dự án OpenTwin và GreenBin AI

export interface DocSection {
  title: string;
  content: string;
  badge?: string;
}

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

export const OPENTWIN_SECTIONS = [
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

export const GREENBIN_SECTIONS = [
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
