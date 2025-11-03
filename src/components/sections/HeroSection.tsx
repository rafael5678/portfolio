'use client';

import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

interface HeroSectionProps {
  onSectionClick: (sectionId: string) => void;
}

export const HeroSection = ({ onSectionClick }: HeroSectionProps) => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 text-xs border border-border rounded-full mb-4 text-foreground">
            {t.badge}
          </div>
          <h1 className="mb-4 text-3xl md:text-5xl text-foreground font-medium">
            Juan Rafael Calzada González
          </h1>
          <div className="mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 bg-gradient-to-br from-primary to-primary/60 border-4 border-border overflow-hidden shadow-2xl">
              {/* Aquí irá tu foto cuando la subas */}
              <img 
                src="/profile-photo.jpg" 
                alt="Juan Rafael Calzada González" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Si la imagen no carga, mostramos las iniciales
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-white text-3xl md:text-4xl font-bold">JRC</span></div>';
                  }
                }}
              />
            </div>
          </div>
          <p className="mb-6 text-xs text-muted-foreground max-w-2xl mx-auto">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <button 
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
              onClick={() => onSectionClick('proyectos')}
            >
              {t.viewProjects}
            </button>
            <button 
              className="px-6 py-2 border border-border rounded-md hover:bg-accent transition-colors text-sm font-medium text-foreground"
              onClick={() => onSectionClick('contacto')}
            >
              {t.contact}
            </button>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <a 
              href="https://github.com/rafael5678/portfolio.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-border hover:bg-accent transition-colors rounded-md text-foreground"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/juan-rafael-calzada-65566a387" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-border hover:bg-accent transition-colors rounded-md text-foreground"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/573103602816" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-border hover:bg-accent transition-colors rounded-md text-foreground"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
          <button
            onClick={() => onSectionClick('cv')}
            className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="w-4 h-4 mr-1 animate-bounce" />
            {t.moreInfo}
          </button>
        </div>
      </div>
    </section>
  );
};
