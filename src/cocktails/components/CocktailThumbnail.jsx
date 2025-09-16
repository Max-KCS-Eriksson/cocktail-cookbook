import React from "react";

import "./CocktailThumbnail.css";

function CocktailThumbnail({ cocktail, small }) {
  const size = small ? "small" : "medium";
  return cocktail ? (
    <img
      className="cocktail-thumbnail"
      src={`${cocktail.strDrinkThumb}/${size}`}
    />
  ) : (
    <img />
  );
}

export default CocktailThumbnail;
