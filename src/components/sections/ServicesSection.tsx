import { Code, Database, Globe, Server } from 'lucide-react';
import { Service } from '@/types';
import { services } from '@/data/constants';

export const ServicesSection = () => {
  return (
    <section id="servicios" className="py-16 bg-secondary/30">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 mb-3 text-xs border border-border rounded-full text-foreground">
            Servicios
          </div>
          <h2 className="mb-4 text-2xl md:text-3xl font-medium text-foreground">
            ¿En qué puedo ayudarte?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-xs">
            Servicios de desarrollo y consultoría para hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const icons = [<Code className="w-4 h-4" />, <Database className="w-4 h-4" />, <Globe className="w-4 h-4" />, <Server className="w-4 h-4" />];
            return <ServiceCard key={index} service={{...service, icon: icons[index]}} />;
          })}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto mb-8">
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">24h</div>
              <div className="text-xs text-muted-foreground">Respuesta</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">99%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">30d</div>
              <div className="text-xs text-muted-foreground">Garantía</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl mb-1 font-bold text-foreground">∞</div>
              <div className="text-xs text-muted-foreground">Soporte</div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-foreground">¿Tienes un proyecto personalizado?</p>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm">
              Hablemos de tu proyecto
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
  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:bg-accent transition-colors group">
      <div className="pb-3">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-md">
            {service.icon}
          </div>
          <h3 className="text-sm font-medium text-foreground">{service.title}</h3>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          {service.description}
        </p>
      </div>
      
      <div className="space-y-3">
        <div className="flex flex-wrap gap-1">
          {service.features.map((feature, featureIndex) => (
            <span key={featureIndex} className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
              {feature}
            </span>
          ))}
        </div>
        
        <button 
          className="px-6 py-2 border border-border rounded-md hover:bg-accent transition-colors text-sm font-medium w-full text-foreground"
          onClick={() => window.open('https://www.linkedin.com/in/juan-rafael-calzada-65566a387', '_blank')}
        >
          Cotizar
        </button>
      </div>
    </div>
  );
};
