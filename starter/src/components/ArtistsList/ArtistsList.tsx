import "./ArtistsList.css";
import { ArtistItem } from "./ArtistItem/ArtistItem";
import { ArtistItemInterface } from "./ArtistItem/ArtistItemInterface";

export const ArtistsList = () => {
  const artists: ArtistItemInterface[] = [
    {
      artistId: 1,
      artistName: "Jimi Hendrix",
      artistImage: "jimi_hendrix",
    },
    {
      artistId: 2,
      artistName: "Madonna",
      artistImage: "madonna",
    },
    {
      artistId: 3,
      artistName: "Johnny Cash",
      artistImage: "johnny_cash",
    },
    {
      artistId: 4,
      artistName: "Pink Floyd",
      artistImage: "pink_floyd",
    },
  ];
  return (
    <div className="cardsContainer">
      <h2>Browse the artists</h2>
      <ArtistItem artists={artists} />
    </div>
  );
};
