import { useState, useEffect, useCallback } from 'react';
import * as mealsAPI from '../api/meals';

export function useMealsHome() {
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [cats] = await Promise.all([mealsAPI.listCategories()]);
      setCategories(cats);

      // fetch some featured random meals (3)
      const r1 = await mealsAPI.getRandomMeal();
      const r2 = await mealsAPI.getRandomMeal();
      const r3 = await mealsAPI.getRandomMeal();
      setFeatured([r1, r2, r3].filter(Boolean));

      // trending: use first category to fetch some items
      if (cats && cats[0]) {
        const catName = cats[0].strCategory;
        const trend = await mealsAPI.filterByCategory(catName);
        setTrending(trend.slice(0, 8));
      }
    } catch (e) {
      setError(e.message || String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { featured, categories, trending, loading, error, refresh: load };
}

export function useSearch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (q) => {
    setLoading(true);
    setError(null);
    try {
      const res = await mealsAPI.searchMeals(q);
      setResults(res || []);
    } catch (e) {
      setError(e.message || String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, error, search };
}
