# 🚀 Configuración SÚPER SIMPLE - Envío de Emails con Resend

## ✅ Ventajas de esta solución:

✅ **Enviar a CUALQUIER email** (no solo el tuyo)
✅ **Control total** - es tu propio API
✅ **100 emails GRATIS al día** (3,000 al mes)
✅ **Configuración en 3 minutos**
✅ **Emails profesionales con diseño bonito**
✅ **No depende de servicios externos complicados**

---

## 🎯 CONFIGURACIÓN (3 minutos)

### **PASO 1: Crear cuenta en Resend (1 minuto)**

1. Ve a: **https://resend.com/signup**
2. Regístrate con tu email: `juanrafaelcalzada1087@gmail.com`
3. Confirma tu email (revisa tu bandeja)
4. Inicia sesión en Resend

---

### **PASO 2: Obtener tu API Key (30 segundos)**

1. Una vez dentro de Resend, ve a **"API Keys"** en el menú lateral
2. Haz click en **"Create API Key"**
3. Dale un nombre: `Portafolio`
4. Click en **"Add"**
5. **COPIA** la API Key que aparece (se ve así: `re_abc123def456...`)
6. ⚠️ **IMPORTANTE:** Cópiala ahora, no la podrás ver después

---

### **PASO 3: Configurar en tu proyecto**

#### **Para DESARROLLO LOCAL:**

Edita el archivo `.env.local` en la raíz de tu proyecto y agrega:

```env
# API Key de Resend
RESEND_API_KEY=re_tu_api_key_aqui

# Email donde quieres recibir mensajes (puedes cambiarlo cuando quieras)
CONTACT_EMAIL=juanrafaelcalzada1087@gmail.com
```

**Ejemplo completo:**
```env
RESEND_API_KEY=re_abc123def456ghi789jkl012
CONTACT_EMAIL=juanrafaelcalzada1087@gmail.com
```

Reinicia tu servidor:
```bash
npm run dev
```

---

#### **Para PRODUCCIÓN (Vercel/Netlify):**

**En Vercel:**
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega **DOS variables**:
   
   **Variable 1:**
   - Name: `RESEND_API_KEY`
   - Value: `re_tu_api_key_aqui`
   
   **Variable 2:**
   - Name: `CONTACT_EMAIL`
   - Value: `juanrafaelcalzada1087@gmail.com`

4. Save
5. Deployments → Redeploy

---

**En Netlify:**
1. Site settings → Build & deploy → Environment
2. Edit variables
3. Agrega **DOS variables**:
   
   **Variable 1:**
   - Key: `RESEND_API_KEY`
   - Value: `re_tu_api_key_aqui`
   
   **Variable 2:**
   - Key: `CONTACT_EMAIL`
   - Value: `juanrafaelcalzada1087@gmail.com`

4. Save
5. Trigger deploy

---

## 🎉 ¡LISTO! ¿Cómo funciona?

1. Alguien llena el formulario en tu portafolio
2. Se envía a tu propio API (`/api/send-email`)
3. Resend envía el email al correo que configuraste
4. Recibes un email bonito con toda la información

---

## 🎨 Características del email que recibirás:

✉️ **Subject:** "Nuevo mensaje de contacto: [asunto]"
📧 **From:** Portafolio
↩️ **Reply-to:** Email del usuario (puedes responder directamente)
🎨 **Diseño:** HTML profesional con colores y formato bonito

**El email incluye:**
- 👤 Nombre del usuario
- 📧 Email del usuario
- 📝 Asunto
- 💬 Mensaje completo

---

## 🔧 ¿Cómo cambiar el destinatario?

### **Opción 1: Cambiar la variable de entorno**

Edita `.env.local` (local) o las variables en Vercel/Netlify:

```env
CONTACT_EMAIL=otro_email@ejemplo.com
```

### **Opción 2: Cambiar directamente en el código**

Edita `src/app/api/send-email/route.ts` línea 19:

```typescript
const destinatario = process.env.CONTACT_EMAIL || 'nuevo_email@ejemplo.com';
```

O si quieres enviar a **MÚLTIPLES emails**:

```typescript
const destinatario = process.env.CONTACT_EMAIL || 'juanrafaelcalzada1087@gmail.com';
const otrosEmails = ['email2@ejemplo.com', 'email3@ejemplo.com'];

const data = await resend.emails.send({
  from: 'Portafolio <onboarding@resend.dev>',
  to: [destinatario, ...otrosEmails], // 👈 Envía a múltiples
  // ... resto del código
});
```

---

## 🆓 Límites del Plan Gratuito de Resend

✅ **100 emails por día** (3,000 al mes)
✅ **Ilimitados destinatarios**
✅ **Sin tarjeta de crédito requerida**
✅ **Sin fecha de expiración**

Para un portafolio personal, es más que suficiente.

---

## ✅ Probar que funciona

1. Ve a tu portafolio
2. Llena el formulario de contacto
3. Envía
4. En segundos deberías ver:
   - ✅ "¡Mensaje enviado!" (verde)
   - 📧 Email en tu bandeja

---

## 🎯 Comparación de métodos:

| Método | Configuración | Flexibilidad | Emails/mes |
|--------|---------------|--------------|------------|
| **Resend API** ⭐ | 3 min | ⭐⭐⭐⭐⭐ | 3,000 |
| Web3Forms | 2 min | ⭐⭐⭐ | 250 |
| EmailJS | 10 min | ⭐⭐ | 200 |
| FormSubmit | ❌ No funciona | ⭐ | - |

---

## 🆘 Solución de Problemas

### ❌ "Error al enviar el email"

**Verifica:**
- La API Key de Resend está correcta en `.env.local`
- Reiniciaste el servidor después de editar `.env.local`
- La API Key empieza con `re_`

### ❌ No llega el email

**Revisa:**
- Carpeta de SPAM
- El email en `CONTACT_EMAIL` está bien escrito
- Resend Dashboard para ver logs de envío

### ❌ "Resend is not defined"

**Solución:**
```bash
npm install resend
```

---

## 🎁 BONUS: Personalizar el diseño del email

Edita `src/app/api/send-email/route.ts` y modifica el HTML dentro de la variable `html`.

Puedes cambiar:
- Colores (busca `#667eea`, `#764ba2`)
- Texto
- Estructura
- Agregar tu logo

---

**🚀 Con esta configuración tienes control TOTAL sobre tus emails y puedes enviar a cualquier destinatario que quieras!**

