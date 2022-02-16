import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import MealCard from '../MealCard/MealCard';
import { useMenu } from '../../context/MenuProvider';
import usePriceFormat from '../../hooks/usePriceFormat';
import { Styles } from './styles';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  const { menu, finalPrice, finalHealth, finalPrepTime, resetMenu } = useMenu();
  const [ precisePrice ] = usePriceFormat({ price: finalPrice });

  return (
    <>
      <Styles>
        <Container className="mainContainer">
          <div className="menuContainer">
            <h1 className="title">Menu</h1>
            {menu.length !== 0 ?
              (<Container className="cardsContainer">
                <Row xs={1} md={2} className="g-4">
                  {menu.map((dish, idx) => (
                    <Col key={idx}>
                      <MealCard dish={dish} screen={'menu'}/>
                    </Col>
                  ))}
                </Row>
              </Container>) :
              (<div className="emptyMenu">
                <h2>Conozca nuestras opciones</h2>
                <Link to='/dishes'><Button className='button'>Explorar Platos</Button></Link>
              </div>)}
            <div className="menuFooter">
              <div>
                <Button className="button" onClick={() => resetMenu()}>Reiniciar Menu</Button>
              </div>
              <div className="dataContainer">Health Score: {finalHealth}</div>
              <div className="dataContainer">Tiempo de preparacion: {finalPrepTime} min</div>
              <div className="dataContainer">Total: ${precisePrice}</div>
            </div>
          </div>
        </Container>
      </Styles>
    </>
  );
};
