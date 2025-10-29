'use client';

import { Star } from 'lucide-react';
import { Testimonial } from '@/types';
import { testimonials } from '@/data/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export const TestimonialsSection = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  return (
    <section id="testimonios" className="py-16 bg-background">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">100%</div>
              <div className="text-xs text-muted-foreground">{t.satisfactionRate}</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">3+</div>
              <div className="text-xs text-muted-foreground">{t.completedProjects}</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">2</div>
              <div className="text-xs text-muted-foreground">{language === 'es' ? 'Años' : 'Years'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 flex flex-col h-full">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <p className="text-sm text-muted-foreground italic mb-4 flex-grow">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center space-x-3 mt-auto">
        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
          {testimonial.initials}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-foreground truncate">{testimonial.name}</div>
          <div className="text-xs text-muted-foreground truncate">
            {testimonial.role}
          </div>
          <div className="text-xs text-muted-foreground truncate">
            {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
};
