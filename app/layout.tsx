import './globals.css';
import type { Metadata } from 'next';
import { Orbitron, Inter } from 'next/font/google';
import Link from 'next/link';
import { I18nProvider } from '@/components/providers/I18nProvider';
import { LanguageSelect } from '@/components/board/LanguageSelect';

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Masjid Help Board',
  description: 'Digitized and monetized help board for jobs, housing, services, and general support.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${inter.variable} font-body`}>
        <I18nProvider>
          <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
            <header className="glass-panel rounded-2xl p-4 flex flex-wrap gap-3 justify-between items-center">
              <Link href="/" className="font-display text-2xl font-semibold">Masjid Help Board</Link>
              <nav className="flex flex-wrap gap-3 text-sm">
                <Link href="/">Feed</Link>
                <Link href="/create">Create</Link>
                <Link href="/search">Search</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/admin">Admin</Link>
              </nav>
              <LanguageSelect />
            </header>
            {children}
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
