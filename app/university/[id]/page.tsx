import { notFound } from 'next/navigation';
import { AppLayout } from '@/components/layout/AppLayout';
import { universities, groups, places } from '@/data/seed';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GlassButton } from '@/components/ui/GlassButton';
import { MapPin, Navigation2 } from 'lucide-react';
import { getGoogleMapsLink, getWazeLink } from '@/lib/navLinks';
import Link from 'next/link';

interface Props {
  params: { id: string };
}

export default function UniversityProfile({ params }: Props) {
  const university = universities.find((u) => u.universityId === params.id);
  if (!university) return notFound();
  const place = university.placeId ? places.find((p) => p.placeId === university.placeId) : undefined;
  const msaGroups = groups.filter((g) => g.universityId === university.universityId);

  return (
    <AppLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <p className="text-sm text-slate-400">University</p>
            <h1 className="text-3xl font-display">{place?.name ?? university.universityId}</h1>
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
          <p className="text-sm text-slate-300">Domain verification: <Badge variant="outline">{university.domain ?? 'Not set'}</Badge></p>
          <div className="flex gap-2 mt-3">
            <GlassButton>Request verification</GlassButton>
            <GlassButton>Submit campus halal places</GlassButton>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-2">MSAs &amp; Muslim groups</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {msaGroups.map((group) => (
              <div key={group.groupId} className="glass-panel p-3 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{group.name}</p>
                  <Badge variant={group.claimStatus === 'VERIFIED' ? 'success' : 'outline'}>{group.claimStatus}</Badge>
                </div>
                <p className="text-sm text-slate-400">{group.city}, {group.state}</p>
                <div className="flex gap-2 mt-2">
                  <Link href={`/group/${group.groupId}`} className="text-accent text-sm">Open profile</Link>
                  {group.instagram && <a className="text-slate-300 text-sm" href={group.instagram} target="_blank" rel="noreferrer">Instagram</a>}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
