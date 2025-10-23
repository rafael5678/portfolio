'use client';

import { useState } from 'react';
import { Download, Eye, FileText, Calendar, Sparkles } from 'lucide-react';
import { CVPreview } from './CVPreview';

export const CVSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = () => {
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
    <section id="cv" className="py-20 relative overflow-hidden">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-full mb-4 bg-background/50 backdrop-blur-sm shadow-lg">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="font-medium">Curriculum Vitae</span>
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Download My Resume
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Get to know my professional experience, skills and education in detail
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Tarjeta principal con glassmorphism */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Icono del PDF mejorado */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-50" />
                  <div className="relative w-32 h-40 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                    <FileText className="w-16 h-16 text-white" />
                    <div className="absolute bottom-3 left-0 right-0 text-center">
                      <span className="text-white text-sm font-bold tracking-wider">PDF</span>
                    </div>
                  </div>
                </div>

                {/* Información */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Professional Resume
                  </h3>
                  <p className="text-muted-foreground mb-1">
                    Juan Rafael Calzada González
                  </p>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-6">
                    Full Stack Software Engineer
                  </p>

                  {/* Botones de acción */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <button 
                      className="group/btn px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transform"
                      onClick={handleDownload}
                    >
                      <Download className="w-5 h-5 mr-2 group-hover/btn:animate-bounce" />
                      Download CV
                    </button>
                    <button 
                      className="px-6 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-300 font-medium inline-flex items-center justify-center hover:scale-105 transform"
                      onClick={handlePreview}
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      Preview
                    </button>
                  </div>

                  {/* Stats mejoradas */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground">Format</div>
                      <div className="text-sm font-bold text-purple-600 dark:text-purple-400">PDF</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground">Pages</div>
                      <div className="text-sm font-bold text-blue-600 dark:text-blue-400">2</div>
                    </div>
                    <div className="space-y-1 flex flex-col items-center md:items-start">
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Updated
                      </div>
                      <div className="text-sm font-bold text-pink-600 dark:text-pink-400">2025</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges de skills destacadas */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800">
                    React
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
                    Python
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-pink-100 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 rounded-full border border-pink-200 dark:border-pink-800">
                    Java
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-800">
                    Full Stack
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CVPreview isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </section>
  );
};
