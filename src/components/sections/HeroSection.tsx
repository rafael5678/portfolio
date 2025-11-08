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
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16 max-w-[95%] lg:max-w-[90%] xl:max-w-[1600px]">
        <div className="text-center max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 text-sm md:text-base border border-border rounded-full mb-6 text-foreground">
            {t.badge}
          </div>
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground font-medium">
            Rafael Calzada
          </h1>
          <div className="mb-8">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mx-auto mb-6 bg-gradient-to-br from-primary to-primary/60 border-4 border-border overflow-hidden shadow-2xl">
              {/* Aquí irá tu foto cuando la subas */}
              <img 
                src="/profile-photo.jpg" 
                alt="Rafael Calzada" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Si la imagen no carga, mostramos las iniciales
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-white text-4xl md:text-5xl lg:text-6xl font-bold">RC</span></div>';
                  }
                }}
              />
            </div>
          </div>
          <p className="mb-8 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button 
              className="px-8 py-3 md:px-10 md:py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-base md:text-lg font-medium"
              onClick={() => onSectionClick('proyectos')}
            >
              {t.viewProjects}
            </button>
            <button 
              className="px-8 py-3 md:px-10 md:py-4 border border-border rounded-md hover:bg-accent transition-colors text-base md:text-lg font-medium text-foreground"
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
            className="inline-flex items-center text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="w-5 h-5 md:w-6 md:h-6 mr-2 animate-bounce" />
            {t.moreInfo}
          </button>
        </div>
      </div>
    </section>
  );
};

