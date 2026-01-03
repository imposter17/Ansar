import { notFound } from 'next/navigation';
import { AppLayout } from '@/components/layout/AppLayout';
import { groups } from '@/data/seed';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GlassButton } from '@/components/ui/GlassButton';
import { HandHeart, ShieldCheck } from 'lucide-react';

interface Props {
  params: { id: string };
}

export default function GroupProfile({ params }: Props) {
  const group = groups.find((g) => g.groupId === params.id);
  if (!group) return notFound();
  return (
    <AppLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <p className="text-sm text-slate-400">Group / MSA</p>
            <h1 className="text-3xl font-display">{group.name}</h1>
            <p className="text-sm text-slate-300">{group.city}, {group.state}</p>
          </div>
          <div className="flex gap-2">
            <Badge>{group.type}</Badge>
            <Badge variant={group.claimStatus === 'VERIFIED' ? 'success' : 'outline'}>{group.claimStatus}</Badge>
          </div>
        </div>

        <Card>
          <p className="text-sm text-slate-300">Links: {group.website ?? 'Add website'} {group.discord && `· Discord`} {group.instagram && `· Instagram`}</p>
          <div className="flex gap-2 mt-3">
            <GlassButton><HandHeart className="h-4 w-4" /> Claim leadership</GlassButton>
            <GlassButton><ShieldCheck className="h-4 w-4" /> Volunteer mod</GlassButton>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
