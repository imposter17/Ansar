import { AppLayout } from '@/components/layout/AppLayout';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GlassButton } from '@/components/ui/GlassButton';
import { helpPosts } from '@/data/seed';
import { ShieldCheck, MessageCircle } from 'lucide-react';

export default function HelpPage() {
  return (
    <AppLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-display">Help Board</h1>
        <p className="text-slate-300">Request and offer support with moderation, safe contact reveal, and reporting.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {helpPosts.map((post) => (
            <Card key={post.helpId}>
              <div className="flex items-center justify-between">
                <Badge>{post.category}</Badge>
                <Badge variant={post.status === 'OPEN' ? 'outline' : 'success'}>{post.status}</Badge>
              </div>
              <p className="text-xl font-semibold mt-2">{post.title}</p>
              <p className="text-sm text-slate-400">{post.city}, {post.state}</p>
              <p className="text-sm text-slate-300 mt-2">{post.description}</p>
              <div className="flex gap-2 mt-3">
                <GlassButton><MessageCircle className="h-4 w-4" /> Contact</GlassButton>
                <GlassButton><ShieldCheck className="h-4 w-4" /> Report</GlassButton>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
