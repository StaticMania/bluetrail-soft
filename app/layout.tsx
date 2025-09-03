import type { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import Footer from '../components/shared/footer';
import Navbar from '../components/shared/navbar';
import SmoothScrollProvider from '../components/shared/smooth-scroll';
import { figtree, interTight } from '../utils/font';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blue Trail Software',
  description:
    'Blue Trail Software designs &amp; develops custom apps for mobile, web &amp; IoT. We created award-winning products for successful brands and disruptive startups.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${interTight.variable} bg-background antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SmoothScrollProvider>
            <Navbar />
            {children}
            <Footer />
          </SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  );
}
