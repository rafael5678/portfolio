import { GraduationCap, Code } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-16 bg-secondary/30">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 mb-3 text-xs border border-border rounded-full text-foreground">
            Experiencia
          </div>
          <h2 className="mb-4 text-2xl md:text-3xl font-medium text-foreground">
            Mi Trayectoria
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-xs">
            Educación y experiencia en desarrollo de software a lo largo de mi carrera académica.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <ExperienceCard
              icon={<GraduationCap className="w-5 h-5" />}
              title="Ingeniería de Software"
              period="2022 - Presente"
              company="Universidad Cooperativa"
              description="Estudiante de Ingeniería de Software con enfoque en desarrollo backend y frontend. Cursando materias especializadas en programación, bases de datos y arquitectura de software."
              achievements={[
                "Promedio académico destacado",
                "3 proyectos completados exitosamente",
                "Participación en equipos de desarrollo"
              ]}
            />

            <ExperienceCard
              icon={<Code className="w-5 h-5" />}
              title="Desarrollador Backend"
              period="2023 - 2024"
              company="Proyectos Académicos"
              description="Desarrollo de aplicaciones backend utilizando Python y Java. Implementación de APIs REST y manejo de bases de datos relacionales."
              achievements={[
                "API REST con Python/Flask",
                "Sistema de gestión con Java/Spring",
                "Integración con bases de datos"
              ]}
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">2+</div>
              <div className="text-xs text-muted-foreground">Años</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">6+</div>
              <div className="text-xs text-muted-foreground">Tecnologías</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">3</div>
              <div className="text-xs text-muted-foreground">Proyectos</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">1</div>
              <div className="text-xs text-muted-foreground">Universidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  period: string;
  company: string;
  description: string;
  achievements: string[];
}

const ExperienceCard = ({ 
  icon, 
  title, 
  period, 
  company, 
  description, 
  achievements 
}: ExperienceCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-start space-x-4 mb-4">
        <div className="p-3 border border-border bg-background rounded-md text-foreground">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-lg font-medium text-foreground">{title}</h3>
            <div className="text-xs border border-border rounded-full px-2 py-1 w-fit text-foreground">
              {period}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">
            {company}
          </p>
        </div>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        
        <div>
          <h4 className="text-sm mb-2 font-medium text-foreground">Logros destacados:</h4>
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center text-xs text-muted-foreground">
                <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
