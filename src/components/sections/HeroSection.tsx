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
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 sm:py-14 md:py-16 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1200px]">
        <div className="text-center max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base border border-border rounded-full mb-4 sm:mb-5 md:mb-6 text-foreground">
            {t.badge}
          </div>
          <h1 className="mb-4 sm:mb-5 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground font-medium">
            Rafael Calzada
          </h1>
          <div className="mb-6 sm:mb-7 md:mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full mx-auto mb-4 sm:mb-5 md:mb-6 bg-gradient-to-br from-primary to-primary/60 border-4 border-border overflow-hidden shadow-2xl">
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
          <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-9 md:mb-10">
            <button 
              className="px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm sm:text-base md:text-lg font-medium"
              onClick={() => onSectionClick('proyectos')}
            >
              {t.viewProjects}
            </button>
            <button 
              className="px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4 border border-border rounded-md hover:bg-accent transition-colors text-sm sm:text-base md:text-lg font-medium text-foreground"
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

