'use client';

import { Languages } from 'lucide-react';
import { Language } from '@/hooks/useLanguage';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: () => void;
  isMobile?: boolean;
}

export const LanguageSelector = ({ 
  currentLanguage, 
  onLanguageChange,
  isMobile 
}: LanguageSelectorProps) => {
  return (
    <button
      onClick={onLanguageChange}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-md 
        hover:bg-accent transition-colors
        ${isMobile ? 'w-full justify-start' : ''}
      `}
      title={currentLanguage === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm font-medium uppercase">
        {currentLanguage === 'es' ? 'ES' : 'EN'}
      </span>
      <span className="text-xs text-muted-foreground">
        {currentLanguage === 'es' ? '→ EN' : '→ ES'}
      </span>
    </button>
  );
};

