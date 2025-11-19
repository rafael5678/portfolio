"use client";

import { useState, useEffect } from 'react';
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

  // Cerrar menú cuando se presiona Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Prevenir scroll del body cuando el menú está abierto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);
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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Backdrop/Overlay - Se muestra cuando el menú está abierto, cierra al hacer clic fuera */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              closeMenu();
            }
          }}
          className="backdrop-menu fixed inset-0 bg-black/40 backdrop-blur-sm z-[9997] transition-opacity duration-300 ease-in-out animate-fadeIn"
          aria-hidden="true"
          tabIndex={-1}
        />
      )}

      <header 
        className="fixed top-0 left-0 right-0 z-[9999] bg-background/95 backdrop-blur-md border-b border-border shadow-sm w-full"
      >
        <nav className="mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-3 sm:py-3.5 md:py-4 lg:py-5 max-w-[1200px] w-full overflow-hidden">
          <div className="flex items-center justify-between w-full gap-2 sm:gap-3 md:gap-4 lg:gap-3 overflow-hidden">
            {/* Name - Simple and short, responsive sizes - Click to go home */}
            <button
              onClick={() => {
                handleSectionClick('inicio');
                if (isMenuOpen) {
                  setIsMenuOpen(false);
                }
              }}
              className="font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl flex-shrink-0 whitespace-nowrap text-left text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Rafael Calzada
            </button>
            
          {/* Desktop Navigation - Only shown on screens 1400px+ */}
          <div className="desktop-nav hidden items-center flex-1 justify-center mx-2 xl:mx-3 min-w-0">
            <nav className="flex items-center gap-1.5 xl:gap-2 2xl:gap-2.5 flex-nowrap overflow-x-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none]">
              <Navigation 
                menuItems={localizedMenu}
                activeSection={activeSection}
                onSectionClick={handleMenuClick}
              />
            </nav>
          </div>

          {/* Theme & Language Selectors - Desktop ONLY (1400px+) */}
          <div className="desktop-selectors hidden items-center gap-2 xl:gap-2.5 2xl:gap-3 flex-shrink-0 ml-2">
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

          {/* Mobile/Tablet Menu Button - Shown below 1400px */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn hidden p-2 sm:p-2.5 md:p-2.5 hover:bg-accent rounded-md transition-colors flex-shrink-0 z-[10000] relative"
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

        {/* Mobile/Tablet Navigation - Shown below 1400px */}
        {isMenuOpen && (
          <div 
            className="mobile-nav-menu mt-3 sm:mt-4 py-3 sm:py-4 border-t border-border w-full bg-background relative z-[9999] animate-slide-down"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                closeMenu();
              }
            }}
          >
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
    </>
  );
};
