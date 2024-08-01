import { clsx } from 'clsx/lite';
import type { Metadata } from 'next';
import './globals.css';
import { Lato, Playfair_Display } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { ContactUs } from './ContactUs';

const lato = Lato({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});
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
    <html lang="en" className={clsx(lato.variable, playfairDisplay.variable)}>
      <body className="min-h-screen text-slate-900">
        <header>
          <nav className="flex flex-row justify-end">
            <Link className="px-4 py-8" href="/our-services">
              Our Services
            </Link>
            <Link className="px-4 py-8" href="/benefits-of-portugal">
              Benefits of Portugal
            </Link>
            <Link className="px-4 py-8" href="/about-us">
              About Us
            </Link>
          </nav>
        </header>
        <main className="min-h-full">
          {children}
          <ContactUs />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
