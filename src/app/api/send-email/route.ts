import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializar Resend con tu API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  // Email del usuario (siempre recibirá una copia) - Definido al inicio para usar en catch
  const userEmail = process.env.CONTACT_EMAIL || 'juanrafaelcalzada1087@gmail.com';
  // Email remitente de Resend - Definido al inicio para usar en catch
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  
  try {
    const body = await request.json();
    const { name, email, toEmail, subject, message } = body;

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato del email del remitente
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El email del remitente no es válido' },
        { status: 400 }
      );
    }
    
    // 🎯 Email destino: usar el proporcionado o el por defecto
    let destinatario = toEmail || userEmail;
    
    // Validar formato del email destino
    if (!emailRegex.test(destinatario)) {
      return NextResponse.json(
        { error: 'El email destino no es válido' },
        { status: 400 }
      );
    }

    // Verificar si Resend está configurado
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'tu_resend_api_key_aqui') {
      return NextResponse.json(
        { 
          error: 'Resend API key no está configurada. Por favor, configura RESEND_API_KEY en tus variables de entorno.',
          success: false
        },
        { status: 500 }
      );
    }

    // Enviar el email usando Resend
    // NOTA: Para enviar a cualquier correo, necesitas verificar tu dominio en Resend
    // Determinar los destinatarios: si hay toEmail diferente, enviar a ambos
    const destinatarios = [];
    if (toEmail && toEmail.trim() !== '' && toEmail !== userEmail) {
      // Si hay un email destino diferente, enviar a ambos
      destinatarios.push(destinatario);
      destinatarios.push(userEmail);
    } else {
      // Si no hay toEmail o es el mismo, solo enviar al usuario
      destinatarios.push(userEmail);
    }
    
    const data = await resend.emails.send({
      from: `Portafolio <${fromEmail}>`,
      to: destinatarios, // Enviar a todos los destinatarios
      replyTo: email, // El email del usuario que te contacta
      subject: toEmail && toEmail !== userEmail 
        ? `Mensaje para ${toEmail}: ${subject}`
        : `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .info-row { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #667eea; }
              .label { font-weight: bold; color: #667eea; }
              .message-box { background: white; padding: 20px; margin-top: 20px; border-radius: 5px; border: 1px solid #ddd; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>📬 Nuevo Mensaje de Contacto</h2>
              </div>
              <div class="content">
                <div class="info-row">
                  <span class="label">👤 Nombre:</span> ${name}
                </div>
                <div class="info-row">
                  <span class="label">📧 Email del remitente:</span> ${email}
                </div>
                ${toEmail && toEmail !== userEmail ? `
                <div class="info-row">
                  <span class="label">📬 Email destino solicitado:</span> ${toEmail}
                </div>
                <div class="info-row" style="background: #fff3cd; border-left-color: #ffc107;">
                  <span class="label">ℹ️ Nota:</span> Este mensaje fue enviado a ${toEmail} y a ${userEmail} (copia de seguridad).
                </div>
                ` : ''}
                <div class="info-row">
                  <span class="label">📝 Asunto:</span> ${subject}
                </div>
                <div class="message-box">
                  <p class="label">💬 Mensaje:</p>
                  <p>${message.replace(/\n/g, '<br>')}</p>
                </div>
                <div class="footer">
                  <p>Este mensaje fue enviado desde el formulario de contacto de tu portafolio</p>
                  <p>Puedes responder directamente a este email</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email enviado correctamente',
        id: data.data?.id 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error al enviar email:', error);
    
    // Si falló el envío y había un toEmail diferente, intentar enviar solo al usuario como respaldo
    if (toEmail && toEmail.trim() !== '' && toEmail !== userEmail) {
      try {
        console.log('Intento fallido al enviar a destinatario externo. Enviando respaldo al usuario...');
        
        // Intentar enviar solo al usuario con información sobre el intento fallido
        const backupData = await resend.emails.send({
          from: `Portafolio <${fromEmail}>`,
          to: [userEmail],
          replyTo: email,
          subject: `⚠️ Mensaje de contacto (envío a ${toEmail} falló): ${subject}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: #dc3545; color: white; padding: 20px; border-radius: 10px 10px 0 0; }
                  .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                  .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 15px 0; }
                  .info-row { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #667eea; }
                  .label { font-weight: bold; color: #667eea; }
                  .message-box { background: white; padding: 20px; margin-top: 20px; border-radius: 5px; border: 1px solid #ddd; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h2>⚠️ Mensaje de Contacto (Envío Fallido)</h2>
                  </div>
                  <div class="content">
                    <div class="warning">
                      <strong>⚠️ Advertencia:</strong> El intento de enviar este mensaje a <strong>${toEmail}</strong> falló. 
                      Este es un respaldo que se envió a tu correo.
                    </div>
                    <div class="info-row">
                      <span class="label">👤 Nombre:</span> ${name}
                    </div>
                    <div class="info-row">
                      <span class="label">📧 Email del remitente:</span> ${email}
                    </div>
                    <div class="info-row">
                      <span class="label">📬 Email destino intentado:</span> ${toEmail}
                    </div>
                    <div class="info-row">
                      <span class="label">📝 Asunto:</span> ${subject}
                    </div>
                    <div class="message-box">
                      <p class="label">💬 Mensaje:</p>
                      <p>${message.replace(/\n/g, '<br>')}</p>
                    </div>
                    <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-left: 4px solid #2196F3;">
                      <strong>💡 Nota:</strong> Para enviar a correos externos, necesitas verificar un dominio en Resend. 
                      Puedes contactar al remitente directamente en: <a href="mailto:${email}">${email}</a>
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
        });
        
        // Si el respaldo funcionó, retornar éxito parcial
        return NextResponse.json(
          { 
            success: true,
            message: `El mensaje no pudo enviarse a ${toEmail}, pero se envió una copia de respaldo a tu correo (${userEmail}). Para enviar a correos externos, necesitas verificar un dominio en Resend.`,
            warning: true,
            id: backupData.data?.id 
          },
          { status: 200 }
        );
      } catch (backupError) {
        console.error('Error al enviar respaldo:', backupError);
      }
    }
    
    // Mensajes de error más específicos
    let errorMessage = 'Error al enviar el email';
    let userFriendlyMessage = errorMessage;
    
    if (error.message) {
      if (error.message.includes('domain') || error.message.includes('Domain') || error.message.includes('not allowed')) {
        errorMessage = 'Error: No se puede enviar a este correo. Necesitas verificar un dominio en Resend para enviar a correos externos.';
        userFriendlyMessage = toEmail && toEmail !== userEmail
          ? `No se pudo enviar el mensaje a ${toEmail}. Para enviar a correos externos, necesitas verificar un dominio en Resend. Se intentó enviar una copia de respaldo a tu correo.`
          : 'Error: Necesitas verificar un dominio en Resend para enviar correos. Configura RESEND_FROM_EMAIL con un dominio verificado.';
      } else if (error.message.includes('API key') || error.message.includes('Unauthorized')) {
        errorMessage = 'Error: La API key de Resend no es válida. Verifica tu RESEND_API_KEY.';
        userFriendlyMessage = 'Error de configuración: La API key de Resend no es válida.';
      } else if (error.message.includes('invalid') || error.message.includes('Invalid')) {
        errorMessage = `Error: ${error.message}`;
        userFriendlyMessage = 'El correo destino no es válido o no se puede enviar a ese destinatario.';
      } else {
        errorMessage = `Error: ${error.message}`;
        userFriendlyMessage = 'Error al enviar el correo. Por favor, intenta de nuevo o contacta directamente.';
      }
    }
    
    return NextResponse.json(
      { 
        error: userFriendlyMessage,
        details: error.message || 'Error desconocido',
        success: false
      },
      { status: 500 }
    );
  }
}

