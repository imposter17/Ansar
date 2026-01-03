import { AffiliatePartner, ClickLog, Event, GroupMSA, HelpPost, Mosque, Place, Program, Report, University, UserPublic } from '@/lib/types';

export const users: UserPublic[] = [
  {
    userId: 'u1',
    displayName: 'Aaliyah Rahman',
    homeCity: 'San Francisco',
    homeState: 'CA',
    role: 'SUPER_ADMIN',
    followedMosqueIds: ['m1'],
    photoUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    createdAt: new Date().toISOString()
  }
];

export const places: Place[] = [
  {
    placeId: 'p1',
    name: 'Noor Masjid',
    type: 'MOSQUE',
    lat: 37.7749,
    lng: -122.4194,
    address: '123 Crescent Ave, San Francisco, CA',
    phone: '+1 415-555-1234',
    website: 'https://noormasjid.example.com',
    rating: 4.8,
    photos: ['https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80'],
    source: 'COMMUNITY',
    verifiedStatus: 'COMMUNITY_VERIFIED',
    tags: ['Jummah', 'Parking', 'Sisters Area'],
    updatedAt: new Date().toISOString()
  },
  {
    placeId: 'p2',
    name: 'Halal Galaxy Kitchen',
    type: 'RESTAURANT',
    lat: 34.0522,
    lng: -118.2437,
    address: '456 Crescent Blvd, Los Angeles, CA',
    phone: '+1 213-555-5678',
    website: 'https://halalgalaxy.example.com',
    rating: 4.6,
    photos: ['https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'],
    source: 'GOOGLE_PLACES',
    verifiedStatus: 'UNVERIFIED',
    tags: ['Zabihah', 'Family friendly'],
    updatedAt: new Date().toISOString()
  },
  {
    placeId: 'p3',
    name: 'Crescent University',
    type: 'UNIVERSITY',
    lat: 42.3601,
    lng: -71.0589,
    address: '1 Tech Way, Boston, MA',
    phone: '+1 617-555-2010',
    website: 'https://crescentuniversity.example.com',
    rating: 4.7,
    photos: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80'],
    source: 'COMMUNITY',
    verifiedStatus: 'CERTIFIED',
    tags: ['MSA', 'STEM Focus'],
    updatedAt: new Date().toISOString()
  }
];

export const mosques: Mosque[] = [
  {
    mosqueId: 'm1',
    placeId: 'p1',
    jummahTimes: '1:15 PM & 2:15 PM',
    services: ['Halaqah', 'Nikah', 'Funeral'],
    parkingNotes: 'Garage available across the street',
    accessibilityNotes: 'Elevator and ramp access',
    claimStatus: 'VERIFIED',
    createdAt: new Date().toISOString()
  }
];

export const universities: University[] = [
  {
    universityId: 'u-bos-1',
    placeId: 'p3',
    domain: 'crescentuniversity.edu',
    createdAt: new Date().toISOString()
  }
];

export const groups: GroupMSA[] = [
  {
    groupId: 'g1',
    universityId: 'u-bos-1',
    name: 'Crescent University MSA',
    type: 'MSA',
    city: 'Boston',
    state: 'MA',
    lat: 42.3601,
    lng: -71.0589,
    instagram: 'https://instagram.com/crescentmsa',
    website: 'https://crescentmsa.example.com',
    claimStatus: 'PENDING',
    createdAt: new Date().toISOString()
  }
];

export const programs: Program[] = [
  {
    programId: 'pr1',
    title: 'Foundations of Quran Recitation',
    type: 'QURAN_CLASS',
    hostMosqueId: 'm1',
    lat: 37.7749,
    lng: -122.4194,
    address: '123 Crescent Ave, San Francisco, CA',
    city: 'San Francisco',
    state: 'CA',
    schedule: 'Saturdays 10:00 AM',
    ageGroup: 'Teens & Adults',
    priceType: 'DONATION',
    registrationUrl: 'https://noormasjid.example.com/programs/quran',
    moderationStatus: 'APPROVED',
    createdByUserId: 'u1',
    createdAt: new Date().toISOString()
  }
];

export const events: Event[] = [
  {
    eventId: 'e1',
    title: 'Night of Remembrance',
    hostType: 'MOSQUE',
    hostId: 'm1',
    startDateTime: new Date(Date.now() + 86400000).toISOString(),
    endDateTime: new Date(Date.now() + 90000000).toISOString(),
    lat: 37.7749,
    lng: -122.4194,
    address: '123 Crescent Ave, San Francisco, CA',
    details: 'Qiyam, dua, and community dinner.',
    rsvpEnabled: true,
    rsvpCount: 42,
    moderationStatus: 'APPROVED',
    createdAt: new Date().toISOString()
  }
];

export const helpPosts: HelpPost[] = [
  {
    helpId: 'h1',
    category: 'APARTMENT',
    title: 'Looking for a roommate near SF downtown',
    description: 'Professional sister seeking a female roommate within 2 weeks. Budget $1800.',
    city: 'San Francisco',
    state: 'CA',
    urgency: 'HIGH',
    status: 'OPEN',
    contactMethod: 'EMAIL',
    contactValue: 'aaliyah@example.com',
    createdByUserId: 'u1',
    moderationStatus: 'APPROVED',
    createdAt: new Date().toISOString()
  }
];

export const partners: AffiliatePartner[] = [
  {
    partnerId: 'indeed',
    name: 'Indeed',
    baseTrackingUrl: 'https://www.indeed.com/jobs?q={keyword}&l={location}&from=ansar_affiliate',
    notes: 'Standard US coverage',
    isActive: true
  },
  {
    partnerId: 'ziprecruiter',
    name: 'ZipRecruiter',
    baseTrackingUrl: 'https://www.ziprecruiter.com/c/{keyword}?loc={location}&source=ansar',
    isActive: true
  }
];

export const clickLogs: ClickLog[] = [];

export const reports: Report[] = [
  {
    reportId: 'r1',
    entityType: 'PLACE',
    entityId: 'p2',
    reason: 'Incorrect opening hours',
    createdByUserId: 'u1',
    status: 'OPEN',
    createdAt: new Date().toISOString()
  }
];
