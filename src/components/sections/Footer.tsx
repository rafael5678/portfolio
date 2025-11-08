import { Github, Linkedin, Instagram } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1200px]">
        <div className="text-center space-y-4">
          <div>
            <h3 className="text-xl md:text-2xl mb-2 font-medium text-foreground">Rafael Calzada</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Ingeniero de Software | Desarrollador Backend & Frontend
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <SocialLink
              href="https://github.com/rafael5678/portfolio.git"
              icon={<Github className="w-4 h-4" />}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/juan-rafael-calzada-65566a387"
              icon={<Linkedin className="w-4 h-4" />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://www.instagram.com/rafael108778"
              icon={<Instagram className="w-4 h-4" />}
              label="Instagram"
            />
            <SocialLink
              href="https://wa.me/573103602816"
              icon={<WhatsAppIcon className="w-4 h-4" />}
              label="WhatsApp"
            />
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-sm md:text-base text-muted-foreground">
              © 2025 Rafael Calzada. Todos los derechos reservados.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Desarrollado con React, TypeScript y Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 border border-border hover:bg-accent transition-colors rounded-md"
    aria-label={label}
  >
    {icon}
  </a>
);

