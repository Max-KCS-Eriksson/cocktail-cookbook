import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CocktailCookbookIndex from "./cocktails/components/CocktailCookbookIndex";
import { createAlphabetList } from "./cocktails/helpers";
import CocktailDetails from "./cocktails/components/CocktailDetails";

function CocktailCookbook() {
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
            <Route path="/" element={<CocktailCookbookIndex />}></Route>
            <Route
              path="/cocktails/:indexLetter"
              element={<CocktailCookbookIndex />}
            />
            <Route path="/cocktail/:id" element={<CocktailDetails />} />
          </Routes>
        </section>
      </main>
    </Router>
  );
}

export default CocktailCookbook;
