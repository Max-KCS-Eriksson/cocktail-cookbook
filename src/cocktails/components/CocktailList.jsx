import React from "react";
import { Link } from "react-router-dom";

import FavoriteButton from "./FavoriteButton";

function CocktailList({ list, favorites, toggleFavorite }) {
  return (
    <ul className="cocktail-list ">
      {list.map((cocktail) => (
        <li key={cocktail.idDrink}>
          <Link to={`/cocktail/${cocktail.idDrink}`}>{cocktail.strDrink}</Link>
          <FavoriteButton
            cocktail={cocktail}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </li>
      ))}
    </ul>
  );
}

export default CocktailList;
