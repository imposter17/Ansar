import { notFound } from 'next/navigation';
import { AppLayout } from '@/components/layout/AppLayout';
import { programs } from '@/data/seed';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GlassButton } from '@/components/ui/GlassButton';
import { CalendarDays, MapPin, Shield } from 'lucide-react';

interface Props {
  params: { id: string };
}

export default function ProgramProfile({ params }: Props) {
  const program = programs.find((p) => p.programId === params.id);
  if (!program) return notFound();

  return (
    <AppLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <p className="text-sm text-slate-400">Program</p>
            <h1 className="text-3xl font-display">{program.title}</h1>
            <div className="flex items-center gap-2 text-sm text-slate-300"><MapPin className="h-4 w-4" /> {program.address}</div>
          </div>
          <div className="flex gap-2">
            <Badge>{program.type}</Badge>
            <Badge variant={program.moderationStatus === 'APPROVED' ? 'success' : 'outline'}>{program.moderationStatus}</Badge>
          </div>
        </div>

        <Card>
          <div className="flex items-center gap-2 text-sm text-slate-300"><CalendarDays className="h-4 w-4" /> {program.schedule}</div>
          <p className="text-sm text-slate-300 mt-2">Age group: {program.ageGroup ?? 'All ages'} · Price: {program.priceType}</p>
          <div className="flex gap-2 mt-3">
            {program.registrationUrl && <GlassButton href={program.registrationUrl} target="_blank">Register</GlassButton>}
            <GlassButton><Shield className="h-4 w-4" /> Report</GlassButton>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
