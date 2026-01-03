import { clickLogs, events, groups, helpPosts, mosques, partners, places, programs, reports, universities, users } from '@/data/seed';
import { ClickLog, Place, PlaceType } from './types';

export function getPlacesByType(type?: PlaceType) {
  if (!type) return places;
  return places.filter((p) => p.type === type);
}

export function getPlaceById(placeId: string): Place | undefined {
  return places.find((p) => p.placeId === placeId);
}

export function logClick(entry: ClickLog) {
  clickLogs.push(entry);
  return entry;
}

export const db = {
  users,
  places,
  mosques,
  universities,
  groups,
  programs,
  events,
  helpPosts,
  partners,
  clickLogs,
  reports
};
