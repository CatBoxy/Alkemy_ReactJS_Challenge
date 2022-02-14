import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import MealCard from './MealCard';
import Loader from './Loader';

export default function SearchResults({ dishes, isLoading }) {

  return (
    <>

      {isLoading ? <Loader/>
        : <Container >
          <Row xs={1} md={2} lg={4} className="g-4">
            {dishes.map((dish, idx) => (
              <Col key={idx}>
                <MealCard dish={dish} screen={'dishes'}/>
              </Col>
            ))}
          </Row>
        </Container>}

    </>
  );
}
