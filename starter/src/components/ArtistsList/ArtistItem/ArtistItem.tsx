import { Link } from "react-router-dom";
import "./ArtistItem.css";
import { ArtistItemInterface, ArtistItemProps } from "./ArtistItemInterface";

export const ArtistItem = ({ artists }: ArtistItemProps) => {
  const renderArtist = () => {
    return artists.map((artist: ArtistItemInterface, idx: number) => (
      <div className="artistCard">
        <Link to={`/artist/${artist.artistId}`} key={idx}>
          <img
            src={require(`../../../images/covers/${artist.artistImage}.jpg`)}
            alt="artist-cover"
          />

          <p>{artist.artistName}</p>
        </Link>
      </div>
    ));
  };
  return <>{renderArtist()}</>;
};
