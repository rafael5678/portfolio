import { MenuItem } from '@/types';

interface NavigationProps {
  menuItems: MenuItem[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  isMobile?: boolean;
}

export const Navigation = ({ 
  menuItems, 
  activeSection, 
  onSectionClick, 
  isMobile = false 
}: NavigationProps) => {
  const baseClasses = isMobile 
    ? "text-left text-sm transition-colors hover:text-primary"
    : "text-sm transition-colors hover:text-primary";

  const activeClasses = "text-primary";
  const inactiveClasses = "text-muted-foreground";

  return (
    <>
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionClick(item.id)}
          className={`${baseClasses} ${
            activeSection === item.id ? activeClasses : inactiveClasses
          }`}
        >
          {item.label}
        </button>
      ))}
    </>
  );
};
