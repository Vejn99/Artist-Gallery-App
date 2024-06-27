import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { ArtistsList } from "./components/ArtistsList/ArtistsList";
import { ArtistPage } from "./components/ArtistPage/ArtistPage";
import { AlbumPage } from "./components/ArtistPage/AlbumsList/AlbumPage/AlbumPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ArtistsList />} />
        <Route path="/artist/:artistId" element={<ArtistPage />} />
        <Route path="/artist/:artistId/:albumId" element={<AlbumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
