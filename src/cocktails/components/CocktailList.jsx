import React from "react";
import { Link } from "react-router-dom";

import CocktailThumbnail from "./CocktailThumbnail";
import FavoriteButton from "./FavoriteButton";

import "./CocktailList.css";

function CocktailList({ list, favorites, toggleFavorite }) {
  return (
    <ul className="cocktail-list ">
      {list.map((cocktail) => (
        <>
          <li key={cocktail.idDrink}>
            <FavoriteButton
              cocktail={cocktail}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
            <Link to={`/cocktail/${cocktail.idDrink}`}>
              {cocktail.strDrink}
            </Link>
          </li>
          <Link to={`/cocktail/${cocktail.idDrink}`}>
            <CocktailThumbnail cocktail={cocktail} small={true} />
          </Link>
        </>
      ))}
    </ul>
  );
}

export default CocktailList;
