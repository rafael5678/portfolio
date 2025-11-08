'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

// Valor por defecto para evitar errores de SSR
const defaultValue: LanguageContextType = {
  language: 'es',
  setLanguage: () => {},
  toggleLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultValue);

// Función para obtener el idioma inicial - Siempre español por defecto
const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'es'; // Servidor siempre español
  
  // Siempre retornar español por defecto al cargar
  // El usuario puede cambiar después si lo desea
  return 'es'; // Español por defecto siempre
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Siempre iniciar en español al montar
    setMounted(true);
    const initialLang = getInitialLanguage();
    setLanguageState(initialLang);
    
    // Limpiar cualquier idioma guardado anteriormente para forzar español
    // Si el usuario quiere cambiar, lo guardará después
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-language');
      // Si hay un idioma guardado diferente a 'es', lo eliminamos para forzar el default
      if (saved && saved !== 'es') {
        localStorage.removeItem('portfolio-language');
      }
    }
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

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};

 