# 📄 Sistema de Currículum Vitae - Instrucciones de Uso

## ✅ Lo que ya está funcionando:

### 1. **Botón "Más información" actualizado**
   - Ahora te lleva directamente a la sección CV (en lugar de "Sobre mí")

### 2. **Vista Previa del CV**
   - Haz clic en "Vista Previa" para ver tu CV completo
   - El CV incluye toda tu información:
     - Datos de contacto (Pasto, Nariño)
     - Perfil profesional
     - Habilidades técnicas (Python, Java, JavaScript, etc.)
     - Experiencia laboral (Ingeniero de Software / Asesor de Ventas)
     - Formación académica (Bachiller Técnico - Rafael Pombo)

### 3. **Descarga del CV**
   - Tienes 2 opciones para descargar:

#### Opción A: Descarga con archivo PDF (Recomendado)
1. Coloca tu CV en formato PDF en la carpeta `public/` con el nombre: **`cv-juan-rafael-calzada.pdf`**
2. El botón "Descargar CV" descargará automáticamente ese archivo
3. También funcionará en la vista previa

#### Opción B: Generar PDF desde la vista previa
1. Haz clic en "Vista Previa"
2. Haz clic en "Descargar PDF"
3. Si no tienes un PDF en la carpeta `public/`, se abrirá el diálogo de impresión
4. Selecciona "Guardar como PDF" como destino
5. Guarda el archivo

## 📋 Cómo crear tu archivo PDF:

### Método 1: Usar herramientas online
1. Ve a una de estas herramientas:
   - [Canva](https://www.canva.com) (tiene plantillas de CV gratis)
   - [Resume.io](https://resume.io)
   - [Google Docs](https://docs.google.com) (Archivo > Descargar > PDF)
   
2. Crea tu CV con la siguiente información:

```
JUAN RAFAEL CALZADA GONZÁLEZ
📍 Pasto, Nariño | 💻 Desarrollador Full Stack

📧 juanrafaelcalzada1087@gmail.com
🔗 linkedin.com/in/juan-rafael-calzada-65566a387

💬 Perfil
Ingeniero de Software con experiencia en desarrollo de aplicaciones web 
y de escritorio utilizando Python, Java y JavaScript. Apasionado por la 
tecnología y la creación de soluciones eficientes. Responsable, analítico 
y con habilidades de trabajo en equipo.

"Sin importar lo difícil que sea, siempre seguiré adelante como Ing. de Software."

🧠 Habilidades Técnicas
• Lenguajes: Python, Java, JavaScript, HTML, CSS
• Frameworks: React, Spring Boot, Flask
• Bases de datos: MySQL, PostgreSQL
• Herramientas: Git, GitHub, APIs REST, Linux

💼 Experiencia Laboral
Ingeniero de Software / Asesor de Ventas
📅 2025 – Actualidad
• Desarrollo y mantenimiento de sistemas internos con Python y Java
• Implementación de interfaces interactivas con JavaScript y React
• Soporte técnico y atención personalizada a clientes

🎓 Formación
Bachiller Técnico – Rafael Pombo, Tumaco (Nariño)
📅 2010 – 2023
```

3. Exporta como PDF
4. Nómbralo: `cv-juan-rafael-calzada.pdf`
5. Colócalo en la carpeta `public/` de tu proyecto

### Método 2: Desde Microsoft Word / LibreOffice
1. Crea un documento con la información de arriba
2. Dale formato profesional
3. Archivo > Guardar como > PDF
4. Guárdalo como `cv-juan-rafael-calzada.pdf`
5. Colócalo en `public/`

### Método 3: Usar la vista previa del portafolio
1. Abre tu portafolio
2. Ve a la sección CV
3. Haz clic en "Vista Previa"
4. Presiona Ctrl+P (Windows) o Cmd+P (Mac)
5. Selecciona "Guardar como PDF"
6. Guarda el archivo
7. Renómbralo a `cv-juan-rafael-calzada.pdf`
8. Colócalo en `public/`

## 🗂️ Estructura de archivos:

```
tu-proyecto/
├── public/
│   └── cv-juan-rafael-calzada.pdf  ← Coloca tu CV aquí
├── src/
│   └── components/
│       └── sections/
│           ├── CVSection.tsx        ← Sección principal
│           └── CVPreview.tsx        ← Vista previa del CV
```

## 🎨 Personalización:

Si quieres modificar el contenido del CV en la vista previa:
1. Abre `src/components/sections/CVPreview.tsx`
2. Busca las secciones que quieras modificar
3. Actualiza el texto directamente en el código

## 🚀 Probando el sistema:

1. Inicia tu servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Ve a tu portafolio en el navegador

3. Haz clic en "Más información" en la página de inicio
   - Te llevará a la sección CV

4. Prueba "Vista Previa"
   - Se abrirá un modal con tu CV completo

5. Prueba "Descargar CV"
   - Si tienes el PDF en `public/`, se descargará
   - Si no, se abrirá el diálogo de impresión

## ❓ Preguntas frecuentes:

**P: ¿Puedo cambiar el diseño del CV?**
R: Sí, edita el archivo `CVPreview.tsx` para modificar los estilos y el diseño.

**P: ¿Necesito tener el PDF en public/?**
R: No es obligatorio. Sin el PDF, el sistema usará la función de impresión del navegador.

**P: ¿Cómo actualizo mi información?**
R: Edita `CVPreview.tsx` para cambiar el contenido de la vista previa.

**P: ¿El CV se imprime correctamente?**
R: Sí, hay estilos especiales de impresión en `globals.css` que aseguran que se vea bien al imprimir.

## 📝 Notas importantes:

- El CV en la vista previa ya incluye toda tu información actual
- Los estilos de impresión están optimizados para formato A4
- Los colores se mantienen legibles al imprimir
- Los enlaces son clickeables en el PDF generado desde el navegador

## 🎉 ¡Listo!

Tu sistema de CV está completamente funcional. Solo necesitas agregar el archivo PDF en `public/` si quieres usar esa opción de descarga directa.

