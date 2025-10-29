'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';
import { Trophy, Star, Target, Award, TrendingUp, Users } from 'lucide-react';

export const AchievementsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].achievements;

  const achievements = [
    {
      icon: <Trophy className="w-5 h-5" />,
      title: t.achievement1Title,
      description: t.achievement1Desc,
      color: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400",
      borderColor: "border-yellow-200 dark:border-yellow-800"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: t.achievement2Title,
      description: t.achievement2Desc,
      color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: t.achievement3Title,
      description: t.achievement3Desc,
      color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: t.achievement4Title,
      description: t.achievement4Desc,
      color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: t.achievement5Title,
      description: t.achievement5Desc,
      color: "bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400",
      borderColor: "border-pink-200 dark:border-pink-800"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: t.achievement6Title,
      description: t.achievement6Desc,
      color: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
      borderColor: "border-orange-200 dark:border-orange-800"
    }
  ];

  const goals = [
    { text: t.goal1, icon: "🎯" },
    { text: t.goal2, icon: "🚀" },
    { text: t.goal3, icon: "💼" }
  ];

  return (
    <section id="logros" className="py-16 bg-secondary/30">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-12">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`bg-card border-2 ${achievement.borderColor} rounded-lg p-5 md:p-6 hover:shadow-lg transition-all hover:-translate-y-1`}
            >
              <div className={`inline-flex p-3 rounded-lg ${achievement.color} mb-4`}>
                {achievement.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold mb-2 text-foreground">
                {achievement.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Highlights */}
        <div className="bg-card border border-border rounded-lg p-6 md:p-8 max-w-4xl mx-auto mb-12">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-center text-foreground">
            {t.highlights}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t.stat1}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">98%</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t.stat2}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">6+</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t.stat3}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">2</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t.stat4}</div>
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-border rounded-lg p-6 md:p-8">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                {t.nextGoals}
              </h3>
            </div>
            
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:bg-card transition-colors"
                >
                  <span className="text-2xl">{goal.icon}</span>
                  <p className="text-sm text-foreground flex-1 pt-1">
                    {goal.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground italic">
                {t.motivation}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            {t.cta}
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contacto');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm md:text-base"
          >
            {t.ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
};

