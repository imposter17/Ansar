export function getGoogleMapsLink(lat: number, lng: number, name?: string, address?: string) {
  const query = encodeURIComponent(`${name ?? ''} ${address ?? ''}`.trim() || `${lat},${lng}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${query}`;
}

export function getWazeLink(lat: number, lng: number) {
  return `https://waze.com/ul?ll=${lat}%2C${lng}&navigate=yes`;
}
