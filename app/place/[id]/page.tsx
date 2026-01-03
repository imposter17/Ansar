import { notFound } from 'next/navigation';
import { AppLayout } from '@/components/layout/AppLayout';
import { places, events, programs } from '@/data/seed';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GlassButton } from '@/components/ui/GlassButton';
import { getGoogleMapsLink, getWazeLink } from '@/lib/navLinks';
import { MapPin, Navigation2, Phone, Globe2, Star, Clock, Tag } from 'lucide-react';

interface Props {
  params: { id: string };
}

export default function PlaceProfile({ params }: Props) {
  const place = places.find((p) => p.placeId === params.id);
  if (!place) return notFound();
  const relatedEvents = events.filter((e) => e.hostId === place.placeId);
  const relatedPrograms = programs.filter((p) => p.hostMosqueId === place.placeId);

  return (
    <AppLayout>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm text-slate-400">{place.type}</p>
            <h1 className="text-3xl font-display">{place.name}</h1>
            <div className="flex gap-2 items-center text-slate-300 text-sm">
              <MapPin className="h-4 w-4" /> {place.address}
            </div>
          </div>
          <div className="flex gap-2">
            <GlassButton href={getGoogleMapsLink(place.lat, place.lng, place.name, place.address)} target="_blank">
              <Navigation2 className="h-4 w-4" /> Google
            </GlassButton>
            <GlassButton href={getWazeLink(place.lat, place.lng)} target="_blank">
              <Navigation2 className="h-4 w-4" /> Waze
            </GlassButton>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <div className="flex items-center gap-2">
              <Badge variant={place.verifiedStatus === 'CERTIFIED' ? 'success' : 'outline'}>{place.verifiedStatus}</Badge>
              {place.rating && (
                <span className="flex items-center gap-1 text-amber-200 text-sm"><Star className="h-4 w-4" /> {place.rating.toFixed(1)}</span>
              )}
            </div>
            {place.phone && (
              <div className="flex items-center gap-2 text-sm text-slate-300 mt-2"><Phone className="h-4 w-4" /> {place.phone}</div>
            )}
            {place.website && (
              <div className="flex items-center gap-2 text-sm text-slate-300 mt-1"><Globe2 className="h-4 w-4" /> <a className="text-accent" href={place.website} target="_blank" rel="noreferrer">Website</a></div>
            )}
            {place.hoursJson && (
              <div className="flex items-center gap-2 text-sm text-slate-300 mt-1"><Clock className="h-4 w-4" /> {place.hoursJson}</div>
            )}
            <div className="flex flex-wrap gap-2 mt-3">
              {place.tags?.map((tag) => (
                <Badge key={tag} variant="outline"><Tag className="h-3 w-3 inline mr-1" />{tag}</Badge>
              ))}
            </div>
          </Card>

          <Card className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <p className="text-slate-300 text-sm">
              Report issues, suggest edits, and follow to receive updates. Community submissions are moderated, with map caching and Google Places enrichment for accuracy.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <GlassButton>Save / Follow</GlassButton>
              <GlassButton>Report issue</GlassButton>
              <GlassButton>Suggest edit</GlassButton>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h3 className="font-semibold mb-2">Events</h3>
            {relatedEvents.length === 0 && <p className="text-sm text-slate-400">No events yet.</p>}
            {relatedEvents.map((event) => (
              <div key={event.eventId} className="border-t border-white/10 pt-2 mt-2">
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-slate-400">{new Date(event.startDateTime).toLocaleString()}</p>
              </div>
            ))}
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">Programs</h3>
            {relatedPrograms.length === 0 && <p className="text-sm text-slate-400">No programs yet.</p>}
            {relatedPrograms.map((program) => (
              <div key={program.programId} className="border-t border-white/10 pt-2 mt-2">
                <p className="font-medium">{program.title}</p>
                <p className="text-sm text-slate-400">{program.schedule}</p>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
