import React from "react";

function FavoriteButton({ cocktail, favorites, toggleFavorite }) {
  function isFavorite(cocktail) {
    return favorites.some((favorite) => favorite.idDrink === cocktail.idDrink);
  }

  return (
    <button onClick={() => toggleFavorite(cocktail)}>
      {isFavorite(cocktail) ? "★" : "☆"}
    </button>
  );
}

export default FavoriteButton;
