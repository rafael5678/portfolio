// Tipos para el portafolio
export interface MenuItem {
  id: string;
  label: string;
}

export interface Theme {
  id: string;
  name: string;
  class: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: string;
  type: string;
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Skills {
  backend: Skill[];
  frontend: Skill[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
