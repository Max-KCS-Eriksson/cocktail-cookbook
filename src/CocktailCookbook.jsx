import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CocktailCookbookIndex from "./cocktails/components/CocktailCookbookIndex";
import { createAlphabetList } from "./cocktails/helpers";

function CocktailCookbook() {
  const alphabet = createAlphabetList();

  return (
    <Router>
      <section>
        <h1>Cocktail Cookbook</h1>
        <nav>
          {alphabet.map((letter) => (
            <Link key={letter} to={`/cocktails/${letter.toLowerCase()}`}>
              {letter}
            </Link>
          ))}
        </nav>
        <Routes>
          <Route path="/" element={<CocktailCookbookIndex />}></Route>
          <Route
            path="/cocktails/:indexLetter"
            element={<CocktailCookbookIndex />}
          />
        </Routes>
      </section>
    </Router>
  );
}

export default CocktailCookbook;
