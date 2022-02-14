import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import useDishes from '../hooks/useDishes';

export default function DishesPage() {
  const { dishes, getDishes, isLoading, setIsLoading } = useDishes();

  return (
    <>
      <h1>
        Dishes
      </h1>
      <SearchForm getDishes={getDishes} setIsLoading={setIsLoading}/>
      <SearchResults dishes={dishes} isLoading={isLoading}/>
    </>
  );
}
