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
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[900px]">
        <div className="text-center max-w-2xl sm:max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm border border-border rounded-full mb-3 sm:mb-4 text-foreground">
            {t.badge}
          </div>
          <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground font-medium">
            Rafael Calzada
          </h1>
          <div className="mb-4 sm:mb-5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-primary to-primary/60 border-2 border-border overflow-hidden shadow-lg">
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
                    parent.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-white text-2xl sm:text-3xl md:text-4xl font-bold">RC</span></div>';
                  }
                }}
              />
            </div>
          </div>
          <p className="mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-base text-muted-foreground max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 sm:mb-7">
            <button 
              className="px-5 py-2 sm:px-6 sm:py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm sm:text-base font-medium"
              onClick={() => onSectionClick('proyectos')}
            >
              {t.viewProjects}
            </button>
            <button 
              className="px-5 py-2 sm:px-6 sm:py-2.5 border border-border rounded-md hover:bg-accent transition-colors text-sm sm:text-base font-medium text-foreground"
              onClick={() => onSectionClick('contacto')}
            >
              {t.contact}
            </button>
          </div>
          <div className="flex items-center justify-center space-x-3 mb-6">
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
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-bounce" />
            {t.moreInfo}
          </button>
        </div>
      </div>
    </section>
  );
};

