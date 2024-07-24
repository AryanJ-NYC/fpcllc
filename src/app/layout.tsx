import { clsx } from 'clsx';
import type { Metadata } from 'next';
import './globals.css';
import { Playfair_Display } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Link from 'next/link';

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
        <header>
          <nav>
            <Link href="/our-services">Our Services</Link>
          </nav>
        </header>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
