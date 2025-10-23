import { Mail, MapPin, GraduationCap, Calendar } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-16 bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 text-xs border border-border rounded-full mb-3">
            Sobre Mí
          </div>
          <h2 className="mb-4 text-2xl md:text-3xl font-medium">
            Conoce más sobre mí
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-xs">
            Estudiante apasionado por el desarrollo de software y la tecnología.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="mb-4 text-lg text-foreground">Mi Historia</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Soy Juan Rafael Calzada González, estudiante de Ingeniería de Software 
                en la Universidad Cooperativa con 2 años de experiencia académica.
              </p>
              <p>
                Me especializo en desarrollo backend utilizando Python y Java, 
                con conocimientos complementarios en frontend usando JavaScript, 
                TypeScript y React/Next.js.
              </p>
              <p>
                He completado exitosamente 3 proyectos académicos que me han 
                permitido aplicar mis conocimientos en tecnologías como C#, C++ 
                y diversas herramientas de desarrollo.
              </p>
              <p>
                Mi objetivo es seguir creciendo como desarrollador y contribuir 
                a proyectos innovadores que generen un impacto positivo.
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg text-foreground">Información Personal</h3>
                <div className="space-y-3">
                  <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 border border-border rounded-md">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-sm text-foreground">juanrafaelcalzada1087@gmail.com</div>
                  </div>
                </div>
              </div>
              
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 border border-border rounded-md">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Ubicación</div>
                        <div className="text-sm text-foreground">Colombia</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 border border-border rounded-md">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Universidad</div>
                        <div className="text-sm text-foreground">Universidad Cooperativa</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 border border-border rounded-md">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Experiencia</div>
                        <div className="text-sm text-foreground">2 años académicos</div>
                      </div>
                    </div>
                  </div>
            </div>

            <div className="mt-6 bg-accent/50 border border-border rounded-lg p-4">
              <h4 className="mb-2 text-sm font-medium text-foreground">Estado Actual</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Estudiante activo buscando oportunidades de aprendizaje y crecimiento profesional.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Estudiante</span>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Backend</span>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Frontend</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
