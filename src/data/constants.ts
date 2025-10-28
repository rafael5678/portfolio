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
    title: "Sistema de Rutas de Recorrido",
    description: "Sistema de recorrido para trotar con seguimiento en tiempo real y mapas interactivos",
    tech: ["JavaScript", "TypeScript", "CSS + Tailwind", "JSON"],
    status: "Completado",
    type: "Académico",
    demoUrl: "https://routes-flame-six.vercel.app",
    repoUrl: "https://github.com/rafael5678/routes.git",
    image: "/projects/routes-app.png"
  },
  {
    title: "IA para Tareas",
    description: "IA para ayudarte en tus trabajos si eres muy perezoso o perezosa. Te ayudan con trabajos de inglés, programación, matemáticas y mucho más",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Next.js API Routes"],
    status: "Completado",
    type: "Personal",
    demoUrl: "https://ia-tareas.vercel.app",
    repoUrl: "https://github.com/rafael5678/ia_tareas",
    image: "/projects/ia-tareas.png"
  },
  {
    title: "Sistema Hospy",
    description: "Tu asistente de gestión hospitalaria. Aplicación completa para gestionar historias clínicas, citas médicas, pacientes y doctores con autenticación de múltiples niveles",
    tech: ["Next.js 14", "TypeScript", "MongoDB Atlas", "Tailwind CSS", "bcryptjs"],
    status: "Completado",
    type: "Personal",
    demoUrl: "https://hospy.vercel.app/login",
    repoUrl: "https://github.com/rafael5678/Hospy",
    image: "/projects/hospy.png"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "José Cotes",
    role: "Amigo de la Universidad",
    company: "Universidad de Nariño (UDENAR)",
    content: "Es un ingeniero de software talentoso, responsable y siempre dispuesto a aprender y mejorar. Destaca por su compromiso, creatividad y gran capacidad para resolver problemas.",
    rating: 5,
    initials: "JC"
  },
  {
    name: "Isabel Cervera",
    role: "Conocida del Trabajo",
    company: "Compañera Laboral",
    content: "Es un chico que aunque no he hablado mucho, es una persona muy alegre, le gusta aligerar el ambiente, es muy positivo tanto con las personas que conoce como no conoce. Aunque llega a ser cansón jajaja, yo sé que va a ser un ingeniero muy bueno y responsable.",
    rating: 5,
    initials: "IC"
  },
  {
    name: "Don Jhon",
    role: "Propietario",
    company: "Lugar de Residencia",
    content: "Es una persona responsable, muy amable, muy recochero, le gusta hablar y conversar. Es una persona que puedo decir que sin importar qué, va a tratar de cumplir lo que dice. Es un chico muy trabajador pero conversa mucho jajajajajaj. En programación solo le he visto unas cuantas cosas que crea, así que pienso que es un buen ingeniero de software.",
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
