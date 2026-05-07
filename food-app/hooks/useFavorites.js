import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@meals_favorites_v1';

export function useFavorites() {
  const [favorites, setFavorites] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(KEY).then((json) => {
      if (json) setFavorites(JSON.parse(json));
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const persist = useCallback((next) => {
    setFavorites(next);
    AsyncStorage.setItem(KEY, JSON.stringify(next)).catch(() => {});
  }, []);

  const toggle = useCallback((meal) => {
    persist((prev) => {
      const copy = { ...prev };
      if (copy[meal.idMeal]) delete copy[meal.idMeal];
      else copy[meal.idMeal] = meal;
      return copy;
    });
  }, [persist]);

  const isFavorite = useCallback((id) => !!favorites[id], [favorites]);

  return { favorites, loading, toggle, isFavorite, setFavorites: persist };
}
