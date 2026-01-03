import { AppLayout } from '@/components/layout/AppLayout';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GlassButton } from '@/components/ui/GlassButton';
import { helpPosts, programs, events, reports, clickLogs, partners } from '@/data/seed';
import { Shield, CheckCircle2, BarChart3 } from 'lucide-react';

export default function AdminPage() {
  const pendingHelp = helpPosts.filter((h) => h.moderationStatus === 'PENDING');
  const pendingPrograms = programs.filter((p) => p.moderationStatus === 'PENDING');
  const pendingEvents = events.filter((e) => e.moderationStatus === 'PENDING');
  return (
    <AppLayout role="SUPER_ADMIN">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Secure</p>
            <h1 className="text-3xl font-display">Admin Dashboard</h1>
          </div>
          <Badge variant="success">Role: SUPER_ADMIN</Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <p className="text-sm text-slate-400">Moderation queue</p>
            <h3 className="text-2xl font-semibold">{pendingHelp.length + pendingPrograms.length + pendingEvents.length}</h3>
            <p className="text-sm text-slate-300">Pending help posts, programs, events.</p>
            <GlassButton className="mt-3"><Shield className="h-4 w-4" /> Open queue</GlassButton>
          </Card>
          <Card>
            <p className="text-sm text-slate-400">Click analytics</p>
            <h3 className="text-2xl font-semibold">{clickLogs.length} tracked</h3>
            <p className="text-sm text-slate-300">Outbound partner performance.</p>
            <GlassButton className="mt-3"><BarChart3 className="h-4 w-4" /> View analytics</GlassButton>
          </Card>
          <Card>
            <p className="text-sm text-slate-400">Reports</p>
            <h3 className="text-2xl font-semibold">{reports.length} open</h3>
            <p className="text-sm text-slate-300">Community flags on places and posts.</p>
            <GlassButton className="mt-3"><CheckCircle2 className="h-4 w-4" /> Resolve reports</GlassButton>
          </Card>
        </div>

        <Card>
          <h3 className="font-semibold mb-2">Role management</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>SUPER_ADMIN</Badge>
            <Badge>VOLUNTEER_MOD</Badge>
            <Badge>MOSQUE_ADMIN</Badge>
            <Badge>MSA_ADMIN</Badge>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-2">Partners</h3>
          <div className="flex flex-wrap gap-2">
            {partners.map((partner) => (
              <Badge key={partner.partnerId} variant={partner.isActive ? 'success' : 'outline'}>{partner.name}</Badge>
            ))}
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
