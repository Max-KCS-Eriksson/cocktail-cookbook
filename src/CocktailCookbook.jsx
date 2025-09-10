import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CocktailCookbookIndex from "./cocktails/components/CocktailCookbookIndex";
import FavoriteIndex from "./cocktails/components/FavoriteIndex";
import CocktailDetails from "./cocktails/components/CocktailDetails";
import NotFound from "./response-status/NotFound";

function CocktailCookbook() {
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
      else return [...currentFavorites, cocktail];
    });
  };

  return (
    <Router>
      <main>
        <h1>Cocktail Cookbook</h1>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/cocktails/favorites"}>Favorites</Link>
        </nav>
        <section>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route
              path="/"
              element={
                <CocktailCookbookIndex
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path="/cocktails/index/:indexLetter"
              element={
                <CocktailCookbookIndex
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path="/cocktails/favorites"
              element={
                <FavoriteIndex
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path="/cocktail/:id"
              element={
                <CocktailDetails
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
          </Routes>
        </section>
      </main>
    </Router>
  );
}

export default CocktailCookbook;
