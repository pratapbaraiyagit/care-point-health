import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { ScrollToTop } from '@/components/site/scroll-to-top';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'CarePoint Health — Compassionate care. Better health.',
  description:
    'CarePoint Health is a fictional healthcare brand showcasing a modern, patient-focused digital healthcare experience. Book appointments, explore specialists and discover healthcare services.',
  openGraph: {
    title: 'CarePoint Health — Compassionate care. Better health.',
    description:
      'A demonstration healthcare website featuring appointment booking, specialist directories and health resources.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
