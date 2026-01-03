import { AppLayout } from '@/components/layout/AppLayout';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { groups } from '@/data/seed';
import { getGoogleMapsLink } from '@/lib/navLinks';
import { GlassButton } from '@/components/ui/GlassButton';
import Link from 'next/link';

export default function GroupsPage() {
  return (
    <AppLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-display">Groups &amp; MSAs</h1>
        <p className="text-slate-300">University MSAs and community groups with claim flow for leaders.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {groups.map((group) => (
            <Card key={group.groupId}>
              <div className="flex items-center justify-between">
                <Badge>{group.type}</Badge>
                <Badge variant={group.claimStatus === 'VERIFIED' ? 'success' : 'outline'}>{group.claimStatus}</Badge>
              </div>
              <p className="text-xl font-semibold mt-2">{group.name}</p>
              <p className="text-sm text-slate-400">{group.city}, {group.state}</p>
              <div className="flex gap-2 mt-3">
                <GlassButton href={`/group/${group.groupId}`}>Profile</GlassButton>
                <GlassButton href={getGoogleMapsLink(group.lat, group.lng, group.name, `${group.city}, ${group.state}`)} target="_blank">Map</GlassButton>
              </div>
            </Card>
          ))}
        </div>
        <Card>
          <h2 className="text-lg font-semibold mb-2">University directories</h2>
          <Link href="/university/u-bos-1" className="text-accent">Crescent University</Link>
        </Card>
      </div>
    </AppLayout>
  );
}
