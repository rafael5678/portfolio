import { MenuItem, Theme, Project, Testimonial, Skills, Service } from '@/types';

export const menuItems: MenuItem[] = [
  { id: 'inicio', label: 'Home' },
  { id: 'cv', label: 'Resume' },
  { id: 'sobre-mi', label: 'About' },
  { id: 'proyectos', label: 'Projects' },
  { id: 'testimonios', label: 'Testimonials' },
  { id: 'experiencia', label: 'Experience' },
  { id: 'habilidades', label: 'Skills' },
  { id: 'servicios', label: 'Services' },
  { id: 'estadisticas', label: 'Statistics' },
  { id: 'logros', label: 'Achievements' },
  { id: 'contacto', label: 'Contact' }
];

export const themes: Theme[] = [
  { id: 'light', name: 'Claro', class: '' },
  { id: 'dark', name: 'Oscuro', class: 'dark' },
  { id: 'blue', name: 'Azul', class: 'theme-blue' },
  { id: 'green', name: 'Verde', class: 'theme-green' },
  { id: 'purple', name: 'Púrpura', class: 'theme-purple' }
];

export const projects: Project[] = [
  {
    title: "Route Tracking System",
    description: "Route system for jogging with real-time tracking and interactive maps",
    tech: ["JavaScript", "TypeScript", "CSS + Tailwind", "JSON"],
    status: "Completado",
    type: "Académico",
    demoUrl: "https://routes-flame-six.vercel.app",
    repoUrl: "https://github.com/rafael5678/routes.git",
    image: "/projects/routes-app.png"
  },
  {
    title: "AI for Tasks",
    description: "AI to help you with your work if you are very lazy. Helps with English, programming, mathematics, and much more",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Next.js API Routes"],
    status: "Completado",
    type: "Personal",
    demoUrl: "https://ia-tareas.vercel.app",
    repoUrl: "https://github.com/rafael5678/ia_tareas",
    image: "/projects/ia-tareas.png"
  },
  {
    title: "Hospy System",
    description: "Your hospital management assistant. Complete application to manage clinical histories, medical appointments, patients, and doctors with multi-level authentication",
    tech: ["Next.js 14", "TypeScript", "MongoDB Atlas", "Tailwind CSS", "bcryptjs"],
    status: "Completado",
    type: "Personal",
    demoUrl: "https://hospy-kbz41pbkp-juan-rafael-s-projects.vercel.app/login",
    repoUrl: "https://github.com/rafael5678/Hospy",
    image: "/projects/hospy.png"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "José Cotes",
    role: "University Friend",
    company: "Universidad de Nariño (UDENAR)",
    content: "He is a talented, responsible software engineer who is always willing to learn and improve. He stands out for his commitment, creativity, and great ability to solve problems.",
    rating: 5,
    initials: "JC"
  },
  {
    name: "Isabel Cervera",
    role: "Work Acquaintance",
    company: "Work Colleague",
    content: "He's a guy who, although I haven't talked to much, is a very cheerful person who likes to lighten the mood and is very positive with both people he knows and doesn't know. Although he can be annoying hahaha, I know he's going to be a very good and responsible engineer.",
    rating: 5,
    initials: "IC"
  },
  {
    name: "Don Jhon",
    role: "Owner",
    company: "Place of Residence",
    content: "He is a responsible person, very kind, very talkative, likes to chat and converse. I can say that regardless of what happens, he will try to keep his word. He's a very hard-working guy but talks a lot hahahaha. In programming, I've only seen a few things he creates, so I think he's a good software engineer.",
    rating: 5,
    initials: "DJ"
  }
];

export const skills: Skills = {
  backend: [
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" }
  ],
  frontend: [
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "React/Next.js", icon: "⚛️" }
  ]
};

export const services: Omit<Service, 'icon'>[] = [
  {
    title: "Backend Development",
    description: "Robust and scalable APIs with Python and Java",
    features: ["REST APIs", "Microservices", "Databases"]
  },
  {
    title: "Databases",
    description: "Design and optimization of relational databases",
    features: ["MySQL", "PostgreSQL", "Optimization"]
  },
  {
    title: "Web Development",
    description: "Modern and responsive web applications",
    features: ["JavaScript", "TypeScript", "React/Next.js"]
  },
  {
    title: "Software Architecture",
    description: "Design of scalable and maintainable systems",
    features: ["Patterns", "Scalability", "Clean Code"]
  }
];
