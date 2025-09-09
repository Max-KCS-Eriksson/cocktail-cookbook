import React from "react";
import { Link } from "react-router-dom";

import FavoriteButton from "./FavoriteButton";

function FavoriteIndex({ favorites, toggleFavorite }) {
  if (favorites.length === 0) return <p>No favorites.</p>;

  return (
    <>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((cocktail) => (
          <li key={cocktail.idDrink}>
            <Link to={`/cocktail/${cocktail.idDrink}`}>
              {cocktail.strDrink}
            </Link>
            <FavoriteButton
              cocktail={cocktail}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default FavoriteIndex;
