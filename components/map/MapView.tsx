'use client';

import { GoogleMap, MarkerClusterer, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';
import { Place } from '@/lib/types';
import { Skeleton } from '../ui/Skeleton';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '24px'
};

interface Props {
  places: Place[];
  center?: { lat: number; lng: number };
  onSelect?: (placeId: string) => void;
}

export function MapView({ places, center, onSelect }: Props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''
  });

  const defaultCenter = useMemo(() => center ?? { lat: places[0]?.lat ?? 37.7749, lng: places[0]?.lng ?? -122.4194 }, [center, places]);

  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return (
      <div className="glass-panel rounded-3xl p-4 border border-white/10">
        <p className="text-sm text-slate-300">Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to render the live Google Map. Showing skeleton preview.</p>
        <Skeleton className="h-72 mt-3" />
      </div>
    );
  }

  if (loadError) {
    return <div className="text-rose-300">Failed to load Google Maps. Check API key or network.</div>;
  }

  if (!isLoaded) {
    return <Skeleton className="h-72" />;
  }

  return (
    <div className="overflow-hidden rounded-3xl shadow-glow">
      <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={11} options={{ styles: [], disableDefaultUI: true, zoomControl: true }}>
        <MarkerClusterer>
          {(clusterer) =>
            places.map((place) => (
              <Marker
                key={place.placeId}
                clusterer={clusterer}
                position={{ lat: place.lat, lng: place.lng }}
                title={place.name}
                onClick={() => onSelect?.(place.placeId)}
                icon={{
                  url: '/pin-neon.svg',
                  scaledSize: new google.maps.Size(36, 48)
                }}
              />
            ))
          }
        </MarkerClusterer>
      </GoogleMap>
    </div>
  );
}
