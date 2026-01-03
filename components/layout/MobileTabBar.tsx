'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { Home, Compass, MoonStar, UtensilsCrossed, Users, CalendarRange, LifeBuoy, Briefcase, Shield } from 'lucide-react';
import { NavLink } from '@/lib/types';

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
  links: NavLink[];
}

export function MobileTabBar({ links }: Props) {
  const pathname = usePathname();
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 glass-panel rounded-t-2xl px-2 py-2 border-t border-white/10">
      <div className="grid grid-cols-5 gap-1">
        {links.slice(0, 5).map((link) => {
          const Icon = iconMap[link.icon] ?? Home;
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx('flex flex-col items-center gap-1 py-2 rounded-xl', active && 'bg-white/10 text-white')}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[11px] font-medium">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
