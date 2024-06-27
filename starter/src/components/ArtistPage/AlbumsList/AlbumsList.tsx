import React from "react";
import "./AlbumsList.css";
import { Link } from "react-router-dom";
import { AlbumsListInterface } from "./AlbumsListInterface";

export const AlbumsList = ({ albums, artistId }: AlbumsListInterface) => {
  const renderAlbums = () => {
    return albums.map((album, idx: number) => (
      <div className="albumContainer col-6 p-0" key={idx}>
        <Link to={`/artist/${artistId}/${album.albumId}`}>
          <img
            src={require(`../../../images/albums/${album.cover}.jpg`)}
            alt={album.title}
          />
        </Link>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="row">{renderAlbums()}</div>
    </div>
  );
};
