'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';
import { Activity, GitBranch, GitCommit, Star, Users } from 'lucide-react';

export const GitHubStatsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].githubStats;

  const stats = [
    {
      icon: <GitCommit className="w-5 h-5" />,
      value: "200+",
      label: t.commits,
      color: "text-green-500"
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      value: "13",
      label: t.repositories,
      color: "text-blue-500"
    },
    {
      icon: <Activity className="w-5 h-5" />,
      value: "3",
      label: t.projects,
      color: "text-purple-500"
    },
    {
      icon: <Star className="w-5 h-5" />,
      value: "15+",
      label: t.contributions,
      color: "text-yellow-500"
    }
  ];

  const languages = [
    { name: "TypeScript", percentage: 96, color: "bg-blue-500" },
    { name: "JavaScript", percentage: 3, color: "bg-yellow-400" },
    { name: "CSS", percentage: 1, color: "bg-pink-500" }
  ];

  return (
    <section id="estadisticas" className="py-16 bg-background">
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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-4 md:p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className={`inline-flex p-2 md:p-3 rounded-lg bg-secondary mb-3 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1 text-foreground">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Activity Card */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg md:text-xl font-medium text-foreground flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                {t.activityTitle}
              </h3>
              <a 
                href="https://github.com/rafael5678?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                {t.viewGithub} →
              </a>
            </div>

            {/* Languages Chart */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-foreground">{t.languages}</h4>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground">{lang.name}</span>
                      <span className="text-xs text-muted-foreground">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className={`${lang.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contribution Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 mr-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-medium text-foreground">{t.collaboration}</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                {t.collaborationDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                  Pull Requests
                </span>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                  Code Review
                </span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mr-3">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-medium text-foreground">{t.bestPractices}</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                {t.bestPracticesDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                  Git Flow
                </span>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                  Clean Code
                </span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-accent/50 border border-border rounded-lg p-6 md:p-8">
            <p className="text-sm md:text-base text-foreground mb-4">
              {t.viewMore}
            </p>
            <button 
              onClick={() => window.open('https://github.com/rafael5678?tab=repositories', '_blank')}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm md:text-base inline-flex items-center"
            >
              <Activity className="w-4 h-4 mr-2" />
              {t.exploreGithub}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

