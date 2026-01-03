import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface Props {
  children: ReactNode;
  variant?: 'default' | 'success' | 'danger' | 'outline';
}

export function Badge({ children, variant = 'default' }: Props) {
  const styles = {
    default: 'bg-white/10 text-white border-white/10',
    success: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30',
    danger: 'bg-rose-500/20 text-rose-200 border-rose-400/30',
    outline: 'bg-transparent text-slate-200 border-white/20'
  };
  return (
    <span className={clsx('px-3 py-1 rounded-full text-xs border', styles[variant])}>{children}</span>
  );
}
