import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <div className={clsx('glass-panel rounded-3xl p-4 glow-border', className)}>{children}</div>;
}
