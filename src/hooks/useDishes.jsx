import React, { useState, useEffect } from 'react';
import { fetchDishes, fetchNoQueryDishes } from '../services/requests';

export default function useDishes(values) {
  const [ dishes, setDishes ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const MainRecipes = await fetchNoQueryDishes();
      setDishes(MainRecipes);
    };
    fetchData();
  }, []);

  const getDishes = async (values) => {
    const myDishes = await fetchDishes(values);
    if(myDishes) {
      setDishes(myDishes);
    }
  };

  return {
    getDishes,
    dishes,
  };
}