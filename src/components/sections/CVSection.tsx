'use client';

import { useState } from 'react';
import { Download, Eye } from 'lucide-react';
import { CVPreview } from './CVPreview';

export const CVSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = () => {
    // Crear un enlace temporal para descargar
    const link = document.createElement('a');
    link.href = '/cv-juan-rafael-calzada.pdf';
    link.download = 'CV-Juan-Rafael-Calzada-Gonzalez.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  return (
    <section id="cv" className="py-16 bg-secondary/30">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 text-xs border border-border rounded-full mb-3">
            Currículum Vitae
          </div>
          <h2 className="mb-4 text-2xl md:text-3xl font-medium">
            Mi CV
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-xs">
            Descarga mi currículum actualizado para conocer más sobre mi experiencia y formación.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-20 mx-auto bg-gradient-to-br from-primary to-primary/60 border border-border flex items-center justify-center rounded-md">
                <span className="text-white text-xs font-medium">PDF</span>
              </div>
              
              <div>
                <h3 className="text-lg mb-2 font-medium text-foreground">Currículum Vitae</h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Juan Rafael Calzada González<br/>
                  Ingeniero de Software
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium inline-flex items-center"
                  onClick={handleDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar CV
                </button>
                <button 
                  className="px-6 py-2 border border-border rounded-md hover:bg-accent transition-colors text-sm font-medium inline-flex items-center"
                  onClick={handlePreview}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Vista Previa
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center pt-4 border-t border-border">
                <div>
                  <div className="text-sm mb-1 font-medium text-foreground">Formato</div>
                  <div className="text-xs text-muted-foreground">PDF</div>
                </div>
                <div>
                  <div className="text-sm mb-1 font-medium text-foreground">Páginas</div>
                  <div className="text-xs text-muted-foreground">2</div>
                </div>
                <div>
                  <div className="text-sm mb-1 font-medium text-foreground">Actualizado</div>
                  <div className="text-xs text-muted-foreground">2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Vista Previa */}
      <CVPreview isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </section>
  );
};
