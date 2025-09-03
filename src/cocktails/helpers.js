/**
 * List cocktails by first letter.
 *
 * Param:
 *   - `letter` default is `"a"`
 */
export async function fetchCocktails(letter = "a") {
  const API_BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

  const response = await fetch(`${API_BASE_URL}search.php?f=${letter}`);
  if (!response.ok) throw new Error(response.status);

  const data = await response.json();
  return data.drinks ? data.drinks : [];
}
