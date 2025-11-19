import { Theme } from '@/types';
import { cn } from '@/utils';

interface ThemeSelectorProps {
  themes: Theme[];
  currentTheme: string;
  onThemeChange: (theme: string) => void;
  isMobile?: boolean;
}

const themeColors: Record<string, string> = {
  light: 'bg-white',
  dark: 'bg-gray-800',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-purple-500'
};

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

  return (
    <div className={cn(
      "flex items-center",
      isMobile ? "gap-2" : "gap-1.5 2xl:gap-2"
    )}>
      {themeOptions.map((themeOption) => (
        <button
          key={themeOption.id}
          onClick={() => onThemeChange(themeOption.id)}
          className={cn(
            "rounded-full transition-all hover:scale-110",
            isMobile ? "w-6 h-6 border-2" : "w-5 h-5 2xl:w-6 2xl:h-6 border",
            currentTheme === themeOption.id 
              ? 'border-primary scale-110' 
              : 'border-border',
            themeColors[themeOption.id] || themeColors.purple
          )}
          title={themeOption.name}
        />
      ))}
    </div>
  );
};
