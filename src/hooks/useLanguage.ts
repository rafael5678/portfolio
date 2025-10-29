'use client';

import { useState, useEffect } from 'react';

export type Language = 'es' | 'en';

// Función para obtener el idioma inicial
const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'es'; // Servidor siempre español
  
  const saved = localStorage.getItem('portfolio-language');
  if (saved === 'es' || saved === 'en') {
    return saved;
  }
  return 'es'; // Español por defecto
};

export const useLanguage = () => {
  const [language, setLanguageState] = useState<Language>('es');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marcar como cliente y cargar idioma guardado
    setIsClient(true);
    const initialLang = getInitialLanguage();
    setLanguageState(initialLang);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-language', lang);
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  };

  return { language, setLanguage, toggleLanguage, isClient };
};

