import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiTime } from 'react-icons/bi';
import { GiHeartPlus } from 'react-icons/gi';
import { useMenu } from '../context/MenuProvider';
import { useState } from 'react';
import DishModal from './DishModal';
import usePriceFormat from '../hooks/usePriceFormat';

export default function MealCard({ dish, screen }) {
  const { menu, addDish, deleteDish } = useMenu();
  const[ modalShow, setModalShow ] = useState(false);

  const isDishInMenu = menu.find(item => item.id === dish.id);
  const priceToUsd = dish.pricePerServing / 100;
  const [ formattedPrice ] = usePriceFormat({ price: priceToUsd });

  return (
    <>
      <Card style={ { color: '#000' }}>
        <Card.Img variant="top" src={dish.image} />
        <Card.Body style={{ textAlign: 'left' }}>
          <Card.Title>{dish.title}</Card.Title>
          {dish.vegan &&
            (<Card.Subtitle className="mb-2" style={{ color: 'green' }}>Vegan</Card.Subtitle>)
          }
          <ListGroup variant="flush">
            <ListGroup.Item><BiTime/>{' '}{dish.readyInMinutes}{' '}
              <GiHeartPlus/>{' '}{dish.healthScore}{'  $'}{formattedPrice}</ListGroup.Item>

          </ListGroup>
          <div style={{ justifyContent: 'space-between', display: 'flex' }}>
            {screen === 'dishes' && (<Button onClick={() => addDish(dish)}>Add to menu</Button>)}
            <Button onClick={() => setModalShow(true)}>Details</Button>
            {isDishInMenu !== undefined && (<Button onClick={() => deleteDish(dish)}>X</Button>) }
          </div>
        </Card.Body>
      </Card>
      <DishModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        dish={dish}/>
    </>
  );
}
