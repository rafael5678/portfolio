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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10 max-w-5xl sm:max-w-6xl md:max-w-7xl lg:max-w-[1600px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid grid-cols-3 gap-6 lg:gap-8 max-w-lg lg:max-w-xl mx-auto">
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl mb-2 font-bold text-foreground">100%</div>
              <div className="text-sm md:text-base text-muted-foreground">{t.satisfactionRate}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl mb-2 font-bold text-foreground">3+</div>
              <div className="text-sm md:text-base text-muted-foreground">{t.completedProjects}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl mb-2 font-bold text-foreground">2</div>
              <div className="text-sm md:text-base text-muted-foreground">{language === 'es' ? 'Años' : 'Years'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;
  const translatedTestimonial = t.items[index] || testimonial;
  
  return (
    <div className="bg-card border border-border rounded-lg p-5 md:p-6 flex flex-col h-full">
      <div className="flex items-center space-x-1 mb-5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <p className="text-base md:text-lg text-muted-foreground italic mb-5 flex-grow leading-relaxed">
        "{translatedTestimonial.content}"
      </p>
      
      <div className="flex items-center space-x-4 mt-auto">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0">
          {translatedTestimonial.initials}
        </div>
        <div className="min-w-0">
          <div className="text-base md:text-lg font-semibold text-foreground truncate">{translatedTestimonial.name}</div>
          <div className="text-sm md:text-base text-muted-foreground truncate">
            {translatedTestimonial.role}
          </div>
          <div className="text-sm md:text-base text-muted-foreground truncate">
            {translatedTestimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
};

