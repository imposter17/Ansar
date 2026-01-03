import { AppLayout } from '@/components/layout/AppLayout';
import { PlaceGrid } from '@/components/sections/PlaceGrid';
import { places } from '@/data/seed';

export default function FoodPage() {
  const foodPlaces = places.filter((p) => p.type === 'RESTAURANT' || p.type === 'GROCERY' || p.type === 'MEAT_SHOP');
  return (
    <AppLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-display">Halal Food</h1>
        <p className="text-slate-300">Restaurants, groceries, and meat shops with halal verification tags.</p>
        <PlaceGrid places={foodPlaces} ctaPrefix="Open place" />
      </div>
    </AppLayout>
  );
}
