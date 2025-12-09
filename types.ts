export enum Category {
  PROJECTS = 'PROJECTS',
  EDUCATION = 'EDUCATION',
  SKILLS = 'SKILLS'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  year: string;
  description: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: 'frontend' | 'backend' | 'tools' | 'soft';
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  linkedin?: string;
  github?: string;
  avatarUrl: string;
}