import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CocktailCookbookIndex from "./cocktails/components/CocktailCookbookIndex";
import { createAlphabetList } from "./cocktails/helpers";
import FavoriteIndex from "./cocktails/components/FavoriteIndex";
import CocktailDetails from "./cocktails/components/CocktailDetails";

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

  const alphabet = createAlphabetList();

  return (
    <Router>
      <main>
        <h1>Cocktail Cookbook</h1>
        <nav>
          {alphabet.map((letter) => (
            <Link key={letter} to={`/cocktails/${letter.toLowerCase()}`}>
              {letter}
            </Link>
          ))}
        </nav>
        <section>
          <Routes>
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
              path="/cocktails/:indexLetter"
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
