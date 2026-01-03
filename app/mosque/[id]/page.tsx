import { notFound } from 'next/navigation';
import { AppLayout } from '@/components/layout/AppLayout';
import { mosques, places, events, programs } from '@/data/seed';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GlassButton } from '@/components/ui/GlassButton';
import { getGoogleMapsLink, getWazeLink } from '@/lib/navLinks';
import { MapPin, Navigation2, Clock, HandHeart, ShieldCheck } from 'lucide-react';

interface Props {
  params: { id: string };
}

export default function MosqueProfile({ params }: Props) {
  const mosque = mosques.find((m) => m.mosqueId === params.id);
  if (!mosque) return notFound();
  const place = mosque.placeId ? places.find((p) => p.placeId === mosque.placeId) : undefined;
  const relatedEvents = events.filter((e) => e.hostId === mosque.mosqueId);
  const relatedPrograms = programs.filter((p) => p.hostMosqueId === mosque.mosqueId);

  return (
    <AppLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <p className="text-sm text-slate-400">Mosque profile</p>
            <h1 className="text-3xl font-display">{place?.name ?? mosque.mosqueId}</h1>
            {place && (
              <div className="flex items-center gap-2 text-sm text-slate-300"><MapPin className="h-4 w-4" /> {place.address}</div>
            )}
          </div>
          {place && (
            <div className="flex gap-2">
              <GlassButton href={getGoogleMapsLink(place.lat, place.lng, place.name, place.address)} target="_blank">
                <Navigation2 className="h-4 w-4" /> Google
              </GlassButton>
              <GlassButton href={getWazeLink(place.lat, place.lng)} target="_blank">
                <Navigation2 className="h-4 w-4" /> Waze
              </GlassButton>
            </div>
          )}
        </div>

        <Card>
          <div className="flex flex-wrap gap-2 items-center">
            <Badge variant={mosque.claimStatus === 'VERIFIED' ? 'success' : 'outline'}>{mosque.claimStatus}</Badge>
            {mosque.jummahTimes && (
              <span className="flex items-center gap-2 text-sm text-slate-300"><Clock className="h-4 w-4" /> Jummah: {mosque.jummahTimes}</span>
            )}
          </div>
          <p className="text-sm text-slate-300 mt-2">Services: {mosque.services?.join(', ') ?? 'Community supplied'}</p>
          <p className="text-sm text-slate-300 mt-1">Parking: {mosque.parkingNotes ?? 'Add details'}</p>
          <p className="text-sm text-slate-300 mt-1">Accessibility: {mosque.accessibilityNotes ?? 'Add details'}</p>
          <div className="flex gap-2 mt-3">
            <GlassButton><HandHeart className="h-4 w-4" /> Claim this mosque</GlassButton>
            <GlassButton><ShieldCheck className="h-4 w-4" /> Volunteer moderation</GlassButton>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h3 className="font-semibold">Events</h3>
            {relatedEvents.length === 0 && <p className="text-sm text-slate-400">No events yet.</p>}
            {relatedEvents.map((event) => (
              <div key={event.eventId} className="border-t border-white/10 pt-2 mt-2">
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-slate-400">{new Date(event.startDateTime).toLocaleString()}</p>
              </div>
            ))}
          </Card>
          <Card>
            <h3 className="font-semibold">Programs</h3>
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
