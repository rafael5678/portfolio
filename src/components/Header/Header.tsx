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
      <nav className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 max-w-7xl w-full">
        <div className="flex items-center justify-between w-full gap-2">
          {/* Name - Responsive */}
          <div className="font-medium text-xs sm:text-sm md:text-base truncate flex-shrink min-w-0">
            <span className="hidden lg:inline">Juan Rafael Calzada González</span>
            <span className="hidden md:inline lg:hidden">Juan Rafael C. G.</span>
            <span className="hidden sm:inline md:hidden">J. R. Calzada</span>
            <span className="sm:hidden">J. R. C. G.</span>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile/tablet, shown on lg+ */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-6 flex-1 justify-center mx-4 overflow-hidden">
            <div className="flex items-center space-x-3 xl:space-x-6 flex-wrap justify-center">
              <Navigation 
                menuItems={localizedMenu}
                activeSection={activeSection}
                onSectionClick={handleMenuClick}
              />
            </div>
          </div>

          {/* Theme & Language Selectors - Desktop */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
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

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors flex-shrink-0"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border w-full">
            <div className="flex flex-col space-y-3 w-full">
              <Navigation 
                menuItems={localizedMenu}
                activeSection={activeSection}
                onSectionClick={handleMenuClick}
                isMobile={true}
              />
              <div className="flex flex-col space-y-2 pt-3 border-t border-border">
                <LanguageSelector 
                  currentLanguage={language}
                  onLanguageChange={toggleLanguage}
                  isMobile={true}
                />
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground">
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
