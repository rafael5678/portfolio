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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}