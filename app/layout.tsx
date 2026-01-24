import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ankan Bera | Data Science & AI Developer',
  description: 'Portfolio of Ankan Bera, a Data Science & AI enthusiast and Full Stack Developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased bg-dark text-text-main selection:bg-primary selection:text-dark">

        {children}
      </body>
    </html>
  );
}
