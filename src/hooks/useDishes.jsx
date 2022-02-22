import { useState, useEffect } from 'react';
import { fetchDishes, fetchNoQueryDishes } from '../services/requests';
import swal from 'sweetalert';

export default function useDishes(values) {
  const [ dishes, setDishes ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => { // fetch dishes whenever dishesScreen loads
    async function fetchData() {
      const MainRecipes = await fetchNoQueryDishes();
      setDishes(MainRecipes);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const getDishes = async (values) => {
    const myDishes = await fetchDishes(values);
    if (myDishes.length === 0) {
      swal('No existen platos con ese nombre, por favor modifique su busqueda');
      setIsLoading(false);
      return;
    }
    setDishes(myDishes);
    setIsLoading(false);
  };

  return {
    getDishes,
    dishes,
    isLoading,
    setIsLoading,
  };
}