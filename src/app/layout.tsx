import type { Metadata } from 'next';

import 'src/styles/globals.css';
import '@splidejs/react-splide/css';

import Footer from '@/components/ui/Footer';
import Navigation from '@/components/ui/Navigation';
import {
  appleGaramond,
  appleGaramondBold,
  appleGaramondLight,
  artega,
} from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'SAMAHAN - At the Get Go',
  description:
    "The official website of the Ateneo de Davao University's Student Government",
  openGraph: {
    images: 'public/assets/images/SAMAHANSocialImage.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${artega.variable} ${appleGaramond.variable} ${appleGaramondLight.variable} ${appleGaramondBold.variable} font-sans`}
    >
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
