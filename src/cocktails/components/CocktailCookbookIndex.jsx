import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchCocktails } from "../helpers";

function CocktailCookbookIndex() {
  const { indexLetter = "a" } = useParams();
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, [indexLetter]);

  if (loading) return <p>Loading cocktails...</p>;
  if (error) return <p>Error: {error}</p>;
  if (cocktails.length === 0) return <p>No drinks found.</p>;

  return (
    <>
      <h2>Index - {indexLetter.toUpperCase()}</h2>
      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
        ))}
      </ul>
    </>
  );
}

export default CocktailCookbookIndex;
