'use client';

import { GraduationCap, Code } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export const ExperienceSection = () => {
  const { language } = useLanguage();
  const t = translations[language].experienceSection;

  return (
    <section id="experiencia" className="py-16 bg-secondary/30">
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

        <div className="max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
          <div className="space-y-6">
            <ExperienceCard
              icon={<GraduationCap className="w-5 h-5" />}
              title={t.education.title}
              period={t.education.period}
              company={t.education.company}
              description={t.education.description}
              achievements={[
                t.education.achievement1,
                t.education.achievement2,
                t.education.achievement3
              ]}
            />

            <ExperienceCard
              icon={<Code className="w-5 h-5" />}
              title={t.work.title}
              period={t.work.period}
              company={t.work.company}
              description={t.work.description}
              achievements={[
                t.work.achievement1,
                t.work.achievement2,
                t.work.achievement3
              ]}
            />
          {t.logistics && (
            <ExperienceCard
              icon={<Code className="w-5 h-5" />}
              title={t.logistics.title}
              period={t.logistics.period}
              company={t.logistics.company}
              description={t.logistics.description}
              achievements={[
                t.logistics.achievement1,
                t.logistics.achievement2,
                t.logistics.achievement3
              ]}
            />
          )}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-xl lg:max-w-2xl mx-auto">
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl mb-2 font-bold text-foreground">2+</div>
              <div className="text-sm md:text-base text-muted-foreground">{language === 'es' ? 'Años' : 'Years'}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl mb-2 font-bold text-foreground">5+</div>
              <div className="text-sm md:text-base text-muted-foreground">{language === 'es' ? 'Tecnologías' : 'Technologies'}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl mb-2 font-bold text-foreground">3</div>
              <div className="text-sm md:text-base text-muted-foreground">{language === 'es' ? 'Proyectos' : 'Projects'}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl mb-2 font-bold text-foreground">1</div>
              <div className="text-sm md:text-base text-muted-foreground">{language === 'es' ? 'Universidad' : 'University'}</div>
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
  const { language } = useLanguage();
  
  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8">
      <div className="flex items-start space-x-5 mb-5">
        <div className="p-4 border border-border bg-background rounded-md text-foreground">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-xl md:text-2xl font-medium text-foreground">{title}</h3>
            <div className="text-sm md:text-base border border-border rounded-full px-3 py-1.5 w-fit text-foreground">
              {period}
            </div>
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-2">
            {company}
          </p>
        </div>
      </div>
      
      <div>
        <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
          {description}
        </p>
        
        <div>
          <h4 className="text-base md:text-lg mb-3 font-medium text-foreground">
            {language === 'es' ? 'Logros destacados:' : 'Key achievements:'}
          </h4>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center text-sm md:text-base text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

