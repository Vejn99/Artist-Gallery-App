export interface AlbumsListInterface {
  albums: {
    albumId: string;
    title: string;
    year: number;
    cover: string;
    price: number;
  }[];
  artistId: number;
}
