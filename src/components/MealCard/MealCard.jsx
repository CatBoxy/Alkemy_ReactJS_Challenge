import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BiTime } from 'react-icons/bi';
import { GiHeartPlus } from 'react-icons/gi';
import { useMenu } from '../../context/MenuProvider';
import { useState } from 'react';
import DishModal from '../DishModal/DishModal';
import usePriceFormat from '../../hooks/usePriceFormat';
import { Styles, CardBottom } from './styles';

export default function MealCard({ dish, screen }) {
  const { menu, addDish, deleteDish } = useMenu();
  const[ modalShow, setModalShow ] = useState(false);

  const isDishInMenu = menu.find(item => item.id === dish.id);
  const priceToUsd = dish.pricePerServing / 100;
  const [ formattedPrice ] = usePriceFormat({ price: priceToUsd });

  const veganProp = dish.vegan ? true : false;

  return (
    <>
      <Styles>
        <Card bsPrefix="card" veganProp={veganProp} screenProp={screen}>
          <Card.Img src={dish.image} bsPrefix='image'/>
          <Card.Body className="cardBody" >
            <div>
              <Card.Title bsPrefix="title">{dish.title}</Card.Title>
              {veganProp &&
            (<Card.Subtitle className="mb-2" bsPrefix="cardSubtitle">Vegano</Card.Subtitle>)
              }
              <div>
                <BiTime/>{` ${dish.readyInMinutes} `}
                <GiHeartPlus/>{` ${dish.healthScore} $${formattedPrice}`}
              </div>
            </div>

            <CardBottom >
              {screen === 'dishes' &&
              (<Button className="button" onClick={() => addDish(dish)}>Sumar al menu</Button>)}
              <Button className="button" onClick={() => setModalShow(true)}>Detalle</Button>
              {isDishInMenu !== undefined &&
              (<Button className="button" onClick={() => deleteDish(dish)}>X</Button>) }
            </CardBottom>
          </Card.Body>
        </Card>
        <DishModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          dish={dish}/>
      </Styles>
    </>
  );
}
