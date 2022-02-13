import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import useDishes from '../hooks/useDishes';

export default function DishesPage() {
  const { dishes, getDishes } = useDishes();
  const { isLoading, setIsLoading } = useState(true);

  return (
    <>
      <h1>
        Dishes
      </h1>
      <SearchForm getDishes={getDishes}/>
      <SearchResults dishes={dishes}/>
    </>
  );
}
