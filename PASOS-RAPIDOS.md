# 🚀 PASOS RÁPIDOS - Configurar Formulario de Contacto

## ✅ LO QUE YA HICE POR TI:

✅ Instalé Resend (sistema de emails profesional)
✅ Creé tu propio API de envío de emails
✅ Configuré el formulario para usar tu API
✅ Abrí Resend en tu navegador
✅ Abrí el archivo `.env.local` en Bloc de Notas

---

## 🎯 LO QUE TIENES QUE HACER (3 minutos):

### **PASO 1: En la página de Resend (que acabo de abrir)**

1. **Regístrate** con tu email: `juanrafaelcalzada1087@gmail.com`
2. Click en **"Sign Up"**
3. Ve a tu email y **confirma tu cuenta**
4. Regresa a Resend e **inicia sesión**

---

### **PASO 2: Obtener tu API Key**

1. Una vez dentro de Resend, en el menú lateral ve a **"API Keys"**
2. Click en el botón **"Create API Key"**
3. Nombre: `Portafolio` (o el que quieras)
4. Click en **"Add"** o **"Create"**
5. Te mostrará una clave que empieza con `re_...`
6. **HAZ CLICK EN "COPY"** o selecciónala y presiona Ctrl+C

⚠️ **IMPORTANTE:** Cópiala AHORA, no la podrás ver después

---

### **PASO 3: En el Bloc de Notas (que acabo de abrir)**

Borra TODO el contenido actual y pega esto:

```env
# API Key de Resend
RESEND_API_KEY=PEGA_AQUI_TU_API_KEY

# Email donde recibirás los mensajes
CONTACT_EMAIL=juanrafaelcalzada1087@gmail.com
```

Ahora:
1. Selecciona `PEGA_AQUI_TU_API_KEY`
2. Presiona **Ctrl+V** (pegar la API key que copiaste)
3. Debe quedar algo así:
   ```env
   RESEND_API_KEY=re_abc123def456ghi789
   CONTACT_EMAIL=juanrafaelcalzada1087@gmail.com
   ```
4. **Guarda el archivo**: Ctrl+S
5. **Cierra** el Bloc de Notas

---

### **PASO 4: Reiniciar el servidor**

Cuando me digas **"listo"**, yo voy a:
✅ Reiniciar el servidor automáticamente
✅ Probar que todo funcione
✅ El formulario estará listo para recibir mensajes

---

## 🎁 VENTAJAS DE ESTA SOLUCIÓN:

✅ **FLEXIBILIDAD TOTAL:** Puedes cambiar el email destinatario cuando quieras
✅ **MÚLTIPLES DESTINATARIOS:** Puedes enviar a varios emails a la vez
✅ **100 EMAILS GRATIS al día** (3,000 al mes)
✅ **SIN COMPLICACIONES:** No necesitas confirmar enlaces
✅ **PROFESIONAL:** Emails bonitos con diseño HTML
✅ **TU PROPIO API:** Control total, no dependes de servicios externos

---

## 📧 ¿Cómo cambiar el destinatario?

### Para cambiar a otro email:
Edita `.env.local` y cambia esta línea:
```env
CONTACT_EMAIL=otro_email@ejemplo.com
```

### Para enviar a MÚLTIPLES emails:
Edita `src/app/api/send-email/route.ts` línea 24-26:
```typescript
to: [
  destinatario, 
  'email2@ejemplo.com', 
  'email3@ejemplo.com'
],
```

---

## ✅ Checklist:

- [ ] Me registré en Resend
- [ ] Confirmé mi email
- [ ] Copié la API Key
- [ ] Pegué la API Key en `.env.local`
- [ ] Guardé el archivo (Ctrl+S)
- [ ] Le dije "listo" al asistente

---

**Cuando termines, escribe "listo" y yo me encargo del resto! 🚀**

