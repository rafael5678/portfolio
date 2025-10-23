import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<string>('light');
  const [isMounted, setIsMounted] = useState(false);

  // Cargar el tema desde localStorage al montar el componente
  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    applyThemeToDocument(savedTheme);
  }, []);

  const applyThemeToDocument = (newTheme: string) => {
    const root = document.documentElement;
    
    // Limpiar todas las clases de tema
    root.classList.remove('dark', 'theme-blue', 'theme-green', 'theme-purple');
    
    // Aplicar el nuevo tema
    switch(newTheme) {
      case 'dark':
        root.classList.add('dark');
        break;
      case 'blue':
        root.classList.add('theme-blue');
        break;
      case 'green':
        root.classList.add('theme-green');
        break;
      case 'purple':
        root.classList.add('theme-purple');
        break;
      default:
        // Tema claro no necesita clase adicional
        break;
    }
  };

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyThemeToDocument(newTheme);
  };

  return { theme, toggleTheme, isMounted };
};
