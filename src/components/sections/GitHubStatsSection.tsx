'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Activity, GitBranch, GitCommit, Star, Users } from 'lucide-react';

export const GitHubStatsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].githubStats;

  // Handler para abrir los repositorios de contribuciones
  const openContributions = () => {
    window.open('https://github.com/Nicolas-12000/NotaNova', '_blank');
    window.open('https://github.com/Juan-Camilo-Martinez-B/AntivirusFinal', '_blank');
  };

  const stats = [
    {
      icon: <GitCommit className="w-5 h-5" />,
      value: "127",
      label: t.commits,
      color: "text-green-500",
      link: "https://github.com/rafael5678"
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      value: "15",
      label: t.repositories,
      color: "text-blue-500",
      link: "https://github.com/rafael5678?tab=repositories"
    },
    {
      icon: <Activity className="w-5 h-5" />,
      value: "3",
      label: t.projects,
      color: "text-purple-500"
    },
    {
      icon: <Star className="w-5 h-5" />,
      value: "2",
      label: t.contributions,
      color: "text-yellow-500",
      onClick: openContributions
    }
  ];

  const languages = [
    { name: "TypeScript", icon: "🔷", link: "https://www.typescriptlang.org/" },
    { name: "JavaScript", icon: "🟨", link: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
    { name: "Python", icon: "🐍", link: "https://www.python.org/" },
    { name: "Java", icon: "☕", link: "https://www.java.com/" },
    { name: "CSS", icon: "🎨", link: "https://developer.mozilla.org/es/docs/Web/CSS" }
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
          {stats.map((stat, index) => {
            const StatCard = (
              <div 
                className={`bg-card border border-border rounded-lg p-4 md:p-6 hover:shadow-lg transition-all hover:-translate-y-1 ${stat.onClick || stat.link ? 'cursor-pointer' : ''}`}
                onClick={stat.onClick}
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
            );

            // Si tiene onClick, usar div con el handler
            if (stat.onClick) {
              return <div key={index}>{StatCard}</div>;
            }

            // Si tiene link, usar anchor
            return stat.link ? (
              <a
                key={index}
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {StatCard}
              </a>
            ) : (
              <div key={index}>
                {StatCard}
              </div>
            );
          })}
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

            {/* Technologies Grid */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-foreground">{t.languages}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {languages.map((lang, index) => (
                  <a
                    key={index}
                    href={lang.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all hover:-translate-y-1 block cursor-pointer"
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-2xl">{lang.icon}</span>
                      <span className="text-sm font-medium text-foreground">{lang.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Collaboration Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* NotaNova Project */}
            <a
              href="https://github.com/Nicolas-12000/NotaNova"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1 block"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 mr-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-medium text-foreground">NotaNova</h4>
                </div>
                <GitCommit className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                {t.collaboration1Desc}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    Python
                  </span>
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    Django
                  </span>
                </div>
                <span className="text-xs font-medium text-muted-foreground">2 {t.commitsLabel}</span>
              </div>
            </a>

            {/* Antivirus Project */}
            <a
              href="https://github.com/Juan-Camilo-Martinez-B/AntivirusFinal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1 block"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 mr-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-medium text-foreground">Antivirus</h4>
                </div>
                <GitCommit className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                {t.collaboration2Desc}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    Java
                  </span>
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    TypeScript
                  </span>
                </div>
                <span className="text-xs font-medium text-muted-foreground">33 {t.commitsLabel}</span>
              </div>
            </a>
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

