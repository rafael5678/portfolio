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
  ContactSection, 
  Footer 
} from '@/components/sections';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function Portfolio() {
  const { handleSectionClick } = useActiveSection();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <HeroSection onSectionClick={handleSectionClick} />
        <CVSection />
        <AboutSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ExperienceSection />
        <SkillsSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}