'use client';

import { useMemo, useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card } from '@/components/ui/Card';
import { GlassButton } from '@/components/ui/GlassButton';
import { buildAffiliateJobSearchLinks, logJobClick } from '@/lib/jobs';
import { Badge } from '@/components/ui/Badge';
import { partners } from '@/data/seed';
import { LogOut, Search } from 'lucide-react';

export default function JobsPage() {
  const [keyword, setKeyword] = useState('Data Analyst');
  const [location, setLocation] = useState('San Francisco, CA');
  const [remote, setRemote] = useState(false);

  const links = useMemo(() => buildAffiliateJobSearchLinks(keyword, location, remote), [keyword, location, remote]);

  const handleClick = (partnerId: string, outboundUrl: string) => {
    logJobClick({ partnerId, entityType: 'JOB', entityId: keyword, outboundUrl, userId: 'u1' });
  };

  return (
    <AppLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-display">Jobs</h1>
        <p className="text-slate-300">Affiliate outbound searches to trusted partners with click logging and analytics.</p>
        <Card>
          <div className="grid md:grid-cols-3 gap-3">
            <label className="space-y-1">
              <span className="text-sm text-slate-300">Keyword</span>
              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2"
                placeholder="e.g. Product Manager"
              />
            </label>
            <label className="space-y-1">
              <span className="text-sm text-slate-300">Location</span>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2"
                placeholder="City, State or Remote"
              />
            </label>
            <label className="space-y-1 flex items-center gap-2 pt-5">
              <input type="checkbox" checked={remote} onChange={(e) => setRemote(e.target.checked)} />
              <span className="text-sm text-slate-300">Remote-friendly</span>
            </label>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <Card key={link.partnerId}>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">{link.name}</p>
                <Badge>Affiliate</Badge>
              </div>
              <p className="text-sm text-slate-400">Search {link.name} for "{keyword}" in {remote ? 'Remote' : location}.</p>
              <GlassButton href={link.outboundUrl} target="_blank" onClick={() => handleClick(link.partnerId, link.outboundUrl)} className="mt-3 w-full justify-center">
                <Search className="h-4 w-4" /> Open search
              </GlassButton>
            </Card>
          ))}
        </div>

        <Card>
          <h2 className="text-lg font-semibold mb-2">Partners</h2>
          <div className="flex flex-wrap gap-2">
            {partners.map((partner) => (
              <Badge key={partner.partnerId} variant={partner.isActive ? 'success' : 'outline'}>
                {partner.name}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
