'use client';

import { MapPin, Mail, Linkedin, Calendar, X, Download, Github, Globe, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Language } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { useEffect, useRef, useState } from 'react';

interface CVPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const CVPreview = ({ isOpen, onClose, language }: CVPreviewProps) => {
  if (!isOpen) return null;

  const t = translations[language].cvPreview;
  const [hasStaticPdf, setHasStaticPdf] = useState<boolean | null>(null);
  const [hasStaticPng, setHasStaticPng] = useState<boolean | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mounted = true;
    Promise.all([
      fetch('/cv-juan-rafael-calzada.pdf', { method: 'HEAD' }).then(r => r.ok).catch(() => false),
      fetch('/cv-juan-rafael-calzada.png', { method: 'HEAD' }).then(r => r.ok).catch(() => false),
    ]).then(([pdfOk, pngOk]) => {
      if (!mounted) return;
      setHasStaticPdf(pdfOk);
      setHasStaticPng(pngOk);
    });
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      mounted = false;
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    if (hasStaticPdf) {
      link.href = '/cv-juan-rafael-calzada.pdf';
      link.download = 'CV-Juan-Rafael-Calzada-Gonzalez.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (hasStaticPng) {
      link.href = '/cv-juan-rafael-calzada.png';
      link.download = 'CV-Juan-Rafael-Calzada-Gonzalez.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('Usa Ctrl+P o Cmd+P y selecciona "Guardar como PDF"');
      window.print();
    }
  };

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const isChecking = hasStaticPdf === null || hasStaticPng === null;

  return (
    <div onMouseDown={handleBackdrop} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div ref={containerRef} className="bg-background border border-border rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onMouseDown={(e) => e.stopPropagation()}>
        {/* Header mejorado */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5" />
            {t.title}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all text-sm font-medium flex items-center gap-2 hover:scale-105 transform"
            >
              <Download className="w-4 h-4" />
              {t.downloadPDF}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Contenido del CV: si existe PDF estático lo mostramos en un visor */}
        {isChecking ? (
          <div className="p-16 flex items-center justify-center">
            <div className="h-6 w-6 rounded-full border-2 border-white/40 border-t-white animate-spin" />
          </div>
        ) : hasStaticPdf ? (
          <div className="p-0">
            <iframe
              src="/cv-juan-rafael-calzada.pdf"
              title="CV PDF"
              className="w-full h-[80vh]"
            />
          </div>
        ) : hasStaticPng ? (
          <div className="p-0">
            <div className="flex justify-end gap-2 px-4 pt-4">
              <a href="/cv-juan-rafael-calzada.png" target="_blank" rel="noreferrer" className="px-3 py-1 text-xs bg-white/20 text-white rounded-md hover:bg-white/30">Abrir en pestaña nueva</a>
            </div>
            <img
              src="/cv-juan-rafael-calzada.png"
              alt="CV imagen"
              className="w-full h-auto"
              loading="eager"
              decoding="sync"
              style={{ imageRendering: 'auto' }}
            />
          </div>
        ) : (
          <div className="p-10 text-center">
            <p className="text-sm text-muted-foreground mb-3">No se encontró el archivo del CV. Usa “Guardar como PDF”.</p>
            <button onClick={() => window.print()} className="px-4 py-2 border border-border rounded-md hover:bg-accent text-sm">Imprimir / Guardar como PDF</button>
          </div>
        )}
      </div>
    </div>
  );
};

