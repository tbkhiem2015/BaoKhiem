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
  docType?: 'opentwin' | 'greenbin' | 'standard';
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
