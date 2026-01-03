export type Role = 'USER' | 'VOLUNTEER_MOD' | 'MOSQUE_ADMIN' | 'MSA_ADMIN' | 'SUPER_ADMIN';
export type PlaceType = 'MOSQUE' | 'RESTAURANT' | 'GROCERY' | 'MEAT_SHOP' | 'UNIVERSITY' | 'GROUP' | 'PROGRAM' | 'EVENT';
export type VerifiedStatus = 'UNVERIFIED' | 'COMMUNITY_VERIFIED' | 'CERTIFIED';

export interface UserPublic {
  userId: string;
  displayName: string;
  photoUrl?: string;
  homeCity?: string;
  homeState?: string;
  role: Role;
  followedMosqueIds: string[];
  createdAt: string;
}

export interface Place {
  placeId: string;
  name: string;
  type: PlaceType;
  lat: number;
  lng: number;
  address: string;
  phone?: string;
  website?: string;
  hoursJson?: string;
  rating?: number;
  photos?: string[];
  source: 'GOOGLE_PLACES' | 'COMMUNITY';
  verifiedStatus: VerifiedStatus;
  tags?: string[];
  updatedAt: string;
}

export interface Mosque {
  mosqueId: string;
  placeId?: string;
  jummahTimes?: string;
  services?: string[];
  parkingNotes?: string;
  accessibilityNotes?: string;
  claimedByUserId?: string;
  claimStatus: 'UNCLAIMED' | 'PENDING' | 'VERIFIED';
  createdAt: string;
}

export interface University {
  universityId: string;
  placeId?: string;
  domain?: string;
  createdAt: string;
}

export interface GroupMSA {
  groupId: string;
  universityId?: string;
  name: string;
  type: 'MSA' | 'MUSLIM_GROUP' | 'COMMUNITY_ORG';
  city: string;
  state: string;
  lat: number;
  lng: number;
  instagram?: string;
  discord?: string;
  website?: string;
  claimedByUserId?: string;
  claimStatus: 'UNCLAIMED' | 'PENDING' | 'VERIFIED';
  createdAt: string;
}

export interface Program {
  programId: string;
  title: string;
  type: 'QURAN_CLASS' | 'WEEKEND_SCHOOL' | 'HALAQAH' | 'SEMINAR' | 'FULL_TIME' | 'ONLINE';
  hostMosqueId?: string;
  hostOrgId?: string;
  lat: number;
  lng: number;
  address: string;
  city: string;
  state: string;
  schedule: string;
  ageGroup?: string;
  priceType: 'FREE' | 'PAID' | 'DONATION';
  registrationUrl?: string;
  createdByUserId?: string;
  moderationStatus: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
}

export interface Event {
  eventId: string;
  title: string;
  hostType: 'MOSQUE' | 'GROUP' | 'UNIVERSITY' | 'ORG';
  hostId: string;
  startDateTime: string;
  endDateTime: string;
  lat: number;
  lng: number;
  address: string;
  details: string;
  rsvpEnabled: boolean;
  rsvpCount: number;
  moderationStatus: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
}

export interface HelpPost {
  helpId: string;
  category: 'JOB' | 'APARTMENT' | 'ROOMMATE' | 'HALAL_FOOD' | 'TUTORING' | 'ISLAMIC_CLASSES' | 'COMMUNITY_SUPPORT';
  title: string;
  description: string;
  city: string;
  state: string;
  lat?: number;
  lng?: number;
  urgency: 'LOW' | 'MEDIUM' | 'HIGH';
  status: 'OPEN' | 'MATCHED' | 'SOLVED';
  contactMethod: 'IN_APP' | 'EMAIL' | 'PHONE';
  contactValue: string;
  createdByUserId: string;
  moderationStatus: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
}

export interface AffiliatePartner {
  partnerId: string;
  name: string;
  baseTrackingUrl: string;
  notes?: string;
  isActive: boolean;
}

export interface ClickLog {
  clickId: string;
  userId?: string;
  partnerId: string;
  entityType: 'JOB' | 'PROGRAM' | 'PLACE';
  entityId: string;
  outboundUrl: string;
  timestamp: string;
  ipHash?: string;
  userAgent?: string;
}

export interface Report {
  reportId: string;
  entityType: string;
  entityId: string;
  reason: string;
  createdByUserId: string;
  status: 'OPEN' | 'RESOLVED';
  createdAt: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon: string;
}
