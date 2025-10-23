import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Juan Rafael Calzada González - Portafolio',
  description: 'Portafolio profesional de Juan Rafael Calzada González - Ingeniero de Software especializado en Backend Development',
  keywords: 'desarrollador, software, backend, python, java, javascript, typescript, react, nextjs',
  authors: [{ name: 'Juan Rafael Calzada González' }],
  openGraph: {
    title: 'Juan Rafael Calzada González - Portafolio',
    description: 'Ingeniero de Software especializado en Backend Development',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  var root = document.documentElement;
                  root.classList.remove('dark', 'theme-blue', 'theme-green', 'theme-purple');
                  if (theme === 'dark') {
                    root.classList.add('dark');
                  } else if (theme === 'blue') {
                    root.classList.add('theme-blue');
                  } else if (theme === 'green') {
                    root.classList.add('theme-green');
                  } else if (theme === 'purple') {
                    root.classList.add('theme-purple');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}