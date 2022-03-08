import type { ITrack } from '@/model/track';

export async function getMusicTracks(): Promise<ITrack[]> {
  console.log('Fetching music tracks...');
  // GET request using fetch with async/await
  const response = await fetch('https://craze.se/api/v2/tracks.php?cat=19');
  const data: ITrack[] = await response.json();
  const musicTracks = data.slice(0, 20);
  return musicTracks;
}
