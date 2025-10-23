import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializar Resend con tu API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // 🎯 AQUÍ PUEDES CAMBIAR EL EMAIL DE DESTINO FÁCILMENTE
    const destinatario = process.env.CONTACT_EMAIL || 'juanrafaelcalzada1087@gmail.com';

    // Enviar el email usando Resend
    const data = await resend.emails.send({
      from: 'Portafolio <onboarding@resend.dev>', // Email verificado de Resend
      to: [destinatario], // 👈 AQUÍ puedes poner cualquier email
      replyTo: email, // El email del usuario que te contacta
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
                  <span class="label">📧 Email:</span> ${email}
                </div>
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
        id: data.id 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error al enviar email:', error);
    return NextResponse.json(
      { 
        error: 'Error al enviar el email',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

