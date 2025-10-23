# 📧 Configuración del Sistema de Correo Electrónico

## 🎯 Objetivo
Hacer que el formulario de contacto de tu portafolio envíe correos electrónicos reales a tu cuenta: **juanrafaelcalzada1087@gmail.com**

## 🚀 Guía Paso a Paso

### Paso 1: Crear una cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en **"Sign Up Free"**
3. Puedes registrarte con:
   - Tu cuenta de Google (recomendado)
   - Tu email personal
4. Verifica tu email si es necesario

### Paso 2: Conectar tu servicio de correo

1. Una vez dentro de EmailJS, ve a **"Email Services"** en el menú lateral
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de correo:
   - **Gmail** (si usas Gmail) ⭐ Recomendado
   - Outlook
   - Yahoo
   - u otro
4. Para Gmail:
   - Haz clic en **"Connect Account"**
   - Inicia sesión con tu cuenta de Google (**juanrafaelcalzada1087@gmail.com**)
   - Acepta los permisos
5. Dale un nombre al servicio (ej: "Portfolio Contact")
6. Haz clic en **"Create Service"**
7. **IMPORTANTE**: Copia el **Service ID** que aparece (algo como `service_xxxxxxx`)

### Paso 3: Crear una plantilla de correo

1. Ve a **"Email Templates"** en el menú lateral
2. Haz clic en **"Create New Template"**
3. Configura la plantilla con este contenido:

#### Subject (Asunto):
```
Nuevo mensaje de contacto de {{from_name}}
```

#### Content (Contenido del email):
```
Has recibido un nuevo mensaje desde tu portafolio:

De: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de tu portafolio.
```

#### Settings (Configuración):
- **From name**: Tu nombre (Juan Rafael Calzada González)
- **From email**: {{from_email}}
- **To email**: {{to_email}}
- **Reply to**: {{from_email}}

4. Haz clic en **"Save"**
5. **IMPORTANTE**: Copia el **Template ID** (algo como `template_xxxxxxx`)

### Paso 4: Obtener tu Public Key

1. Ve a **"Account"** en el menú superior derecho
2. Selecciona **"General"**
3. Busca la sección **"API Keys"** o **"Public Key"**
4. **IMPORTANTE**: Copia tu **Public Key** (algo como `xxxxxxxxxxxx`)

### Paso 5: Configurar las variables de entorno

1. En la raíz de tu proyecto, crea un archivo llamado `.env.local` (si no existe)
2. Agrega estas líneas con tus credenciales:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

3. Reemplaza los `xxxxxxx` con tus valores reales que copiaste en los pasos anteriores

**Ejemplo real:**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz5678
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=mKjP_uZv9Xx123456
```

### Paso 6: Reiniciar el servidor de desarrollo

1. Detén tu servidor de desarrollo (Ctrl+C en la terminal)
2. Reinicia con:
```bash
npm run dev
```

### Paso 7: Probar el formulario

1. Ve a tu portafolio en el navegador
2. Navega a la sección de **Contacto**
3. Llena el formulario con datos de prueba:
   - Nombre: "Prueba"
   - Email: tu email personal
   - Asunto: "Prueba de contacto"
   - Mensaje: "Este es un mensaje de prueba"
4. Haz clic en **"Enviar mensaje"**
5. Deberías ver:
   - Un indicador de carga mientras se envía
   - Un mensaje de éxito en verde ✅
   - El formulario se limpia automáticamente
6. Revisa tu email **juanrafaelcalzada1087@gmail.com** - deberías recibir el mensaje

## 🔍 Solución de Problemas

### Problema 1: "El servicio de correo no está configurado"
**Solución**: 
- Verifica que el archivo `.env.local` existe en la raíz del proyecto
- Asegúrate de que no hay espacios extras en las variables
- Reinicia el servidor de desarrollo

### Problema 2: "Error al enviar el mensaje"
**Solución**:
- Verifica que las credenciales en `.env.local` son correctas
- Ve a EmailJS y confirma que el servicio está activo
- Revisa la consola del navegador (F12) para ver detalles del error

### Problema 3: No llega el correo
**Solución**:
- Revisa la carpeta de SPAM/Correo no deseado
- Ve a EmailJS Dashboard y revisa los logs de envío
- Confirma que el email de destino en `ContactSection.tsx` es correcto

### Problema 4: "403 Forbidden" o "Invalid Public Key"
**Solución**:
- Ve a EmailJS > Account > Security
- Agrega tu dominio a la lista de dominios permitidos:
  - `localhost` (para desarrollo local)
  - Tu dominio de producción (ej: `tuportafolio.vercel.app`)

## 📋 Checklist de Verificación

- [ ] Cuenta de EmailJS creada
- [ ] Servicio de correo conectado (Gmail)
- [ ] Service ID copiado
- [ ] Plantilla de email creada
- [ ] Template ID copiado
- [ ] Public Key copiado
- [ ] Archivo `.env.local` creado con las 3 variables
- [ ] Servidor reiniciado
- [ ] Formulario probado
- [ ] Email recibido en juanrafaelcalzada1087@gmail.com

## 🎨 Personalización Adicional

### Cambiar el email de destino
Abre `src/components/sections/ContactSection.tsx` y busca:
```typescript
to_email: 'juanrafaelcalzada1087@gmail.com',
```
Cámbialo por el email que prefieras.

### Personalizar el mensaje de éxito
Busca en el mismo archivo:
```typescript
✅ Tu mensaje ha sido enviado exitosamente. Te contactaré pronto.
```

### Personalizar la plantilla de email
Ve a EmailJS > Email Templates > Tu plantilla y edita el contenido como prefieras.

## 💰 Límites del Plan Gratuito

EmailJS Plan Gratuito incluye:
- ✅ 200 emails al mes
- ✅ 2 plantillas de email
- ✅ Todas las integraciones
- ✅ Sin tarjeta de crédito requerida

Para un portafolio personal, esto es más que suficiente.

## 🔒 Seguridad

Las variables `NEXT_PUBLIC_*` son seguras de usar en el cliente porque:
1. EmailJS está diseñado para uso en el frontend
2. El Public Key está destinado a ser público
3. Solo puede enviar emails, no leer tu bandeja de entrada
4. Puedes restringir los dominios que pueden usar tu key en EmailJS

## 📱 Notificaciones (Opcional)

Para recibir notificaciones instantáneas cuando alguien te contacte:

1. **En Gmail**:
   - Ve a Configuración > Ver todos los ajustes
   - Activa las notificaciones de escritorio
   - Instala la app de Gmail en tu teléfono

2. **En EmailJS**:
   - Ve a Email Services > Tu servicio
   - Puedes configurar emails de confirmación automáticos

## 🚀 Despliegue en Producción

Cuando subas tu portafolio a Vercel, Netlify, etc.:

1. **En Vercel**:
   - Ve a tu proyecto > Settings > Environment Variables
   - Agrega las 3 variables de EmailJS
   - Redeploy tu proyecto

2. **En Netlify**:
   - Ve a Site settings > Build & deploy > Environment
   - Agrega las 3 variables
   - Redeploy

3. **En EmailJS**:
   - Ve a Account > Security
   - Agrega tu dominio de producción a la lista permitida

## ✅ ¡Todo Listo!

Una vez configurado, tu formulario de contacto estará completamente funcional y recibirás todos los mensajes directamente en tu email. 🎉

## 📞 ¿Necesitas ayuda?

Si tienes problemas:
1. Revisa la sección de Solución de Problemas
2. Consulta la documentación de EmailJS: https://www.emailjs.com/docs/
3. Revisa la consola del navegador (F12) para errores

