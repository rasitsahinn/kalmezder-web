import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KAL Mezunlar Derneği',
  description: 'Kocaeli Anadolu Lisesi Mezunlar Derneği — 1980\'den bu yana mezunlarımızı bir arada tutuyoruz.',
};

// Root layout: sadece html/body — Navbar/Footer app/(site)/layout.tsx'te
// Studio (/studio) bu layoutu kullanır ama Navbar/Footer olmadan
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        {children}
      </body>
    </html>
  );
}
