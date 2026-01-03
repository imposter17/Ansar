import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function GlassButton({ children, className, href, onClick, target, rel }: Props) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-2xl glass-panel border-white/15 hover:border-white/40 transition shadow-glow',
    className
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel ?? (target === '_blank' ? 'noreferrer' : undefined)} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
