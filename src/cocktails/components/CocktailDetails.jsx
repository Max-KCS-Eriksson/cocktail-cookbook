import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FavoriteButton from "./FavoriteButton";

function CocktailDetails({ favorites, toggleFavorite }) {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCocktail() {
      try {
        const API_BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

        const response = await fetch(`${API_BASE_URL}lookup.php?i=${id}`);
        if (!response.ok) throw new Error(response.status);

        const data = await response.json();
        setCocktail(data.drinks ? data.drinks[0] : {});
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    loadCocktail();
  }, [id]);

  if (loading) return <p>Loading cocktails...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!cocktail) return <p>No drink found.</p>;

  let ingredients = {};
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measurement = cocktail[`strMeasure${i}`];
    if (!ingredient) break;
    ingredients[ingredient] = measurement;
  }

  const instructions = cocktail.strInstructions
    .split(".")
    // Last element is an empty string
    .slice(0, -1);
  console.log(instructions);

  return (
    <>
      <h2>
        {cocktail.strDrink}
        <FavoriteButton
          cocktail={cocktail}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </h2>
      <section>
        <h3>Ingredients</h3>
        <ul>
          {Object.entries(ingredients).map(([ingredient, measurement]) => (
            <li key={ingredient}>
              {measurement ? `${ingredient} - ${measurement}` : ingredient}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Instructions</h3>
        <ul>
          {instructions.map((instruction) => (
            <li key={instruction}>{instruction}.</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default CocktailDetails;
