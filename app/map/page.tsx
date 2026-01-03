'use client';

import { AppLayout } from '@/components/layout/AppLayout';
import { MapView } from '@/components/map/MapView';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { FilterBar } from '@/components/sections/FilterBar';
import { getPlaceById } from '@/lib/db';
import { filterPlaces } from '@/lib/filters';
import { places } from '@/data/seed';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Navigation2, Search } from 'lucide-react';
import { getGoogleMapsLink, getWazeLink } from '@/lib/navLinks';

export default function MapPage() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | undefined>(places[0]?.placeId);
  const [filters, setFilters] = useState({ openNow: false, verifiedOnly: true, category: undefined as string | undefined });

  const filteredPlaces = useMemo(
    () => filterPlaces(places, { query, verified: filters.verifiedOnly, type: filters.category as any }),
    [query, filters]
  );

  const selectedPlace = selectedId ? getPlaceById(selectedId) : filteredPlaces[0];

  return (
    <AppLayout>
      <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <Card>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search mosques, halal food, MSAs, programs"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <FilterBar
                categories={[
                  { label: 'Mosques', value: 'MOSQUE' },
                  { label: 'Food', value: 'RESTAURANT' },
                  { label: 'University', value: 'UNIVERSITY' }
                ]}
                onChange={(val) => setFilters(val)}
              />
            </div>
          </Card>
          <MapView places={filteredPlaces} onSelect={(id) => setSelectedId(id)} />
        </div>
        <div className="space-y-3 max-h-[80vh] overflow-y-auto pr-2">
          {filteredPlaces.map((place) => (
            <Card key={place.placeId} className={selectedId === place.placeId ? 'border-accent/70' : undefined}>
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Chip label={place.type} />
                    <Badge variant={place.verifiedStatus === 'CERTIFIED' ? 'success' : 'outline'}>
                      {place.verifiedStatus}
                    </Badge>
                  </div>
                  <p className="font-semibold text-lg mt-2">{place.name}</p>
                  <p className="text-sm text-slate-400">{place.address}</p>
                </div>
                <GlassButton onClick={() => setSelectedId(place.placeId)}>Focus</GlassButton>
              </div>
              <div className="flex gap-2 mt-3 flex-wrap">
                <GlassButton href={getGoogleMapsLink(place.lat, place.lng, place.name, place.address)} target="_blank">
                  <Navigation2 className="h-4 w-4" /> Google
                </GlassButton>
                <GlassButton href={getWazeLink(place.lat, place.lng)} target="_blank">
                  <Navigation2 className="h-4 w-4" /> Waze
                </GlassButton>
                <Link href={`/place/${place.placeId}`}>
                  <GlassButton>Profile</GlassButton>
                </Link>
              </div>
            </Card>
          ))}
          {filteredPlaces.length === 0 && <Card>No results. Try adjusting filters.</Card>}
        </div>
      </div>
    </AppLayout>
  );
}
