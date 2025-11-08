import { Theme } from '@/types';

interface ThemeSelectorProps {
  themes: Theme[];
  currentTheme: string;
  onThemeChange: (theme: string) => void;
  isMobile?: boolean;
}

export const ThemeSelector = ({ 
  themes, 
  currentTheme, 
  onThemeChange, 
  isMobile = false 
}: ThemeSelectorProps) => {
  const themeOptions = [
    { id: 'light', name: 'Claro', class: '' },
    { id: 'dark', name: 'Oscuro', class: 'dark' },
    { id: 'blue', name: 'Azul', class: 'theme-blue' },
    { id: 'green', name: 'Verde', class: 'theme-green' },
    { id: 'purple', name: 'Púrpura', class: 'theme-purple' }
  ];

  const buttonSize = isMobile ? "w-6 h-6" : "w-5 h-5 2xl:w-6 2xl:h-6";
  const borderClass = isMobile ? "border-2" : "border";
  const gapClass = isMobile ? "gap-2" : "gap-1.5 2xl:gap-2";

  return (
    <div className={`flex items-center ${gapClass}`}>
      {themeOptions.map((themeOption) => (
        <button
          key={themeOption.id}
          onClick={() => onThemeChange(themeOption.id)}
          className={`${buttonSize} rounded-full ${borderClass} transition-all ${
            currentTheme === themeOption.id ? 'border-primary scale-110' : 'border-border'
          } ${
            themeOption.id === 'light' ? 'bg-white' :
            themeOption.id === 'dark' ? 'bg-gray-800' :
            themeOption.id === 'blue' ? 'bg-blue-500' :
            themeOption.id === 'green' ? 'bg-green-500' :
            'bg-purple-500'
          } hover:scale-110`}
          title={themeOption.name}
        />
      ))}
    </div>
  );
};
