import { Place, PlaceType } from './types';

export interface PlaceFilters {
  query?: string;
  type?: PlaceType;
  city?: string;
  state?: string;
  verified?: boolean;
}

export function filterPlaces(places: Place[], filters: PlaceFilters) {
  return places.filter((place) => {
    const matchesQuery = filters.query
      ? place.name.toLowerCase().includes(filters.query.toLowerCase()) ||
        place.tags?.some((tag) => tag.toLowerCase().includes(filters.query!.toLowerCase()))
      : true;
    const matchesType = filters.type ? place.type === filters.type : true;
    const matchesCity = filters.city ? place.address.toLowerCase().includes(filters.city.toLowerCase()) : true;
    const matchesState = filters.state ? place.address.toLowerCase().includes(filters.state.toLowerCase()) : true;
    const matchesVerified = filters.verified ? place.verifiedStatus !== 'UNVERIFIED' : true;
    return matchesQuery && matchesType && matchesCity && matchesState && matchesVerified;
  });
}
