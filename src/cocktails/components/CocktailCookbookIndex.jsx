import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { createAlphabetList, fetchCocktails } from "../helpers";
import FavoriteButton from "./FavoriteButton";
import NotFound from "../../response-status/NotFound";

function CocktailCookbookIndex({ favorites, toggleFavorite }) {
  const { indexLetter = "a" } = useParams();
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const alphabet = createAlphabetList();
  const isValidIndex = alphabet.includes(indexLetter.toUpperCase());

  useEffect(() => {
    if (!isValidIndex) return;

    async function loadCocktails() {
      try {
        const drinks = await fetchCocktails(indexLetter);
        setCocktails(drinks);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    loadCocktails();
  }, [indexLetter, isValidIndex]);

  let componentContent;
  if (!isValidIndex)
    componentContent = <NotFound message={`Invalid index "${indexLetter}".`} />;
  else if (loading) componentContent = <p>Loading cocktails...</p>;
  else if (error) componentContent = <p>Error: {error}</p>;
  else if (cocktails.length === 0) componentContent = <p>No drinks found.</p>;
  else
    componentContent = (
      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.idDrink}>
            <Link to={`/cocktail/${cocktail.idDrink}`}>
              {cocktail.strDrink}
            </Link>
            <FavoriteButton
              cocktail={cocktail}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          </li>
        ))}
      </ul>
    );

  return (
    <>
      <h2>Index - {indexLetter.toUpperCase()}</h2>
      <nav>
        {alphabet.map((letter) => (
          <Link key={letter} to={`/cocktails/index/${letter.toLowerCase()}`}>
            {letter}
          </Link>
        ))}
      </nav>
      {componentContent}
    </>
  );
}

export default CocktailCookbookIndex;
