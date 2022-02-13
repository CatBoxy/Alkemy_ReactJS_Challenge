import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import MealCard from './MealCard';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchResults({ dishes }) {

  return (
    <>

      <Container >
        <Row xs={1} md={2} lg={4} className="g-4">
          {dishes.map((dish, idx) => (
            <Col key={idx}>
              <MealCard dish={dish} screen={'dishes'}/>
            </Col>
          ))}
        </Row>
      </Container>

    </>
  );
}
