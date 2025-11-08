import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ContactFormData } from '@/types';
import { emailConfig, isEmailConfigured } from '@/config/emailjs';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export const ContactSection = () => {
  const { language } = useLanguage();
  const t = translations[language].contactSection;
  
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
        language === 'es' 
          ? 'No se pudo enviar el mensaje. Por favor, contáctame directamente en juanrafaelcalzada1087@gmail.com'
          : 'Could not send message. Please contact me directly at juanrafaelcalzada1087@gmail.com'
      );
      
    } catch (error: any) {
      console.error('Error al enviar el mensaje:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error.message || (language === 'es' 
          ? 'Hubo un error al enviar el mensaje. Por favor, contáctame directamente por email a juanrafaelcalzada1087@gmail.com'
          : 'There was an error sending the message. Please contact me directly by email at juanrafaelcalzada1087@gmail.com')
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 bg-background">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[95%] lg:max-w-[90%] xl:max-w-[1600px]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 text-sm md:text-base border border-border rounded-full mb-4 text-foreground">
            {t.badge}
          </div>
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto text-base md:text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 max-w-5xl lg:max-w-6xl mx-auto">
          <div>
            <h3 className="mb-8 text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
              {language === 'es' ? 'Información' : 'Information'}
            </h3>
            
            <div className="space-y-5 mb-6">
              <ContactInfoItem
                icon={<Mail className="w-5 h-5 md:w-6 md:h-6" />}
                label="Email"
                value="juanrafaelcalzada1087@gmail.com"
                href="mailto:juanrafaelcalzada1087@gmail.com"
              />
              
              <ContactInfoItem
                icon={<Phone className="w-5 h-5 md:w-6 md:h-6" />}
                label="WhatsApp"
                value="+57 310 360 2816"
                href="https://wa.me/573103602816"
              />
              
              <ContactInfoItem
                icon={<MapPin className="w-5 h-5 md:w-6 md:h-6" />}
                label="Ubicación"
                value="Colombia"
              />
            </div>

            <div>
              <h4 className="mb-4 text-base md:text-lg font-bold text-foreground">Redes sociales</h4>
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

            <div className="mt-6 p-5 md:p-6 bg-accent/50 border border-border rounded-lg">
              <h4 className="mb-3 text-base md:text-lg font-bold text-foreground">Disponibilidad</h4>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Estudiante activo. Disponible para proyectos de aprendizaje y colaboración.
              </p>
              <div className="flex space-x-2">
                <span className="text-sm md:text-base px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md">Estudiante</span>
                <span className="text-sm md:text-base px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md">Proyectos</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{language === 'es' ? 'Enviar mensaje' : 'Send message'}</h3>
              <p className="text-base md:text-lg text-muted-foreground">
                {language === 'es' ? 'Completa el formulario y me pondré en contacto contigo lo antes posible.' : 'Fill out the form and I will contact you as soon as possible.'}
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleContactSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-base md:text-lg font-medium text-foreground">{t.name}</label>
                  <input 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={language === 'es' ? 'Tu nombre completo' : 'Your full name'} 
                    className="w-full px-5 py-3.5 border-2 border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base font-normal shadow-sm hover:border-primary/30 hover:shadow-md focus:shadow-lg" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-base md:text-lg font-medium text-foreground">{t.email}</label>
                  <input 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={language === 'es' ? 'tu@email.com' : 'your@email.com'} 
                    className="w-full px-5 py-3.5 border-2 border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base font-normal shadow-sm hover:border-primary/30 hover:shadow-md focus:shadow-lg" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-base md:text-lg font-medium text-foreground">{t.subject}</label>
                <input 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={language === 'es' ? '¿De qué quieres hablar?' : 'What do you want to talk about?'} 
                  className="w-full px-5 py-3.5 border-2 border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base font-normal shadow-sm hover:border-primary/30 hover:shadow-md focus:shadow-lg" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="block text-base md:text-lg font-medium text-foreground">{t.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={language === 'es' ? 'Cuéntame sobre tu proyecto, idea o consulta...' : 'Tell me about your project, idea or question...'}
                  rows={5}
                  className="w-full px-5 py-3.5 border-2 border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-base font-normal shadow-sm resize-vertical hover:border-primary/30 hover:shadow-md focus:shadow-lg"
                  required
                />
              </div>

              <div className="pt-4 space-y-3">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 rounded-md transition-all text-base md:text-lg font-medium ${
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
                      {t.sending}
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      {t.success}
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-4 h-4 mr-2" />
                      {t.error}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t.send}
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-sm text-green-800 text-center">
                      {language === 'es' ? '✅ Tu mensaje ha sido enviado exitosamente. Te contactaré pronto.' : '✅ Your message has been sent successfully. I will contact you soon.'}
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
                
                <p className="text-sm md:text-base text-muted-foreground text-center">
                  {language === 'es' ? '* Campos obligatorios' : '* Required fields'}
                </p>
              </div>
            </form>
          </div>
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
      className="text-base md:text-lg text-foreground hover:text-primary transition-colors"
    >
      {value}
    </a>
  ) : (
    <span className="text-base md:text-lg text-foreground">{value}</span>
  );

  return (
    <div className="flex items-center space-x-4">
      <div className="p-3 border border-border text-foreground">
        {icon}
      </div>
      <div>
        <div className="text-sm md:text-base text-muted-foreground font-bold mb-1">{label}</div>
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
    className="p-2 border border-border hover:bg-accent transition-colors text-foreground"
    aria-label={label}
  >
    {icon}
  </a>
);

