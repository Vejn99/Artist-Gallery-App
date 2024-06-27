import React from "react";
import "./AlbumPage.css";
import { useParams } from "react-router-dom";
import artists from "../../../../data/db";

export const AlbumPage = () => {
  const { artistId, albumId } = useParams();

  const artistParseId = artistId ? parseInt(artistId) : undefined;

  const artist = artistParseId
    ? artists.find((artist) => artist.id === artistParseId)
    : undefined;

  if (!artist) return <div>Artist not found</div>;

  const album = artist.albums.find((album) => album.albumId === albumId);

  if (!album) return <div>Album not found</div>;

  const renderAlbumInfo = () => {
    return (
      <div className="albumCard pt-5 mt-5">
        <img
          src={require(`../../../../images/albums/${album.cover}.jpg`)}
          alt="album-covers"
          style={{ width: "150px", marginBottom: "10px" }}
        />
        <h3>
          Title: <span>{album.title}</span>
        </h3>
        <h3>
          Year: <span>{album.year}</span>
        </h3>
        <h3 className="m-0">
          Price: <span>{album.price} $</span>
        </h3>
      </div>
    );
  };

  return <> {renderAlbumInfo()}</>;
};
