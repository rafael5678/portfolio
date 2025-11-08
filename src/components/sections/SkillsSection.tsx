'use client';

import { Skills } from '@/types';
import { skills } from '@/data/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export const SkillsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].skillsSection;

  return (
    <section id="habilidades" className="py-16 bg-secondary/30">
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
            <h3 className="mb-8 text-center text-xl md:text-2xl lg:text-3xl text-foreground font-medium">{t.backend}</h3>
            <div className="space-y-5">
              {skills.backend.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="mb-8 text-center text-xl md:text-2xl lg:text-3xl text-foreground font-medium">{t.frontend}</h3>
            <div className="space-y-5">
              {skills.frontend.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: { name: string; icon: string };
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-5 md:p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center space-x-4">
        <span className="text-3xl md:text-4xl">{skill.icon}</span>
        <span className="text-lg md:text-xl font-medium text-foreground">{skill.name}</span>
      </div>
    </div>
  );
};

