import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Footer from '../components/shared/footer';
import Navbar from '../components/shared/navbar';
import SmoothScrollProvider from '../components/shared/smooth-scroll';
import { figtree, ibmPlexMono, interTight } from '../utils/font';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bluetrail Software',
  description: 'Bluetrail Software',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${ibmPlexMono.variable} ${interTight.variable} bg-background antialiased`}>
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
