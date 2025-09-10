/**
 * Fetch list of cocktails by the first letter of the name, given as an
 * argument, then return the list alphabetically sorted.
 */
export async function fetchCocktails(cookbookIndex) {
  const API_BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

  const response = await fetch(`${API_BASE_URL}search.php?f=${cookbookIndex}`);
  if (!response.ok) throw new Error(response.status);

  const data = await response.json();
  return data.drinks
    ? data.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink))
    : [];
}

/**
 * Returns an array of the alphabet in capital letters.
 */
export function createAlphabetList() {
  const A_INDEX = 65;
  const Z_INDEX = 90;
  let alphabet = [];
  for (let i = A_INDEX; i <= Z_INDEX; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet;
}
