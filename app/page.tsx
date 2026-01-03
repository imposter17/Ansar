import { AppLayout } from '@/components/layout/AppLayout';
import { GlassButton } from '@/components/ui/GlassButton';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';
import { Sparkles, MapPin, Compass, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  const steps = [
    {
      title: 'Pick your country',
      desc: 'Start with the United States, optimized for nationwide search and filtering.',
      icon: <Sparkles className="h-5 w-5 text-mint" />
    },
    {
      title: 'Enable location',
      desc: 'Use privacy-friendly, per-session location to unlock nearest results.',
      icon: <Compass className="h-5 w-5 text-accent" />
    },
    {
      title: 'Discover & join',
      desc: 'Find mosques, halal food, MSAs, programs, help, and jobs with deep verification.',
      icon: <ShieldCheck className="h-5 w-5 text-emerald-300" />
    }
  ];

  return (
    <AppLayout role="SUPER_ADMIN">
      <div className="grid gap-6">
        <section className="glass-panel rounded-3xl p-8 border border-white/10 overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-accent/20 via-mint/10 to-transparent" />
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="space-y-4 max-w-2xl">
              <Badge variant="outline">Premium Muslim Network · Futuristic UI</Badge>
              <h1 className="text-4xl lg:text-5xl font-display font-semibold leading-tight">Ansar — Discovery, belonging, and verified Muslim spaces.</h1>
              <p className="text-lg text-slate-300">
                Built for nationwide discovery with Google Maps, Waze navigation, community submissions, and affiliate job search. Default dark mode with accessible glassmorphism.
              </p>
              <div className="flex flex-wrap gap-3">
                <GlassButton href="/map">Start exploring</GlassButton>
                <GlassButton href="/me">My profile</GlassButton>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-4 border border-white/10 w-full lg:w-80 space-y-3">
              <p className="text-sm text-slate-300">Onboarding</p>
              <div className="flex items-center justify-between">
                <span>Country</span>
                <Badge>United States</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Location permission</span>
                <Badge variant="success">Prompted</Badge>
              </div>
              <GlassButton className="w-full justify-center mt-2">
                <MapPin className="h-4 w-4" /> Grant precise location
              </GlassButton>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title}>
              <div className="flex items-center gap-3">
                {step.icon}
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </section>

        <section className="grid md:grid-cols-2 gap-4">
          <Card>
            <h2 className="text-xl font-display mb-2">Discovery superpowers</h2>
            <ul className="space-y-2 text-slate-300 list-disc list-inside">
              <li>Universal search with category tabs and filters (distance, state/city, open now, verified, halal type).</li>
              <li>Map clustering, modal previews, and skeleton loaders for smooth loading.</li>
              <li>Directions via Google Maps and Waze on every location.</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-xl font-display mb-2">Community & trust</h2>
            <ul className="space-y-2 text-slate-300 list-disc list-inside">
              <li>Mosque + MSA claim flows with volunteer moderation.</li>
              <li>Help Board with rate-limited contact reveal and reporting.</li>
              <li>Admin dashboards for approvals, analytics, and roles.</li>
            </ul>
          </Card>
        </section>

        <section className="glass-panel rounded-3xl p-6 border border-white/10 flex flex-wrap gap-3">
          <Badge>Keyboard navigation</Badge>
          <Badge>AA contrast toggle</Badge>
          <Badge>Font scaling</Badge>
          <Badge>Motion-safe animations</Badge>
          <Badge>Glassmorphism + neon gradients</Badge>
        </section>

        <section className="grid md:grid-cols-2 gap-4">
          <Card>
            <h3 className="text-lg font-semibold mb-2">Directories</h3>
            <div className="grid grid-cols-2 gap-2 text-slate-300 text-sm">
              <Link href="/mosques">Mosques</Link>
              <Link href="/food">Halal Food</Link>
              <Link href="/groups">Groups &amp; MSAs</Link>
              <Link href="/programs">Programs &amp; Education</Link>
              <Link href="/help">Help Board</Link>
              <Link href="/jobs">Jobs</Link>
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold mb-2">Profile & Admin</h3>
            <div className="grid grid-cols-2 gap-2 text-slate-300 text-sm">
              <Link href="/me">My Profile</Link>
              <Link href="/admin">Admin Dashboard</Link>
              <Link href="/map">Explore Map</Link>
              <Link href="/place/p1">Sample Place Profile</Link>
            </div>
          </Card>
        </section>
      </div>
    </AppLayout>
  );
}
