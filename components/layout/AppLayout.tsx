'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navLinks, adminLinks } from '@/lib/navigation';
import { clsx } from 'clsx';
import { Shield, Home, Compass, MoonStar, UtensilsCrossed, Users, CalendarRange, LifeBuoy, Briefcase } from 'lucide-react';
import { ReactNode } from 'react';
import { MobileTabBar } from './MobileTabBar';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  compass: Compass,
  moon: MoonStar,
  utensils: UtensilsCrossed,
  users: Users,
  calendar: CalendarRange,
  'life-buoy': LifeBuoy,
  briefcase: Briefcase,
  shield: Shield
};

interface Props {
  children: ReactNode;
  role?: 'USER' | 'VOLUNTEER_MOD' | 'MOSQUE_ADMIN' | 'MSA_ADMIN' | 'SUPER_ADMIN';
}

export function AppLayout({ children, role = 'USER' }: Props) {
  const pathname = usePathname();
  const isAdmin = role === 'SUPER_ADMIN' || role === 'VOLUNTEER_MOD';
  const allLinks = isAdmin ? [...navLinks, ...adminLinks] : navLinks;

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-6">
      <aside className="hidden lg:flex flex-col gap-4 glass-panel rounded-3xl p-6 sticky top-6 h-[calc(100vh-48px)]">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-accent/40 to-mint/50 shadow-glow" />
          <div>
            <p className="text-lg font-semibold font-display tracking-wide">Ansar</p>
            <p className="text-sm text-slate-400">Nationwide Muslim network</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          {allLinks.map((link) => {
            const Icon = iconMap[link.icon] ?? Home;
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'flex items-center gap-3 px-3 py-2 rounded-2xl transition hover:bg-white/5',
                  active && 'bg-white/10 text-white shadow-glow'
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="text-xs text-slate-500">
          <p>Premium dark glass UI with keyboard shortcuts.</p>
          <p>Location-first discovery and verified content.</p>
        </div>
      </aside>
      <main className="pb-20 lg:pb-6">
        {children}
      </main>
      <MobileTabBar links={allLinks} />
    </div>
  );
}
