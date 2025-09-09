import React from "react";
import { Link } from "react-router-dom";

import FavoriteButton from "./FavoriteButton";

function FavoriteIndex({ favorites, toggleFavorite }) {
  let componentContent;
  if (favorites.length === 0) componentContent = <p>No favorites.</p>;
  else
    componentContent = (
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
    );

  return (
    <>
      <h2>Favorites</h2>
      {componentContent}
    </>
  );
}

export default FavoriteIndex;
