import React from "react";
import { useParams } from "react-router-dom";
import artists from "../../data/db";
import { AlbumsList } from "./AlbumsList/AlbumsList";

export const ArtistPage = () => {
  const { artistId } = useParams();

  const artistParseId = artistId ? parseInt(artistId) : undefined;

  console.log("Artist ID:", artistId); // Add this line to check artistId

  const artist = artistParseId
    ? artists.find((artist) => artist.id === artistParseId)
    : undefined;

  const renderArtistInfo = () => {
    return (
      <div className="artistDetail text-center pb-2">
        <img
          src={require(`../../images/covers/${artist?.cover}.jpg`)}
          alt="album-covers"
          style={{ width: "150px" }}
        />
        <h2 className="mt-2">{artist?.name}</h2>
        <p className="w-100 m-0">{artist?.bio}</p>
      </div>
    );
  };

  return (
    <div className="container py-4">
      {renderArtistInfo()}
      {artist && <AlbumsList albums={artist.albums} artistId={artist.id} />}
    </div>
  );
};
