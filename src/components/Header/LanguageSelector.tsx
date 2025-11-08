'use client';

import { Languages } from 'lucide-react';
import { Language } from '@/contexts/LanguageContext';

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
        flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-md 
        border border-border hover:bg-accent transition-all text-foreground flex-shrink-0
        ${isMobile ? 'justify-center min-w-[80px]' : ''}
      `}
      title={currentLanguage === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
    >
      <Languages className={`${isMobile ? 'w-4 h-4' : 'w-4 h-4 2xl:w-5 2xl:h-5'} text-foreground`} />
      <span className={`${isMobile ? 'text-sm' : 'text-sm 2xl:text-base'} font-semibold uppercase text-foreground`}>
        {currentLanguage === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  );
};

