'use client';

import { MapPin, Mail, Linkedin, Calendar, X, Download, Github, Globe, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

interface CVPreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVPreview = ({ isOpen, onClose }: CVPreviewProps) => {
  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/cv-juan-rafael-calzada.pdf';
    link.download = 'CV-Juan-Rafael-Calzada-Gonzalez.pdf';
    
    fetch('/cv-juan-rafael-calzada.pdf')
      .then(response => {
        if (response.ok) {
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          alert('Use Ctrl+P or Cmd+P and select "Save as PDF" to download your CV');
          window.print();
        }
      })
      .catch(() => {
        alert('Use Ctrl+P or Cmd+P and select "Save as PDF" to download your CV');
        window.print();
      });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-background border border-border rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header mejorado */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5" />
            Resume Preview
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all text-sm font-medium flex items-center gap-2 hover:scale-105 transform"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Contenido del CV con diseño moderno */}
        <div id="cv-content" className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 text-gray-900 dark:text-gray-100">
          {/* Header con gradiente */}
          <div className="relative overflow-hidden rounded-2xl mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 opacity-90" />
            <div className="relative text-center py-10 px-6 text-white">
              <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3">
                Full Stack Software Engineer
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
                Professional Profile
              </h2>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Software Engineer with experience in developing web and desktop applications 
                using Python, Java and JavaScript. Passionate about technology and creating 
                efficient solutions. Responsible, analytical and with teamwork skills.
              </p>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg" />
                <p className="relative text-gray-600 dark:text-gray-400 italic text-center py-4 px-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  "No matter how difficult it is, I will always move forward as a Software Engineer."
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
                Technical Skills
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full" />
                  Languages
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
                  Databases
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
                  Tools
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
                Work Experience
              </h2>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    Software Engineer / Sales Advisor
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Full-time Position</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-4 py-2 rounded-lg mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">2025 – Present</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>Development and maintenance of internal systems with Python and Java</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span>Implementation of interactive interfaces with JavaScript and React</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-500 mt-1">▸</span>
                  <span>Technical support and personalized customer service</span>
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
                Education
              </h2>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    Technical High School Diploma
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Rafael Pombo, Tumaco (Nariño)</p>
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
              Curriculum Vitae - Juan Rafael Calzada González
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Updated in 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

