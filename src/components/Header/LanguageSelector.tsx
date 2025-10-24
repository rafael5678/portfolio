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
        flex items-center gap-1.5 px-2 py-1.5 rounded-md 
        border border-border hover:bg-accent transition-all
        ${isMobile ? 'w-full justify-start' : ''}
      `}
      title={currentLanguage === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
    >
      <Languages className="w-3.5 h-3.5" />
      <span className="text-xs font-semibold uppercase">
        {currentLanguage === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  );
};

