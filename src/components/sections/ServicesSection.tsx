   'use client';

import { Code, Database, Globe, Server } from 'lucide-react';
import { Service } from '@/types';
import { services } from '@/data/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export const ServicesSection = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const servicesData = [
    { ...services[0], icon: <Code className="w-4 h-4" />, title: t.service1.title, description: t.service1.description, features: [t.service1.feature1, t.service1.feature2, t.service1.feature3] },
    { ...services[1], icon: <Database className="w-4 h-4" />, title: t.service2.title, description: t.service2.description, features: [t.service2.feature1, t.service2.feature2, t.service2.feature3] },
    { ...services[2], icon: <Globe className="w-4 h-4" />, title: t.service3.title, description: t.service3.description, features: [t.service3.feature1, t.service3.feature2, t.service3.feature3] },
    { ...services[3], icon: <Server className="w-4 h-4" />, title: t.service4.title, description: t.service4.description, features: [t.service4.feature1, t.service4.feature2, t.service4.feature3] }
  ];

  return (
    <section id="servicios" className="py-16 bg-secondary/30">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1200px]">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base border border-border rounded-full mb-3 sm:mb-4 text-foreground">
            {t.badge}
          </div>
          <h2 className="mb-4 sm:mb-5 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-xl sm:max-w-2xl md:max-w-2xl lg:max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
            {t.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-5xl sm:max-w-6xl md:max-w-7xl lg:max-w-[1200px] mx-auto">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto mb-8">
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">24h</div>
              <div className="text-xs text-muted-foreground">{language === 'es' ? 'Respuesta' : 'Response'}</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">99%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">20d</div>
              <div className="text-xs text-muted-foreground">{language === 'es' ? 'Garantía' : 'Warranty'}</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">∞</div>
              <div className="text-xs text-muted-foreground">{language === 'es' ? 'Soporte' : 'Support'}</div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-base text-foreground">
              {language === 'es' ? '¿Tienes un proyecto personalizado?' : 'Do you have a custom project?'}
            </p>
            <button 
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-sm"
              onClick={() => {
                const contactSection = document.getElementById('contacto');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {language === 'es' ? 'Hablemos de tu proyecto' : "Let's talk about your project"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { language } = useLanguage();
  
  return (
    <div className="bg-card border border-border rounded-lg p-5 md:p-6 hover:bg-accent transition-colors group flex flex-col h-full">
      <div className="flex-grow">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-md">
            {service.icon}
          </div>
          <h3 className="text-base md:text-lg font-medium text-foreground">{service.title}</h3>
        </div>
        <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
          {service.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {service.features.map((feature, featureIndex) => (
            <span key={featureIndex} className="inline-flex items-center px-2.5 py-1.5 text-xs md:text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
              {feature}
            </span>
          ))}
        </div>
      </div>
      
      <button 
        className="px-6 py-2.5 md:px-8 md:py-3 border-2 border-border rounded-md hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm md:text-base font-medium w-full text-foreground hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 mt-auto"
        onClick={() => window.open('https://www.linkedin.com/in/juan-rafael-calzada-65566a387', '_blank')}
      >
        {language === 'es' ? 'Cotizar' : 'Get quote'}
      </button>
    </div>
  );
};
