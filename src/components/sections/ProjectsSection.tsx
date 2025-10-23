import { Code, Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import { projects } from '@/data/constants';

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-16 bg-secondary/30">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 text-xs border border-border rounded-full mb-3">
            Proyectos
          </div>
          <h2 className="mb-4 text-2xl md:text-3xl font-medium">
            Mi Trabajo
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-xs">
            Proyectos académicos y personales que demuestran mis habilidades técnicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm mb-4 text-foreground">¿Quieres ver más proyectos?</p>
          <button 
            className="px-6 py-2 border border-border rounded-md hover:bg-accent transition-colors text-sm inline-flex items-center text-foreground"
            onClick={() => window.open('https://github.com/rafael5678/portfolio.git', '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Ver todos en GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow group">
      <div className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <div className="p-2 border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-md">
            <Code className="w-4 h-4" />
          </div>
          <div className="flex space-x-1">
            <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
              project.status === "Completado" 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary text-secondary-foreground"
            }`}>
              {project.status}
            </span>
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border border-border text-foreground">
              {project.type}
            </span>
          </div>
        </div>
        <h3 className="text-sm mb-2 font-medium text-foreground">{project.title}</h3>
        <p className="text-xs text-muted-foreground">
          {project.description}
        </p>
      </div>
      
      <div className="space-y-3">
        <div className="flex flex-wrap gap-1">
          {project.tech.map((tech, techIndex) => (
            <span key={techIndex} className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <button 
            className="px-6 py-2 border border-border rounded-md hover:bg-accent transition-colors font-medium text-xs flex-1 inline-flex items-center justify-center text-foreground"
            onClick={() => window.open('#', '_blank')}
          >
            <Github className="w-3 h-3 mr-1" />
            Código
          </button>
          <button 
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium text-xs flex-1 inline-flex items-center justify-center"
            onClick={() => window.open('#', '_blank')}
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Demo
          </button>
        </div>
      </div>
    </div>
  );
};
