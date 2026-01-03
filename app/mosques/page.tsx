import { AppLayout } from '@/components/layout/AppLayout';
import { PlaceGrid } from '@/components/sections/PlaceGrid';
import { places } from '@/data/seed';

export default function MosquesPage() {
  const mosquePlaces = places.filter((p) => p.type === 'MOSQUE');
  return (
    <AppLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-display">Mosques</h1>
        <p className="text-slate-300">Find nationwide masajid with claim flows, events, and accessibility info.</p>
        <PlaceGrid places={mosquePlaces} ctaPrefix="Open mosque" baseHref="/mosque" />
      </div>
    </AppLayout>
  );
}
