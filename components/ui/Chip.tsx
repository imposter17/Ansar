import { clsx } from 'clsx';

interface Props {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function Chip({ label, active, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'px-4 py-2 rounded-full border text-sm transition hover:bg-white/10',
        active ? 'bg-white/15 border-white/40 text-white shadow-glow' : 'border-white/10 text-slate-200'
      )}
    >
      {label}
    </button>
  );
}
