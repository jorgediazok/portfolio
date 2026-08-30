import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Jorge Díaz | Senior Software Engineer',
  description:
    'Portfolio of Jorge Díaz, a senior software engineer based in Buenos Aires, Argentina, building web products with React, Next.js and TypeScript.',
  openGraph: {
    title: 'Jorge Díaz | Senior Software Engineer',
    description:
      'Portfolio of Jorge Díaz, a senior software engineer based in Buenos Aires, Argentina, building web products with React, Next.js and TypeScript.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className='bg-white text-neutral-900 dark:bg-stone-900 dark:text-neutral-100'>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
