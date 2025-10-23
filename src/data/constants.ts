import { MenuItem, Theme, Project, Testimonial, Skills, Service } from '@/types';

export const menuItems: MenuItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'cv', label: 'CV' },
  { id: 'sobre-mi', label: 'Sobre Mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'contacto', label: 'Contacto' }
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
    title: "Sistema de Gestión Académica",
    description: "Aplicación web para gestión de estudiantes y calificaciones desarrollada con Java y Spring Boot",
    tech: ["Java", "Spring Boot", "MySQL", "HTML/CSS"],
    status: "Completado",
    type: "Académico"
  },
  {
    title: "API REST con Python",
    description: "API RESTful para manejo de inventarios desarrollada con Python y Flask",
    tech: ["Python", "Flask", "SQLite", "Postman"],
    status: "Completado",
    type: "Académico"
  },
  {
    title: "Aplicación Frontend React",
    description: "Dashboard interactivo desarrollado con React y TypeScript para visualización de datos",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    status: "En desarrollo",
    type: "Personal"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Prof. María González",
    role: "Docente de Programación",
    company: "Universidad Cooperativa",
    content: "Juan Rafael demuestra excelente comprensión de los conceptos de programación y siempre entrega proyectos de calidad.",
    rating: 5,
    initials: "MG"
  },
  {
    name: "Carlos Méndez",
    role: "Compañero de Proyecto",
    company: "Equipo Académico",
    content: "Trabajar con Rafael ha sido genial. Su enfoque en backend y atención al detalle hacen que los proyectos sean exitosos.",
    rating: 5,
    initials: "CM"
  },
  {
    name: "Ana Rodríguez",
    role: "Coordinadora Académica",
    company: "Universidad Cooperativa",
    content: "Un estudiante dedicado con gran potencial en desarrollo de software. Siempre dispuesto a aprender y mejorar.",
    rating: 5,
    initials: "AR"
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
    title: "Desarrollo Backend",
    description: "APIs robustas y escalables con Python y Java",
    features: ["REST APIs", "Microservicios", "Bases de Datos"]
  },
  {
    title: "Bases de Datos",
    description: "Diseño y optimización de bases de datos relacionales",
    features: ["MySQL", "PostgreSQL", "Optimización"]
  },
  {
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y responsive",
    features: ["JavaScript", "TypeScript", "React/Next.js"]
  },
  {
    title: "Arquitectura de Software",
    description: "Diseño de sistemas escalables y mantenibles",
    features: ["Patrones", "Escalabilidad", "Clean Code"]
  }
];
