import { ArtistsList } from "../ArtistsList/ArtistsList";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="cardInner">
      <Link to={"/"}>
        <img
          src={require(`../../images/raw/Girls-Listen-Music_0.jpg`)}
          alt="Girl-listen-music"
        />
        <div className="centerItem">
          <h1>Music DB</h1>
        </div>
      </Link>
    </div>
  );
};
