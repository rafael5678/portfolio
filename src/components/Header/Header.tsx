"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Navigation } from './Navigation';
import { ThemeSelector } from './ThemeSelector';
import { LanguageSelector } from './LanguageSelector';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';
import { useActiveSection } from '@/hooks/useActiveSection';
import { menuItems } from '@/data/constants';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { activeSection, handleSectionClick } = useActiveSection();

  const handleMenuClick = (sectionId: string) => {
    handleSectionClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }} className="bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="font-medium">Juan Rafael Calzada González</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Navigation 
              menuItems={menuItems}
              activeSection={activeSection}
              onSectionClick={handleMenuClick}
            />
          </div>

          {/* Theme & Language Selectors */}
          <div className="hidden md:flex items-center space-x-2">
            <LanguageSelector 
              currentLanguage={language}
              onLanguageChange={toggleLanguage}
            />
            <ThemeSelector 
              themes={[]} // Se pasará desde el componente padre
              currentTheme={theme}
              onThemeChange={toggleTheme}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-md"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Navigation 
                menuItems={menuItems}
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
                  <span className="text-xs text-muted-foreground">Tema:</span>
                  <ThemeSelector 
                    themes={[]} // Se pasará desde el componente padre
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
