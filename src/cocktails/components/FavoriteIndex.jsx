import React from "react";

import CocktailList from "./CocktailList";

function FavoriteIndex({ favorites, toggleFavorite }) {
  let componentContent;
  if (favorites.length === 0) componentContent = <p>No favorites.</p>;
  else
    componentContent = (
      <CocktailList
        list={favorites}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    );

  return (
    <>
      <h2>Favorites</h2>
      {componentContent}
    </>
  );
}

export default FavoriteIndex;
