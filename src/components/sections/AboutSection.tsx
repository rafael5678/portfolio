'use client';

import { Mail, MapPin, GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';

export const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="sobre-mi" className="py-16 bg-background">
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

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="mb-4 text-lg text-foreground">{t.myStory}</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>{t.story1}</p>
              <p>{t.story2}</p>
              <p>{t.story3}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg text-foreground">{t.personalInfo}</h3>
                <div className="space-y-3">
                  <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 border border-border rounded-md text-foreground">
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
                      <div className="p-2 border border-border rounded-md text-foreground">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{language === 'es' ? 'Ubicación' : 'Location'}</div>
                        <div className="text-sm text-foreground">{t.location}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 border border-border rounded-md text-foreground">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{language === 'es' ? 'Universidad' : 'University'}</div>
                        <div className="text-sm text-foreground">{t.university}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 border border-border rounded-md text-foreground">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{language === 'es' ? 'Experiencia' : 'Experience'}</div>
                        <div className="text-sm text-foreground">{language === 'es' ? '2 años académicos' : '2 academic years'}</div>
                      </div>
                    </div>
                  </div>
            </div>

            <div className="mt-6 bg-accent/50 border border-border rounded-lg p-4">
              <h4 className="mb-2 text-sm font-medium text-foreground">{language === 'es' ? 'Estado Actual' : 'Current Status'}</h4>
              <p className="text-xs text-muted-foreground mb-3">
                {t.currentlyStudying}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{language === 'es' ? 'Estudiante' : 'Student'}</span>
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
