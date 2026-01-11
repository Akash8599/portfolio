import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  longDescription?: string[];
  features?: string[];
  image?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  year: string;
}