export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SocialLink {
  name: string;
  url: string;
}