"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Navigation } from './Navigation';
import { ThemeSelector } from './ThemeSelector';
import { LanguageSelector } from './LanguageSelector';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/contexts/LanguageContext';
import { useActiveSection } from '@/hooks/useActiveSection';
import { menuItems } from '@/data/constants';
import { translations } from '@/data/translations';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { activeSection, handleSectionClick } = useActiveSection();
  // Localizar etiquetas del menú según idioma
  const tNav = translations[language].nav;
  const localizedMenu = menuItems.map((item) => {
    const map: Record<string, string> = {
      'inicio': tNav.home,
      'cv': tNav.cv,
      'sobre-mi': tNav.about,
      'proyectos': tNav.projects,
      'testimonios': tNav.testimonials,
      'experiencia': tNav.experience,
      'habilidades': tNav.skills,
      'servicios': tNav.services,
      'estadisticas': tNav.statistics ?? tNav.projects, // fallback if key missing
      'logros': tNav.achievements ?? 'Logros',
      'contacto': tNav.contact,
    };
    return { ...item, label: map[item.id] ?? item.label };
  });

  const handleMenuClick = (sectionId: string) => {
    handleSectionClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header 
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }} 
      className="bg-background/95 backdrop-blur-md border-b border-border shadow-sm w-full"
    >
      <nav className="mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-12 py-3 sm:py-3.5 md:py-4 lg:py-5 max-w-[1920px] w-full overflow-hidden">
        <div className="flex items-center justify-between w-full gap-2 sm:gap-3 md:gap-4 lg:gap-3 overflow-hidden">
          {/* Name - Simple and short, smaller on tablet */}
          <div className="font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl flex-shrink-0 whitespace-nowrap">
            Rafael Calzada
          </div>
          
          {/* Desktop Navigation - Only shown on xl+ screens (1280px+) */}
          <div className="hidden xl:flex items-center flex-1 justify-center mx-2 2xl:mx-3 min-w-0">
            <nav className="flex items-center gap-2 2xl:gap-2.5 flex-nowrap overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <Navigation 
                menuItems={localizedMenu}
                activeSection={activeSection}
                onSectionClick={handleMenuClick}
              />
            </nav>
          </div>

          {/* Theme & Language Selectors - Desktop ONLY (xl+) */}
          <div className="hidden xl:flex items-center gap-2 2xl:gap-3 flex-shrink-0 ml-2">
            <LanguageSelector 
              currentLanguage={language}
              onLanguageChange={toggleLanguage}
            />
            <ThemeSelector 
              themes={[]}
              currentTheme={theme}
              onThemeChange={toggleTheme}
            />
          </div>

          {/* Mobile/Tablet Menu Button - Shown below xl (mobile + tablet + small desktop) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 sm:p-2.5 md:p-2.5 hover:bg-accent rounded-md transition-colors flex-shrink-0"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile/Tablet Navigation - Shown below xl (mobile + tablet + small desktop) */}
        {isMenuOpen && (
          <div className="xl:hidden mt-3 sm:mt-4 py-3 sm:py-4 border-t border-border w-full">
            <div className="flex flex-col space-y-3 sm:space-y-4 w-full">
              <Navigation 
                menuItems={localizedMenu}
                activeSection={activeSection}
                onSectionClick={handleMenuClick}
                isMobile={true}
              />
              <div className="flex flex-col space-y-3 sm:space-y-3 pt-3 sm:pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base font-medium text-foreground">
                    {language === 'es' ? 'Idioma:' : 'Language:'}
                  </span>
                  <LanguageSelector 
                    currentLanguage={language}
                    onLanguageChange={toggleLanguage}
                    isMobile={true}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base font-medium text-foreground">
                    {language === 'es' ? 'Tema:' : 'Theme:'}
                  </span>
                  <ThemeSelector 
                    themes={[]}
                    currentTheme={theme}
                    onThemeChange={toggleTheme}
                    isMobile={true}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
