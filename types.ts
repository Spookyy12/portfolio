
export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  link?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
