import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MealCard from './MealCard';
import swal from 'sweetalert';
import { useMenu } from '../context/MenuProvider';
import usePriceFormat from '../hooks/usePriceFormat';

export default function MainMenu() {
  const { menu, finalPrice, finalHealth, finalPrepTime } = useMenu();
  const [ precisePrice ] = usePriceFormat({ price: finalPrice });

  return (
    <>
      <h1>Menu</h1>
      {menu.length !== 0 ?
        (<Container style={{ maxWidth: '800px' }}>
          <Row xs={1} md={2} className="g-4">
            {menu.map((dish, idx) => (
              <Col key={idx}>
                <MealCard dish={dish} screen={'menu'}/>
              </Col>
            ))}
          </Row>
        </Container>) :
        (<h2>Por favor agregue platos al menu</h2>)}
      <Container>
        <Row>
          <Col>
            <Button>
            Reset Menu
            </Button>
          </Col>
          <Col>Final Price: ${precisePrice}</Col>
          <Col>Health Score: {finalHealth}</Col>
          <Col>Tiempo de preparacion: {finalPrepTime} min</Col>
        </Row>
      </Container>
    </>
  );
};
