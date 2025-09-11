import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

import "./FavoriteButton.css";

function FavoriteButton({ cocktail, favorites, toggleFavorite }) {
  const isFavorite = favorites.some(
    (favorite) => favorite.idDrink === cocktail.idDrink,
  );

  return (
    <button
      id="favorite-button"
      className={`${isFavorite ? "is-favorite" : ""}`}
      onClick={() => toggleFavorite(cocktail)}
    >
      <FontAwesomeIcon icon={isFavorite ? solidStar : regularStar} />
    </button>
  );
}

export default FavoriteButton;
