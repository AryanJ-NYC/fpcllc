import { clsx } from 'clsx/lite';
import type { Metadata } from 'next';
import './globals.css';
import { Grey_Qo, Lato, Playfair_Display } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { ContactUs } from './ContactUs';
import { HeaderLink } from './HeaderLink';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';

const greyQo = Grey_Qo({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-grey-qo',
  weight: ['400'],
});

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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={clsx(greyQo.variable, lato.variable, playfairDisplay.variable)}>
      <body className="min-h-screen">
        <header className="flex justify-between text-blue-900">
          <Link
            className="flex items-center font-grey-qo px-2 sm:px-4 text-4xl sm:text-6xl tracking-widest"
            href="/"
          >
            FPC
          </Link>
          <nav className="flex flex-row justify-end">
            <HeaderLink href="/our-services">Our Services</HeaderLink>
            <HeaderLink href="/benefits-of-portugal">Benefits of Portugal</HeaderLink>
            <HeaderLink href="/about-us">About Us</HeaderLink>
          </nav>
        </header>
        <main className="min-h-full text-slate-900">
          {children}
          <ContactUs />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
