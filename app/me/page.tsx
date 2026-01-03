import { AppLayout } from '@/components/layout/AppLayout';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GlassButton } from '@/components/ui/GlassButton';
import { users } from '@/data/seed';
import Image from 'next/image';
import { ShieldCheck, Bell } from 'lucide-react';

export default function ProfilePage() {
  const user = users[0];
  return (
    <AppLayout role={user.role}>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4 items-center">
          {user.photoUrl && <Image src={user.photoUrl} alt={user.displayName} width={72} height={72} className="rounded-2xl" />}
          <div>
            <p className="text-sm text-slate-400">{user.role}</p>
            <h1 className="text-3xl font-display">{user.displayName}</h1>
            <p className="text-sm text-slate-300">{user.homeCity}, {user.homeState}</p>
          </div>
          <Badge variant="success">Verified Admin</Badge>
        </div>

        <Card>
          <h3 className="font-semibold mb-2">Preferences</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>AA contrast enabled</Badge>
            <Badge>Font scaling ready</Badge>
            <Badge>Motion reduced</Badge>
          </div>
          <div className="flex gap-2 mt-3">
            <GlassButton><Bell className="h-4 w-4" /> Notification settings</GlassButton>
            <GlassButton><ShieldCheck className="h-4 w-4" /> Manage roles</GlassButton>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
