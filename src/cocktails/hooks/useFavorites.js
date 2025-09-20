import React, { useEffect, useState } from "react";

import { sortCocktails } from "../helpers";

function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  const toggleFavorite = (cocktail) => {
    setFavorites((currentFavorites) => {
      const isFavorite = currentFavorites.find(
        (favorite) => favorite.idDrink === cocktail.idDrink,
      );
      if (isFavorite)
        return currentFavorites.filter(
          (favorite) => favorite.idDrink !== cocktail.idDrink,
        );
      else return sortCocktails([...currentFavorites, cocktail]);
    });
  };

  return { favorites, toggleFavorite };
}

export default useFavorites;
