import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Juan Rafael Calzada González - Portfolio',
  description: 'Professional portfolio of Juan Rafael Calzada González - Software Engineer specialized in Backend Development',
  keywords: 'developer, software, backend, python, java, javascript, typescript, react, nextjs',
  authors: [{ name: 'Juan Rafael Calzada González' }],
  openGraph: {
    title: 'Juan Rafael Calzada González - Portfolio',
    description: 'Software Engineer specialized in Backend Development',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Siempre iniciar con tema claro (blanco) por defecto
                  var theme = 'light';
                  var root = document.documentElement;
                  // Limpiar todas las clases de tema
                  root.classList.remove('dark', 'theme-blue', 'theme-green', 'theme-purple');
                  // No aplicar ninguna clase adicional para tema claro (blanco)
                  // El tema claro es el default sin clases
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}