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

export default function Portfolio() {
  const { handleSectionClick } = useActiveSection();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-12 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24">
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
  );
}