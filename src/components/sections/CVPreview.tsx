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
        <div id="cv-content" className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 text-gray-900 dark:text-gray-100">
          {/* Header con gradiente */}
          <div className="relative overflow-hidden rounded-2xl mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 opacity-90" />
            <div className="relative text-center py-10 px-6 text-white">
              <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3">
                {t.roleTitle}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                JUAN RAFAEL CALZADA GONZÁLEZ
              </h1>
              <div className="flex flex-wrap justify-center gap-4 text-sm max-w-2xl mx-auto">
                <a href="mailto:juanrafaelcalzada1087@gmail.com" className="flex items-center gap-2 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>juanrafaelcalzada1087@gmail.com</span>
                </a>
                <div className="flex items-center gap-2 px-3 py-2">
                  <MapPin className="w-4 h-4" />
                  <span>Pasto, Nariño</span>
                </div>
                <a 
                  href="https://www.linkedin.com/in/juan-rafael-calzada-65566a387" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">
                {t.profile}
              </h2>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t.profileText}
              </p>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg" />
                <p className="relative text-gray-600 dark:text-gray-400 italic text-center py-4 px-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  {t.quote}
                </p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-pink-500 rounded-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-pink-400">
                {t.skills}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full" />
                  {t.languages}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'JavaScript', 'HTML', 'CSS'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 rounded-full text-sm border border-purple-200 dark:border-purple-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Spring Boot', 'Flask'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-pink-600 dark:text-pink-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full" />
                  {t.databases}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'PostgreSQL'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-pink-100 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 rounded-full text-sm border border-pink-200 dark:border-pink-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  {t.tools}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'REST APIs', 'Linux'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 rounded-full text-sm border border-green-200 dark:border-green-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent dark:from-pink-400 dark:to-purple-400">
                {t.experience}
              </h2>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {t.experienceRole}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{t.fullTime}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-4 py-2 rounded-lg mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">2025 – {t.present}</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>{t.exp1}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>{t.exp2}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-500 mt-1">▸</span>
                  <span>{t.exp3}</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent dark:from-green-400 dark:to-blue-400">
                {t.education}
              </h2>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {t.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{t.school}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-4 py-2 rounded-lg mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">2010 – 2023</span>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center py-6 mt-8 border-t border-gray-300 dark:border-slate-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {t.footer}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {t.footerUpdated}
            </p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

