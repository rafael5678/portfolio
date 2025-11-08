'use client';

import { useEffect, useState } from 'react';
import { Download, Eye } from 'lucide-react';
import { CVPreview } from './CVPreview';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export const CVSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].cv;
  const [hasPdf, setHasPdf] = useState(false);
  const [hasPng, setHasPng] = useState(false);

  useEffect(() => {
    let mounted = true;
    Promise.all([
      fetch('/cv-juan-rafael-calzada.pdf', { method: 'HEAD' }).then(r => r.ok).catch(() => false),
      fetch('/cv-juan-rafael-calzada.png', { method: 'HEAD' }).then(r => r.ok).catch(() => false),
    ]).then(([pdfOk, pngOk]) => {
      if (!mounted) return;
      setHasPdf(pdfOk);
      setHasPng(pngOk);
    });
    return () => { mounted = false };
  }, []);

  const handleDownload = async () => {
    // Si existe un PDF en public (/cv-juan-rafael-calzada.pdf) lo descargamos,
    // de lo contrario abrimos la vista previa y sugerimos "Guardar como PDF".
    try {
      const res = await fetch('/cv-juan-rafael-calzada.pdf', { method: 'HEAD' });
      if (res.ok) {
        const link = document.createElement('a');
        link.href = '/cv-juan-rafael-calzada.pdf';
        link.download = 'CV-Juan-Rafael-Calzada-Gonzalez.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      }
    } catch {}
    try {
      const resPng = await fetch('/cv-juan-rafael-calzada.png', { method: 'HEAD' });
      if (resPng.ok) {
        const link = document.createElement('a');
        link.href = '/cv-juan-rafael-calzada.png';
        link.download = 'CV-Juan-Rafael-Calzada-Gonzalez.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      }
    } catch {}
    setIsPreviewOpen(true);
    setTimeout(() => window.print(), 300);
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  return (
    <section id="cv" className="py-16 bg-secondary/30">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1200px]">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base border border-border rounded-full mb-3 sm:mb-4 text-foreground">
            {t.badge}
          </div>
          <h2 className="mb-4 sm:mb-5 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-xl sm:max-w-2xl md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            {t.description}
          </p>
        </div>

        <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 md:p-10">
            <div className="text-center space-y-5 sm:space-y-6">
              <button 
                onClick={handleDownload}
                className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 mx-auto bg-gradient-to-br from-primary to-primary/60 border border-border flex items-center justify-center rounded-md hover:opacity-90 transition"
                aria-label="Descargar CV"
              >
                <span className="text-white text-xs sm:text-sm md:text-base font-medium">{hasPdf ? 'PDF' : hasPng ? 'PNG' : 'PDF'}</span>
              </button>
              
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3 font-medium text-foreground">{t.cvTitle}</h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground mb-4 sm:mb-6">
                  <span className="font-semibold">Rafael Calzada</span><br/>
                  <span className="text-muted-foreground">{t.role}</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button 
                  className="px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm sm:text-base md:text-lg font-medium inline-flex items-center justify-center"
                  onClick={handleDownload}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
                  {t.download}
                </button>
                <button 
                  className="px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4 border border-border rounded-md hover:bg-accent transition-colors text-sm sm:text-base md:text-lg font-medium inline-flex items-center justify-center text-foreground hover:text-foreground"
                  onClick={handlePreview}
                >
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
                  {t.preview}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center pt-4 sm:pt-6 border-t border-border">
                <div>
                  <div className="text-sm sm:text-base md:text-lg mb-1 font-medium text-foreground">{t.pages}</div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">1</div>
                </div>
                <div>
                  <div className="text-sm sm:text-base md:text-lg mb-1 font-medium text-foreground">{t.updated}</div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Vista Previa */}
      <CVPreview isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} language={language} />
    </section>
  );
};

