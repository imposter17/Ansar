import { clsx } from 'clsx';

interface Props {
  className?: string;
}

export function Skeleton({ className }: Props) {
  return <div className={clsx('animate-pulse bg-white/10 rounded-xl', className)} />;
}
