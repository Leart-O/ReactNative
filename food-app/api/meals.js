const BASE = 'https://www.themealdb.com/api/json/v1/1/';

async function fetchJSON(path) {
  const res = await fetch(BASE + path);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

export async function searchMeals(q) {
  const data = await fetchJSON(`search.php?s=${encodeURIComponent(q)}`);
  return data.meals || [];
}

export async function getRandomMeal() {
  const data = await fetchJSON('random.php');
  return (data.meals && data.meals[0]) || null;
}

export async function lookupMeal(id) {
  const data = await fetchJSON(`lookup.php?i=${id}`);
  return (data.meals && data.meals[0]) || null;
}

export async function listCategories() {
  const data = await fetchJSON('categories.php');
  return data.categories || [];
}

export async function filterByCategory(category) {
  const data = await fetchJSON(`filter.php?c=${encodeURIComponent(category)}`);
  return data.meals || [];
}

export async function filterByArea(area) {
  const data = await fetchJSON(`filter.php?a=${encodeURIComponent(area)}`);
  return data.meals || [];
}

export async function filterByIngredient(ingredient) {
  const data = await fetchJSON(`filter.php?i=${encodeURIComponent(ingredient)}`);
  return data.meals || [];
}

export default {
  searchMeals,
  getRandomMeal,
  lookupMeal,
  listCategories,
  filterByCategory,
  filterByArea,
  filterByIngredient,
};
