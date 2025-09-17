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
            <h4>
              <FavoriteButton
                cocktail={cocktail}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
              <Link to={`/cocktail/${cocktail.idDrink}`}>
                {cocktail.strDrink}
              </Link>
            </h4>
            <Link
              className="thumbnail-link"
              to={`/cocktail/${cocktail.idDrink}`}
            >
              <CocktailThumbnail cocktail={cocktail} small={true} />
            </Link>
          </li>
        </>
      ))}
    </ul>
  );
}

export default CocktailList;
