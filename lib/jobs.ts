import { partners } from '@/data/seed';
import { ClickLog } from './types';
import { logClick } from './db';

export function buildAffiliateJobSearchLinks(keyword: string, location: string, remote = false) {
  return partners
    .filter((p) => p.isActive)
    .map((partner) => {
      const outboundUrl = partner.baseTrackingUrl
        .replace('{keyword}', encodeURIComponent(keyword))
        .replace('{location}', encodeURIComponent(remote ? 'Remote' : location));
      return {
        partnerId: partner.partnerId,
        name: partner.name,
        outboundUrl
      };
    });
}

export function logJobClick(params: Omit<ClickLog, 'timestamp'>) {
  const entry: ClickLog = {
    ...params,
    timestamp: new Date().toISOString()
  };
  return logClick(entry);
}
