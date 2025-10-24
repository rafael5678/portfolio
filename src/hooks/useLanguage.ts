'use client';

import { useState, useEffect } from 'react';

export type Language = 'es' | 'en';

export const useLanguage = () => {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    // Cargar idioma guardado
    const saved = localStorage.getItem('portfolio-language');
    if (saved === 'es' || saved === 'en') {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  };

  return { language, setLanguage, toggleLanguage };
};

