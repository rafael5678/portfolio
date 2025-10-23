// Configuración de EmailJS
// Para obtener estas credenciales, sigue las instrucciones en INSTRUCCIONES-EMAIL.md

export const emailConfig = {
  // Tu Service ID de EmailJS
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  
  // Tu Template ID de EmailJS
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  
  // Tu Public Key de EmailJS
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

// Función para validar si la configuración está completa
export const isEmailConfigured = () => {
  return (
    emailConfig.serviceId !== 'YOUR_SERVICE_ID' &&
    emailConfig.templateId !== 'YOUR_TEMPLATE_ID' &&
    emailConfig.publicKey !== 'YOUR_PUBLIC_KEY'
  );
};

