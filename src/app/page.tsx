"use client";

import { Header } from '@/components/Header';
import { 
  HeroSection, 
  CVSection, 
  AboutSection, 
  ProjectsSection, 
  TestimonialsSection, 
  ExperienceSection, 
  SkillsSection, 
  ServicesSection, 
  GitHubStatsSection,
  AchievementsSection,
  ContactSection, 
  Footer 
} from '@/components/sections';
import { useActiveSection } from '@/hooks/useActiveSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function Portfolio() {
  const { handleSectionClick } = useActiveSection();

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <HeroSection onSectionClick={handleSectionClick} />
          <CVSection />
          <AboutSection />
          <ProjectsSection />
          <TestimonialsSection />
          <ExperienceSection />
          <SkillsSection />
          <ServicesSection />
          <GitHubStatsSection />
          <AchievementsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}