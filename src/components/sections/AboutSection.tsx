'use client';

import { Mail, MapPin, GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="sobre-mi" className="py-16 bg-background">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1200px]">
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

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto">
          <div>
            <h3 className="mb-6 text-xl md:text-2xl lg:text-3xl text-foreground font-medium">{t.myStory}</h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>{t.story1}</p>
              <p>{t.story2}</p>
              <p>{t.story3}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl md:text-2xl lg:text-3xl text-foreground font-medium">{t.personalInfo}</h3>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-5 md:p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 border border-border rounded-md text-foreground flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm md:text-base text-muted-foreground font-medium mb-1">Email</div>
                    <div className="text-base md:text-lg text-foreground break-words overflow-wrap-anywhere">juanrafaelcalzada1087@gmail.com</div>
                  </div>
                </div>
              </div>
              
                  <div className="bg-card border border-border rounded-lg p-5 md:p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 border border-border rounded-md text-foreground flex-shrink-0">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm md:text-base text-muted-foreground font-medium mb-1">{language === 'es' ? 'Ubicación' : 'Location'}</div>
                        <div className="text-base md:text-lg text-foreground break-words">{t.location}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-5 md:p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 border border-border rounded-md text-foreground flex-shrink-0">
                        <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm md:text-base text-muted-foreground font-medium mb-1">{language === 'es' ? 'Universidad' : 'University'}</div>
                        <div className="text-base md:text-lg text-foreground break-words">{t.university}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-5 md:p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 border border-border rounded-md text-foreground flex-shrink-0">
                        <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm md:text-base text-muted-foreground font-medium mb-1">{language === 'es' ? 'Experiencia' : 'Experience'}</div>
                        <div className="text-base md:text-lg text-foreground">{language === 'es' ? '2 años académicos' : '2 academic years'}</div>
                      </div>
                    </div>
                  </div>
            </div>

            <div className="mt-6 bg-accent/50 border border-border rounded-lg p-5 md:p-6">
              <h4 className="mb-3 text-base md:text-lg font-medium text-foreground">{language === 'es' ? 'Estado Actual' : 'Current Status'}</h4>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                {t.currentlyStudying}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1.5 text-sm md:text-base font-medium rounded-full bg-secondary text-secondary-foreground">{language === 'es' ? 'Estudiante' : 'Student'}</span>
                <span className="inline-flex items-center px-3 py-1.5 text-sm md:text-base font-medium rounded-full bg-secondary text-secondary-foreground">Backend</span>
                <span className="inline-flex items-center px-3 py-1.5 text-sm md:text-base font-medium rounded-full bg-secondary text-secondary-foreground">Frontend</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

