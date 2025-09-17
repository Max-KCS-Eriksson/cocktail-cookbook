import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./core/components/Header";
import CocktailCookbookIndex from "./cocktails/components/CocktailCookbookIndex";
import FavoriteIndex from "./cocktails/components/FavoriteIndex";
import CocktailDetails from "./cocktails/components/CocktailDetails";
import NotFound from "./response-status/NotFound";

import useFavorites from "./cocktails/hooks/useFavorites";

import "./CocktailCookbook.css";

function CocktailCookbook() {
  const { favorites, toggleFavorite } = useFavorites();

  const [isNavToggled, setIsNavToggled] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isNavToggled ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavToggled]);

  return (
    <Router>
      <Header isNavToggled={isNavToggled} setIsNavToggled={setIsNavToggled} />

      <main className={`${isNavToggled ? "fade" : ""}`}>
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
              path="/cocktails/index/:cookbookIndex"
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
