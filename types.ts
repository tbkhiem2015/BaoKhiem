
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface Achievement {
  id: string;
  title: string;
  year: string;
  description: string;
}

export interface MediaMention {
  id: string;
  source: string;
  title: string;
  link: string;
}

export interface YoutubeChannel {
  id: string;
  name: string;
  link: string;
  subscribers?: string;
}
