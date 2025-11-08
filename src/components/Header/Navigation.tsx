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
    ? "text-left text-base transition-colors hover:text-primary py-2 px-1 w-full text-left"
    : "text-xs lg:text-sm xl:text-base transition-colors hover:text-primary px-1 lg:px-1.5 xl:px-2 whitespace-nowrap flex-shrink-0";

  const activeClasses = "text-primary font-medium";
  const inactiveClasses = "text-muted-foreground";

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-1 w-full">
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
      </div>
    );
  }

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
