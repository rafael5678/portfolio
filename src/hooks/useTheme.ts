import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<string>('light');
  const [isMounted, setIsMounted] = useState(false);

  // Siempre iniciar con tema claro (blanco) por defecto, ignorando localStorage
  useEffect(() => {
    setIsMounted(true);
    // Forzar tema claro (blanco) al cargar, pero permitir cambios después
    const defaultTheme = 'light';
    setTheme(defaultTheme);
    applyThemeToDocument(defaultTheme);
    
    // Limpiar cualquier tema guardado anteriormente para forzar el default
    // Si el usuario quiere cambiar, lo guardará después
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // Si hay un tema guardado diferente a 'light', lo eliminamos para forzar el default
      if (savedTheme && savedTheme !== 'light') {
        localStorage.removeItem('theme');
      }
    }
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
