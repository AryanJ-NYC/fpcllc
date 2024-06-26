import { clsx } from 'clsx';
import type { Metadata } from 'next';
import './globals.css';
import { Playfair_Display } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const playfairDisplay = Playfair_Display({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'First Point Consulting',
  description: 'First Point Consulting is here to help you find paradise.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(playfairDisplay.variable)}>
      <body className={clsx('min-h-screen')}>
        {/* <header>
          <h1>I AM LOGO</h1>
        </header> */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
