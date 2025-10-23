# ⚡ Configuración Rápida - 5 Pasos

## Tu formulario de contacto está listo, solo necesitas configurar EmailJS:

### 📝 Paso 1: Crear cuenta
Ve a https://www.emailjs.com y regístrate (usa tu cuenta de Google)

### 🔌 Paso 2: Conectar Gmail
1. Click en "Email Services" → "Add New Service"
2. Selecciona Gmail
3. Conecta tu cuenta: **juanrafaelcalzada1087@gmail.com**
4. **Copia el Service ID** (ej: `service_abc123`)

### 📧 Paso 3: Crear plantilla
1. Click en "Email Templates" → "Create New Template"
2. Configura:
   - **Subject**: `Nuevo mensaje de {{from_name}}`
   - **Content**: 
   ```
   De: {{from_name}}
   Email: {{from_email}}
   Asunto: {{subject}}
   
   Mensaje:
   {{message}}
   ```
3. **Copia el Template ID** (ej: `template_xyz789`)

### 🔑 Paso 4: Obtener Public Key
1. Click en tu perfil (arriba derecha) → "Account"
2. En "API Keys" o "General"
3. **Copia tu Public Key** (ej: `mKjP_uZv9Xx123`)

### ⚙️ Paso 5: Configurar en tu proyecto
1. Crea un archivo llamado `.env.local` en la raíz del proyecto
2. Pega esto (reemplaza con tus valores):
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```
3. Guarda el archivo
4. Reinicia el servidor: Ctrl+C y luego `npm run dev`

## ✅ ¡Listo!
Prueba tu formulario y recibirás los mensajes en tu email.

---
**¿Necesitas ayuda?** Lee `INSTRUCCIONES-EMAIL.md` para una guía detallada con capturas.

