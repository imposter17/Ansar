import { NavLink } from './types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Explore', href: '/map', icon: 'compass' },
  { label: 'Mosques', href: '/mosques', icon: 'moon' },
  { label: 'Food', href: '/food', icon: 'utensils' },
  { label: 'Groups', href: '/groups', icon: 'users' },
  { label: 'Programs', href: '/programs', icon: 'calendar' },
  { label: 'Help', href: '/help', icon: 'life-buoy' },
  { label: 'Jobs', href: '/jobs', icon: 'briefcase' }
];

export const adminLinks: NavLink[] = [
  { label: 'Admin', href: '/admin', icon: 'shield' }
];
