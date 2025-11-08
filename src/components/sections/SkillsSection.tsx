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
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[95%] lg:max-w-[90%] xl:max-w-[1600px]">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 mb-3 text-xs border border-border rounded-full text-foreground">
            {t.badge}
          </div>
          <h2 className="mb-4 text-2xl md:text-3xl font-medium text-foreground">
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-xs">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="mb-6 text-center text-lg text-foreground">{t.backend}</h3>
            <div className="space-y-4">
              {skills.backend.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="mb-6 text-center text-lg text-foreground">{t.frontend}</h3>
            <div className="space-y-4">
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
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center space-x-3">
        <span className="text-2xl">{skill.icon}</span>
        <span className="font-medium text-foreground">{skill.name}</span>
      </div>
    </div>
  );
};

