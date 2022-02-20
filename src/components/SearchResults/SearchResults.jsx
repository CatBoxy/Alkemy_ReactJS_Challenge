import React from 'react';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import MealCard from '../MealCard/MealCard';
import { Styles } from './styles';

export default function SearchResults({ dishes, isLoading }) {

  return (
    <>
      <Styles>
        <div className="gridContainer">
          {isLoading ? <Spinner animation="border" variant="warning" />
            : <Container>
              <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {dishes.map((dish, idx) => (
                  <Col key={idx}>
                    <MealCard dish={dish} screen={'dishes'}/>
                  </Col>
                ))}
              </Row>
            </Container>}
        </div>
      </Styles>
    </>
  );
}
