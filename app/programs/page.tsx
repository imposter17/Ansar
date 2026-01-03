import { AppLayout } from '@/components/layout/AppLayout';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { programs } from '@/data/seed';
import { GlassButton } from '@/components/ui/GlassButton';
import { CalendarDays, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ProgramsPage() {
  return (
    <AppLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-display">Programs &amp; Education</h1>
        <p className="text-slate-300">Quran classes, weekend schools, halaqahs, seminars, and online tracks.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {programs.map((program) => (
            <Card key={program.programId}>
              <div className="flex items-center justify-between">
                <Badge>{program.type}</Badge>
                <Badge variant={program.moderationStatus === 'APPROVED' ? 'success' : 'outline'}>{program.moderationStatus}</Badge>
              </div>
              <p className="text-xl font-semibold mt-2">{program.title}</p>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <CalendarDays className="h-4 w-4" /> {program.schedule}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4" /> {program.address}
              </div>
              <div className="flex gap-2 mt-3">
                <GlassButton href={`/program/${program.programId}`}>Profile</GlassButton>
                {program.registrationUrl && <GlassButton href={program.registrationUrl} target="_blank">Register</GlassButton>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
