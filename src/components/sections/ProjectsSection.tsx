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
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[90%] xl:max-w-[1600px]">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base border border-border rounded-full mb-3 sm:mb-4 text-foreground">
            {t.badge}
          </div>
          <h2 className="mb-4 sm:mb-5 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-xl sm:max-w-2xl md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10 max-w-5xl sm:max-w-6xl md:max-w-7xl lg:max-w-[1600px] mx-auto items-start">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-base md:text-lg mb-6 text-foreground">{t.moreProjects}</p>
          <button 
            className="px-8 py-3 md:px-10 md:py-4 border border-border rounded-md hover:bg-accent transition-colors text-base md:text-lg inline-flex items-center text-foreground"
            onClick={() => window.open('https://github.com/rafael5678?tab=repositories', '_blank')}
          >
            <Github className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            {t.viewOnGithub}
          </button>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const translatedProject = t.items[index] || project;
  
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
      {/* Imagen del proyecto */}
      {project.image && (
        <div className="w-full h-48 md:h-56 lg:h-64 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden flex-shrink-0">
            <img 
            src={project.image} 
            alt={translatedProject.title}
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
      
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="pb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2.5 md:p-3 border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-md text-foreground">
              <Code className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex space-x-2">
              <span className={`inline-flex items-center px-2.5 py-1.5 text-xs md:text-sm font-medium rounded-full ${
                index === 0 || index === 1 || index === 2 // Todos los proyectos están completados
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground"
              }`}>
                {t.completed}
              </span>
              <span className="inline-flex items-center px-2.5 py-1.5 text-xs md:text-sm font-medium rounded-full border border-border text-foreground">
                {index === 0 ? t.academic : t.personal}
              </span>
            </div>
          </div>
          <h3 className="text-base md:text-lg lg:text-xl mb-3 font-medium text-foreground">{translatedProject.title}</h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
            {translatedProject.description}
          </p>
        </div>
        
        <div className="space-y-4 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span key={techIndex} className="inline-flex items-center px-2.5 py-1.5 text-xs md:text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-2">
            {project.repoUrl && (
              <button 
                className="px-6 py-2.5 md:px-8 md:py-3 border border-border rounded-md hover:bg-accent transition-colors font-medium text-sm md:text-base flex-1 inline-flex items-center justify-center text-foreground"
                onClick={() => window.open(project.repoUrl, '_blank')}
              >
                <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {t.code}
              </button>
            )}
            {project.demoUrl && (
              <button 
                className="px-6 py-2.5 md:px-8 md:py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium text-sm md:text-base flex-1 inline-flex items-center justify-center"
                onClick={() => window.open(project.demoUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2" />
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

