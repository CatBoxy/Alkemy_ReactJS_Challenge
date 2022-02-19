import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import useDishes from '../../hooks/useDishes';
import { Styles } from './styles';

export default function DishesLayout() {
  const { dishes, getDishes, isLoading, setIsLoading } = useDishes();

  return (
    <>
      <Styles>
        <h1 className="title">
        Platos
        </h1>
        <SearchForm getDishes={getDishes} setIsLoading={setIsLoading} isLoading={isLoading}/>
        <SearchResults dishes={dishes} isLoading={isLoading}/>
      </Styles>
    </>
  );
}
