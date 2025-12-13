
export type Language = 'en' | 'ru';

export interface Project {
  id: number;
  title: {
    en: string;
    ru: string;
  };
  category: string;
  tech: string[]; // Added for credibility
  imageUrl: string;
  link?: string;
  description: {
    en: string;
    ru: string;
  };
}

export interface NavLink {
  label: {
    en: string;
    ru: string;
  };
  href: string;
  key: string;
}

export interface Service {
  id: number;
  title: { en: string; ru: string };
  description: { en: string; ru: string };
  tags: string[];
}
