import React, { useState, useEffect } from 'react';
import { fetchDishes, fetchNoQueryDishes } from '../services/requests';

export default function useDishes(values) {
  const [ dishes, setDishes ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const MainRecipes = await fetchNoQueryDishes();
      setDishes(MainRecipes);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const getDishes = async (values) => {
    const myDishes = await fetchDishes(values);
    if(myDishes) {
      setDishes(myDishes);
      setIsLoading(false);
    }
  };

  return {
    getDishes,
    dishes,
    isLoading,
    setIsLoading,
  };
}