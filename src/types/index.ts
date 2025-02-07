export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  field: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  url?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
} 