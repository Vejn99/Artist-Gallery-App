export interface ArtistItemInterface {
  artistId: number;
  artistName: string;
  artistImage: string;
}

export interface ArtistItemProps {
  artists: ArtistItemInterface[];
}
