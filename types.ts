export type Language = 'vi' | 'en';

export interface LocalizedString {
  vi: string;
  en: string;
}

export type LocalizedProp = string | LocalizedString;

export interface Project {
  id: string;
  title: LocalizedProp;
  description: LocalizedProp;
  tags: string[];
  image: string;
  statusBadge?: LocalizedProp;
  docType?: 'shineai' | 'hanhtrinhxanh' | 'vuihoctiengviet' | 'opentwin' | 'greenbin' | 'standard';
  docFileLabel?: string;
  link?: string;
}

export interface Achievement {
  id: string;
  title: LocalizedProp;
  year: string;
  category?: string;
  badge?: LocalizedProp;
  description: LocalizedProp;
  isHighlight?: boolean;
}

export interface MediaMention {
  id: string;
  source: string;
  title: LocalizedProp;
  link: string;
}

export interface YoutubeChannel {
  id: string;
  name: LocalizedProp;
  desc?: LocalizedProp;
  link: string;
  subscribers?: string;
}

export interface SkillItem {
  name: LocalizedProp;
  level: number;
}

export interface Certificate {
  id: string;
  code: string; // Định dạng chuẩn: <Bảng thi>-<Năm>-<Cấp thi> (VD: Bảng D2 - 2026 - Cấp Tỉnh)
  division: string; // Bảng thi (Bảng A, Bảng D1, Bảng D2)
  year: string; // Năm (2026, 2025, 2024)
  level: {
    vi: string;
    en: string;
  }; // Cấp thi (Cấp Quốc gia, Cấp Khu vực, Cấp Tỉnh)
  awardTitle: LocalizedProp;
  issuer: LocalizedProp;
  date?: string;
  description?: LocalizedProp;
  badgeType: 'national' | 'regional' | 'provincial' | 'academic' | 'city' | 'school';
  imageUrl?: string; // Link ảnh bằng khen thực tế do người dùng cung cấp hoặc tải lên
  decisionNo?: string; // Số Quyết định khen thưởng (ví dụ: 624-QĐ/TWĐTN-CTTN)
  signer?: LocalizedProp; // Người ký quyết định (Bí thư BCH TW Đoàn, Trưởng BTC, Hiệu trưởng...)
}
