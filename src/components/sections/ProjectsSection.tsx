import { Code, Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import { projects } from '@/data/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export const ProjectsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section id="proyectos" className="py-16 bg-secondary/30">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 text-xs border border-border rounded-full mb-3 text-foreground">
            {t.badge}
          </div>
          <h2 className="mb-4 text-2xl md:text-3xl font-medium text-foreground">
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-xs">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm mb-4 text-foreground">{t.moreProjects}</p>
          <button 
            className="px-6 py-2 border border-border rounded-md hover:bg-accent transition-colors text-sm inline-flex items-center text-foreground"
            onClick={() => window.open('https://github.com/rafael5678?tab=repositories', '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            {t.viewOnGithub}
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
  const { language } = useLanguage();
  const t = translations[language].projects;
  
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
      {/* Imagen del proyecto */}
      {project.image && (
        <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden flex-shrink-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Si la imagen falla, mostrar un placeholder
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = '<div class="w-full h-full flex items-center justify-center"><div class="p-2 border border-border bg-background rounded-md"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div></div>';
              }
            }}
          />
        </div>
      )}
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="pb-3">
          <div className="flex items-start justify-between mb-2">
            <div className="p-2 border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-md text-foreground">
              <Code className="w-4 h-4" />
            </div>
            <div className="flex space-x-1">
              <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                project.status === "Completado" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground"
              }`}>
                {project.status === "Completado" ? t.completed : t.inProgress}
              </span>
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border border-border text-foreground">
                {project.type === "Académico" ? t.academic : t.personal}
              </span>
            </div>
          </div>
          <h3 className="text-sm mb-2 font-medium text-foreground">{project.title}</h3>
          <p className="text-xs text-muted-foreground mb-3">
            {project.description}
          </p>
        </div>
        
        <div className="space-y-3 mt-auto">
          <div className="flex flex-wrap gap-1">
            {project.tech.map((tech, techIndex) => (
              <span key={techIndex} className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-2">
            {project.repoUrl && (
              <button 
                className="px-6 py-2 border border-border rounded-md hover:bg-accent transition-colors font-medium text-xs flex-1 inline-flex items-center justify-center text-foreground"
                onClick={() => window.open(project.repoUrl, '_blank')}
              >
                <Github className="w-3 h-3 mr-1" />
                {t.code}
              </button>
            )}
            {project.demoUrl && (
              <button 
                className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium text-xs flex-1 inline-flex items-center justify-center"
                onClick={() => window.open(project.demoUrl, '_blank')}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                {t.demo}
              </button>
            )}
            {!project.repoUrl && !project.demoUrl && (
              <>
                <button 
                  className="px-6 py-2 border border-border rounded-md hover:bg-accent transition-colors font-medium text-xs flex-1 inline-flex items-center justify-center text-foreground"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Github className="w-3 h-3 mr-1" />
                  {t.code}
                </button>
                <button 
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium text-xs flex-1 inline-flex items-center justify-center"
                  onClick={() => window.open('#', '_blank')}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  {t.demo}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
