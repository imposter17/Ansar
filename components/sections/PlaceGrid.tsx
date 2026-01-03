import { Place } from '@/lib/types';
import { getGoogleMapsLink, getWazeLink } from '@/lib/navLinks';
import { Badge } from '../ui/Badge';
import { GlassButton } from '../ui/GlassButton';
import Link from 'next/link';
import { CalendarRange, MapPin, Navigation2, Star } from 'lucide-react';

interface Props {
  places: Place[];
  ctaPrefix?: string;
  baseHref?: string;
}

export function PlaceGrid({ places, ctaPrefix = 'Open', baseHref = '/place' }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {places.map((place) => (
        <div key={place.placeId} className="glass-panel rounded-3xl p-4 border border-white/10 space-y-3 hover:-translate-y-1 transition shadow-soft">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-mint" />
            <div>
              <p className="font-semibold text-lg">{place.name}</p>
              <p className="text-sm text-slate-400">{place.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            {place.rating && (
              <span className="flex items-center gap-1"><Star className="h-4 w-4 text-amber-300" /> {place.rating.toFixed(1)}</span>
            )}
            <Badge variant={place.verifiedStatus === 'CERTIFIED' ? 'success' : place.verifiedStatus === 'UNVERIFIED' ? 'outline' : 'default'}>
              {place.verifiedStatus.replace('_', ' ')}
            </Badge>
            <Badge variant="outline">{place.type}</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            {place.tags?.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href={`${baseHref}/${place.placeId}`} className="flex-1">
              <GlassButton className="w-full justify-center">
                <CalendarRange className="h-4 w-4" /> {ctaPrefix} profile
              </GlassButton>
            </Link>
            <GlassButton href={getGoogleMapsLink(place.lat, place.lng, place.name, place.address)} target="_blank" className="flex-1 justify-center">
              <Navigation2 className="h-4 w-4" /> Google Maps
            </GlassButton>
            <GlassButton href={getWazeLink(place.lat, place.lng)} target="_blank" className="flex-1 justify-center">
              <Navigation2 className="h-4 w-4" /> Waze
            </GlassButton>
          </div>
        </div>
      ))}
    </div>
  );
}
