import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializar Resend con tu API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  // Email del usuario (siempre recibirá una copia) - Definido al inicio para usar en catch
  const userEmail = process.env.CONTACT_EMAIL || 'juanrafaelcalzada1087@gmail.com';
  // Email remitente de Resend - Definido al inicio para usar en catch
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  
  // Variables declaradas fuera del try para uso en catch
  let toEmail: string | undefined = undefined;
  let name: string = '';
  let email: string = '';
  let subject: string = '';
  let message: string = '';
  
  try {
    const body = await request.json();
    name = body.name || '';
    email = body.email || '';
    toEmail = body.toEmail;
    subject = body.subject || '';
    message = body.message || '';

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

    // Enviar el email usando Resend - Siempre a tu correo
    const data = await resend.emails.send({
      from: `Portafolio <${fromEmail}>`,
      to: [userEmail], // Siempre enviar a tu correo
      replyTo: email, // El email del usuario que te contacta - puedes responder directamente
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .info-box { margin: 20px 0; padding: 15px; background: white; border-radius: 5px; border-left: 4px solid #667eea; }
              .label { font-weight: bold; color: #667eea; font-size: 14px; display: block; margin-bottom: 5px; }
              .value { color: #333; font-size: 16px; }
              .email-value { color: #2563eb; font-size: 16px; }
              .message-box { background: white; padding: 20px; margin-top: 20px; border-radius: 5px; border: 1px solid #ddd; }
              .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
              .reply-button { display: inline-block; margin-top: 20px; padding: 12px 24px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>📬 Nuevo Mensaje de Contacto</h2>
              </div>
              <div class="content">
                <div class="info-box">
                  <span class="label">👤 Nombre completo:</span>
                  <span class="value">${name}</span>
                </div>
                <div class="info-box">
                  <span class="label">📧 Correo electrónico (para responder):</span>
                  <span class="email-value">${email}</span>
                </div>
                <div class="info-box">
                  <span class="label">📝 Asunto:</span>
                  <span class="value">${subject}</span>
                </div>
                <div class="message-box">
                  <p class="label">💬 Mensaje:</p>
                  <p style="color: #333; font-size: 15px; line-height: 1.8;">${message.replace(/\n/g, '<br>')}</p>
                </div>
                <div style="text-align: center;">
                  <a href="mailto:${email}" class="reply-button">✉️ Responder a ${name}</a>
                </div>
                <div class="footer">
                  <p>Este mensaje fue enviado desde el formulario de contacto de tu portafolio</p>
                  <p>Puedes responder directamente haciendo clic en "Responder" en tu cliente de correo</p>
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
    
    // Mensajes de error más específicos
    let userFriendlyMessage = 'Error al enviar el correo. Por favor, verifica la configuración.';
    
    if (error.message) {
      if (error.message.includes('API key') || error.message.includes('Unauthorized')) {
        userFriendlyMessage = 'Error de configuración: La API key de Resend no es válida. Verifica tu RESEND_API_KEY.';
      } else if (error.message.includes('domain') || error.message.includes('Domain')) {
        userFriendlyMessage = 'Error: Necesitas verificar un dominio en Resend. Configura RESEND_FROM_EMAIL con un dominio verificado.';
      } else {
        userFriendlyMessage = `Error: ${error.message}`;
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

