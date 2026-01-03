import './globals.css';
import type { Metadata } from 'next';
import { Orbitron, Inter } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Ansar | Muslim Discovery & Community Platform',
  description: 'Nationwide discovery for mosques, halal food, MSAs, programs, jobs, and community support.',
  metadataBase: new URL('https://ansar.example.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${inter.variable} font-body`}>{children}</body>
    </html>
  );
}
