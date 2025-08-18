import React from "react";
import Gallery from "./Gallery";

const Favorites = () => {
  return <Gallery initialOnlyFavs={true} />; // startet im „Nur Favoriten“-Modus
};

export default Favorites;
