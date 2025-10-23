'use client';

import { MapPin, Mail, Linkedin, Calendar, X } from 'lucide-react';

interface CVPreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVPreview = ({ isOpen, onClose }: CVPreviewProps) => {
  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    // Intenta primero descargar el PDF si existe
    const link = document.createElement('a');
    link.href = '/cv-juan-rafael-calzada.pdf';
    link.download = 'CV-Juan-Rafael-Calzada-Gonzalez.pdf';
    
    // Verifica si el archivo existe
    fetch('/cv-juan-rafael-calzada.pdf')
      .then(response => {
        if (response.ok) {
          // Si existe, descarga el archivo
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // Si no existe, abre el diálogo de impresión
          alert('Usa Ctrl+P o Cmd+P y selecciona "Guardar como PDF" para descargar tu CV');
          window.print();
        }
      })
      .catch(() => {
        // En caso de error, abre el diálogo de impresión
        alert('Usa Ctrl+P o Cmd+P y selecciona "Guardar como PDF" para descargar tu CV');
        window.print();
      });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-background border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header del modal */}
        <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">Vista Previa - Currículum Vitae</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Descargar PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-accent rounded-md transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Contenido del CV */}
        <div id="cv-content" className="p-8 bg-white text-gray-900">
          {/* Encabezado */}
          <div className="text-center mb-8 pb-6 border-b-2 border-gray-800">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              JUAN RAFAEL CALZADA GONZÁLEZ
            </h1>
            <p className="text-xl text-gray-700 mb-4">💻 Desarrollador Full Stack</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Pasto, Nariño</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <a href="mailto:juanrafaelcalzada1087@gmail.com" className="hover:text-blue-600">
                  juanrafaelcalzada1087@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Linkedin className="w-4 h-4" />
                <a 
                  href="https://www.linkedin.com/in/juan-rafael-calzada-65566a387" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Perfil */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 pb-2 border-b-2 border-gray-300">
              💬 Perfil
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Ingeniero de Software con experiencia en desarrollo de aplicaciones web y de escritorio 
              utilizando Python, Java y JavaScript. Apasionado por la tecnología y la creación de 
              soluciones eficientes. Responsable, analítico y con habilidades de trabajo en equipo.
            </p>
            <p className="text-gray-600 italic text-center py-3 bg-gray-50 rounded">
              "Sin importar lo difícil que sea, siempre seguiré adelante como Ing. de Software."
            </p>
          </section>

          {/* Habilidades Técnicas */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 pb-2 border-b-2 border-gray-300">
              🧠 Habilidades Técnicas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Lenguajes:</h3>
                <p className="text-gray-700">Python, Java, JavaScript, HTML, CSS</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Frameworks:</h3>
                <p className="text-gray-700">React, Spring Boot, Flask</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Bases de datos:</h3>
                <p className="text-gray-700">MySQL, PostgreSQL</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Herramientas:</h3>
                <p className="text-gray-700">Git, GitHub, APIs REST, Linux</p>
              </div>
            </div>
          </section>

          {/* Experiencia Laboral */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 pb-2 border-b-2 border-gray-300">
              💼 Experiencia Laboral
            </h2>
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  Ingeniero de Software / Asesor de Ventas
                </h3>
                <span className="text-gray-600 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  2025 – Actualidad
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Desarrollo y mantenimiento de sistemas internos con Python y Java.</li>
                <li>Implementación de interfaces interactivas con JavaScript y React.</li>
                <li>Soporte técnico y atención personalizada a clientes.</li>
              </ul>
            </div>
          </section>

          {/* Formación */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 pb-2 border-b-2 border-gray-300">
              🎓 Formación
            </h2>
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Bachiller Técnico</h3>
                  <p className="text-gray-600">Rafael Pombo, Tumaco (Nariño)</p>
                </div>
                <span className="text-gray-600 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  2010 – 2023
                </span>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 mt-8 pt-4 border-t border-gray-300">
            <p>Currículum Vitae - Juan Rafael Calzada González</p>
            <p>Actualizado en 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

