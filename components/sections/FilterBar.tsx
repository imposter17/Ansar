'use client';

import { useState } from 'react';
import { Chip } from '../ui/Chip';
import { clsx } from 'clsx';

interface Props {
  onChange?: (filters: { openNow: boolean; verifiedOnly: boolean; category?: string }) => void;
  categories: { label: string; value: string }[];
}

export function FilterBar({ onChange, categories }: Props) {
  const [openNow, setOpenNow] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(true);
  const [category, setCategory] = useState<string | undefined>(undefined);

  const update = (next: Partial<{ openNow: boolean; verifiedOnly: boolean; category?: string }>) => {
    const state = {
      openNow,
      verifiedOnly,
      category,
      ...next
    };
    setOpenNow(state.openNow);
    setVerifiedOnly(state.verifiedOnly);
    setCategory(state.category);
    onChange?.(state);
  };

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <Chip label={openNow ? 'Open now ✓' : 'Open now'} active={openNow} onClick={() => update({ openNow: !openNow })} />
      <Chip label={verifiedOnly ? 'Verified only ✓' : 'Verified only'} active={verifiedOnly} onClick={() => update({ verifiedOnly: !verifiedOnly })} />
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => update({ category: category === cat.value ? undefined : cat.value })}
          className={clsx(
            'px-3 py-2 rounded-xl text-sm border transition',
            category === cat.value ? 'border-accent bg-accent/20 text-white shadow-glow' : 'border-white/10 text-slate-200 hover:border-white/30'
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
