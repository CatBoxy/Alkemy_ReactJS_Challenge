import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import MealCard from '../MealCard/MealCard';
import { useMenu } from '../../context/MenuProvider';
import usePriceFormat from '../../hooks/usePriceFormat';
import { Styles, MenuContainer, Title, MenuBody, MenuFooter, MenuData, EmptyMenu, ButtonContainer } from './styles';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  const { menu, finalPrice, finalHealth, finalPrepTime, resetMenu } = useMenu();
  const [ precisePrice ] = usePriceFormat({ price: finalPrice });

  return (
    <>
      <Styles>
        <MenuContainer >
          <Title >Menu</Title>
          <MenuBody >
            {menu.length !== 0 ?
              (<Container className="cardsContainer">
                <Row xs={1} md={2} className="g-4">
                  {menu.map((dish, idx) => (
                    <Col className='menuCol' key={idx}>
                      <MealCard dish={dish} screen={'menu'}/>
                    </Col>
                  ))}
                </Row>
              </Container>) :
              (<EmptyMenu>
                <h2>Conozca nuestras opciones</h2>
                <Link to='/dishes'><Button className='button'>Explorar Platos</Button></Link>
              </EmptyMenu>)}
          </MenuBody>
          <MenuFooter >
            <MenuData>Health Score: {finalHealth}</MenuData>
            <MenuData>Tiempo de preparacion: {finalPrepTime} min</MenuData>
            <MenuData>Total: ${precisePrice}</MenuData>
            <ButtonContainer>
              <Button className="button" id="resetButton" onClick={() => resetMenu()}>Reiniciar Menu</Button>
            </ButtonContainer>
          </MenuFooter>
        </MenuContainer>
      </Styles>
    </>
  );
};
