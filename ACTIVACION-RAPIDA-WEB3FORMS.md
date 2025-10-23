# ⚡ Activación Rápida - Formulario de Contacto (2 minutos)

## 🎯 Problema Actual
El formulario de contacto no funciona porque FormSubmit requiere confirmación de email.

## ✅ Solución RÁPIDA con Web3Forms

### Paso 1: Obtener tu Access Key (1 minuto)

1. Ve a **https://web3forms.com**
2. Verás un formulario simple que dice "Create your Access Key"
3. Ingresa tu email: **juanrafaelcalzada1087@gmail.com**
4. Haz clic en **"Create Access Key"**
5. Te mostrarán tu Access Key (algo como: `a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6`)
6. **CÓPIALA** (la necesitarás en el siguiente paso)

### Paso 2: Verificar tu email (30 segundos)

1. Revisa tu bandeja de entrada de **juanrafaelcalzada1087@gmail.com**
2. Busca un email de Web3Forms
3. Haz clic en **"Verify Email"**
4. ¡Listo! Ya está verificado

### Paso 3: Configurar en tu proyecto (30 segundos)

#### **Para desarrollo local:**

1. En la raíz de tu proyecto, crea un archivo llamado `.env.local`
2. Pega esto dentro:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=tu_access_key_aqui
```

3. Reemplaza `tu_access_key_aqui` con la key que copiaste en el Paso 1

**Ejemplo:**
```env
NEXT_PUBLIC_WEB3FORMS_KEY=a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6
```

4. Reinicia tu servidor:
```bash
# Detén el servidor (Ctrl+C)
npm run dev
```

#### **Para producción (Vercel/Netlify):**

**En Vercel:**
1. Ve a tu proyecto en Vercel
2. Settings > Environment Variables
3. Agrega:
   - **Name:** `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value:** Tu access key
4. Haz clic en "Save"
5. Redeploy tu proyecto (Deployments > ... > Redeploy)

**En Netlify:**
1. Ve a Site settings > Build & deploy > Environment
2. Click en "Edit variables"
3. Agrega:
   - **Key:** `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value:** Tu access key
4. Save
5. Trigger deploy

### Paso 4: Probar (10 segundos)

1. Ve a tu portafolio
2. Navega a la sección **Contacto**
3. Llena el formulario con datos de prueba
4. Haz clic en **"Enviar mensaje"**
5. Deberías ver un mensaje de éxito ✅
6. Revisa tu email - deberías recibir el mensaje

## 🎉 ¡Listo!

Tu formulario de contacto ahora funciona completamente. Los mensajes llegarán a **juanrafaelcalzada1087@gmail.com**

## 📊 Características de Web3Forms

✅ **100% Gratis**
✅ **250 envíos por mes** (más que suficiente)
✅ **Sin confirmaciones** necesarias
✅ **Funciona inmediatamente**
✅ **Protección anti-spam** incluida
✅ **Sin tarjeta de crédito**

## 🔍 Verificar que está funcionando

Después de configurar, el formulario:
1. ✅ Muestra "Enviando..." con un spinner
2. ✅ Cambia a "¡Mensaje enviado!" en verde
3. ✅ Limpia el formulario automáticamente
4. ✅ El email llega a tu bandeja en ~5 segundos

## ⚠️ Solución de Problemas

### "Error al enviar el mensaje"
- Verifica que la Access Key esté bien copiada en `.env.local`
- Asegúrate de que no hay espacios antes o después de la key
- Reinicia el servidor de desarrollo

### "El servicio de email no está configurado"
- Confirma que el archivo `.env.local` existe en la raíz del proyecto
- Verifica que la variable se llama exactamente `NEXT_PUBLIC_WEB3FORMS_KEY`
- Reinicia el servidor

### No llega el email
- Revisa la carpeta de SPAM
- Verifica que verificaste tu email en Web3Forms
- Ve a https://web3forms.com y revisa el dashboard de mensajes

## 🆚 Web3Forms vs EmailJS

| Característica | Web3Forms | EmailJS |
|----------------|-----------|---------|
| Tiempo setup | 2 minutos | 10 minutos |
| Confirmación | No necesita | No necesita |
| Config | 1 access key | 3 credenciales |
| Emails/mes | 250 | 200 |
| Dificultad | ⭐ Muy fácil | ⭐⭐ Media |

## 📞 Alternativa: EmailJS

Si prefieres usar EmailJS (más personalizable pero más complejo), sigue las instrucciones en:
📖 `INSTRUCCIONES-EMAIL.md`

---

**¿Problemas? Revisa:**
- `.env.local` está en la raíz del proyecto
- La variable está bien escrita
- El servidor fue reiniciado
- Tu email fue verificado en Web3Forms

