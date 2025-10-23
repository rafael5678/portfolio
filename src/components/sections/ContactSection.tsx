import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ContactFormData } from '@/types';
import { emailConfig, isEmailConfigured } from '@/config/emailjs';

export const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Reset status when user types
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      // Método 1: Usar nuestro propio API (Resend) - MÁS CONFIABLE Y FLEXIBLE
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setSubmitStatus('success');
          setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitStatus('idle');
          }, 3000);
          return;
        } else {
          // Si Resend falla, intentar con otros métodos
          console.log('API route falló, intentando métodos alternativos...');
        }
      } catch (apiError) {
        console.error('Error con API route, intentando alternativas:', apiError);
      }
      
      // Método 2: Intentar con EmailJS si está configurado
      if (isEmailConfigured()) {
        try {
          const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'juanrafaelcalzada1087@gmail.com',
          };
          
          const response = await emailjs.send(
            emailConfig.serviceId,
            emailConfig.templateId,
            templateParams,
            emailConfig.publicKey
          );
          
          if (response.status === 200) {
            setSubmitStatus('success');
            setTimeout(() => {
              setFormData({ name: '', email: '', subject: '', message: '' });
              setSubmitStatus('idle');
            }, 3000);
            return;
          }
        } catch (emailJsError) {
          console.error('EmailJS falló, intentando método alternativo:', emailJsError);
        }
      }
      
      // Método 3: Usar Web3Forms como respaldo
      const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';
      
      if (web3formsKey && web3formsKey !== 'YOUR_WEB3FORMS_ACCESS_KEY' && web3formsKey !== 'PEGA_AQUI_TU_CLAVE') {
        const web3Data = {
          access_key: web3formsKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: `Portafolio - ${formData.name}`,
        };

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(web3Data)
        });

        const result = await response.json();

        if (result.success) {
          setSubmitStatus('success');
          setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitStatus('idle');
          }, 3000);
          return;
        }
      }
      
      // Método 4: Si nada funciona, mostrar error informativo
      setSubmitStatus('error');
      setErrorMessage(
        'No se pudo enviar el mensaje. Por favor, contáctame directamente en juanrafaelcalzada1087@gmail.com'
      );
      
    } catch (error: any) {
      console.error('Error al enviar el mensaje:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error.message || 'Hubo un error al enviar el mensaje. Por favor, contáctame directamente por email a juanrafaelcalzada1087@gmail.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 mb-3 text-xs border border-border rounded-full">
            Contacto
          </div>
          <h2 className="mb-4 text-2xl md:text-3xl font-medium">
            Trabajemos Juntos
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-xs">
            ¿Tienes un proyecto? Conversemos sobre cómo puedo ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Información
            </h3>
            
            <div className="space-y-4 mb-6">
              <ContactInfoItem
                icon={<Mail className="w-4 h-4" />}
                label="Email"
                value="juanrafaelcalzada1087@gmail.com"
                href="mailto:juanrafaelcalzada1087@gmail.com"
              />
              
              <ContactInfoItem
                icon={<Phone className="w-4 h-4" />}
                label="WhatsApp"
                value="+57 310 360 2816"
                href="https://wa.me/573103602816"
              />
              
              <ContactInfoItem
                icon={<MapPin className="w-4 h-4" />}
                label="Ubicación"
                value="Colombia"
              />
            </div>

            <div>
              <h4 className="mb-3 text-sm font-bold">Redes sociales</h4>
              <div className="flex space-x-2">
                <SocialLink
                  href="https://github.com/rafael5678/portfolio.git"
                  icon={<Github className="w-4 h-4" />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/juan-rafael-calzada-65566a387"
                  icon={<Linkedin className="w-4 h-4" />}
                  label="LinkedIn"
                />
                <SocialLink
                  href="https://www.instagram.com/rafael108778"
                  icon={<Instagram className="w-4 h-4" />}
                  label="Instagram"
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-accent/50 border border-border rounded-lg">
              <h4 className="mb-2 text-sm font-bold text-foreground">Disponibilidad</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Estudiante activo. Disponible para proyectos de aprendizaje y colaboración.
              </p>
              <div className="flex space-x-2">
                <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md">Estudiante</span>
                <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md">Proyectos</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Enviar mensaje</h3>
              <p className="text-sm text-muted-foreground">
                Completa el formulario y me pondré en contacto contigo lo antes posible.
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleContactSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Nombre *</label>
                  <input 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre completo" 
                    className="w-full px-4 py-3 border-2 border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-sm font-normal shadow-sm hover:border-primary/30 hover:shadow-md focus:shadow-lg" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Email *</label>
                  <input 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com" 
                    className="w-full px-4 py-3 border-2 border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-sm font-normal shadow-sm hover:border-primary/30 hover:shadow-md focus:shadow-lg" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Asunto *</label>
                <input 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="¿De qué quieres hablar?" 
                  className="w-full px-4 py-3 border-2 border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-sm font-normal shadow-sm hover:border-primary/30 hover:shadow-md focus:shadow-lg" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Mensaje *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Cuéntame sobre tu proyecto, idea o consulta..."
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-sm font-normal shadow-sm resize-vertical hover:border-primary/30 hover:shadow-md focus:shadow-lg"
                  required
                />
              </div>

              <div className="pt-4 space-y-3">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-md transition-all text-base font-medium ${
                    submitStatus === 'success' 
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : submitStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      ¡Mensaje enviado!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Error al enviar
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar mensaje
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-sm text-green-800 text-center">
                      ✅ Tu mensaje ha sido enviado exitosamente. Te contactaré pronto.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-sm text-red-800 text-center">
                      ❌ {errorMessage}
                    </p>
                  </div>
                )}
                
                <p className="text-xs text-muted-foreground text-center">
                  * Campos obligatorios
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            También puedes descargar mi{" "}
            <button className="text-primary hover:underline text-xs">
              CV en PDF
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactInfoItem = ({ icon, label, value, href }: ContactInfoItemProps) => {
  const content = href ? (
    <a 
      href={href}
      className="text-sm text-foreground hover:text-primary transition-colors"
    >
      {value}
    </a>
  ) : (
    <span className="text-sm text-foreground">{value}</span>
  );

  return (
    <div className="flex items-center space-x-3">
      <div className="p-2 border border-border">
        {icon}
      </div>
      <div>
        <div className="text-xs text-muted-foreground font-bold">{label}</div>
        {content}
      </div>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 border border-border hover:bg-accent transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);
