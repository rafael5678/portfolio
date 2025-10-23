import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroSectionProps {
  onSectionClick: (sectionId: string) => void;
}

export const HeroSection = ({ onSectionClick }: HeroSectionProps) => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 text-xs border border-border rounded-full mb-4">
            Ingeniero de Software
          </div>
          <h1 className="mb-4 text-3xl md:text-5xl text-foreground font-medium">
            Juan Rafael Calzada González
          </h1>
          <div className="mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 bg-gradient-to-br from-primary to-primary/60 border-2 border-border flex items-center justify-center">
              <span className="text-white text-3xl md:text-4xl font-bold">JRC</span>
            </div>
          </div>
          <p className="mb-6 text-xs text-muted-foreground max-w-2xl mx-auto">
            Ingeniero de Software con 2 años de experiencia académica en la Universidad Cooperativa. 
            Especializado en desarrollo backend con conocimientos en frontend. 
            He completado 3 proyectos utilizando Python, Java, JavaScript, TypeScript, C# y C++.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <button 
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
              onClick={() => onSectionClick('proyectos')}
            >
              Ver Proyectos
            </button>
            <button 
              className="px-6 py-2 border border-border rounded-md hover:bg-accent transition-colors text-sm font-medium"
              onClick={() => onSectionClick('contacto')}
            >
              Contacto
            </button>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <a 
              href="https://github.com/rafael5678/portfolio.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-border hover:bg-accent transition-colors rounded-md"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/juan-rafael-calzada-65566a387" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-border hover:bg-accent transition-colors rounded-md"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/573103602816" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-border hover:bg-accent transition-colors rounded-md"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <button
            onClick={() => onSectionClick('cv')}
            className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="w-4 h-4 mr-1 animate-bounce" />
            Más información
          </button>
        </div>
      </div>
    </section>
  );
};
