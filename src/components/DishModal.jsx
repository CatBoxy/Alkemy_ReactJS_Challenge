import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { stripHtml } from 'string-strip-html';
import { useMenu } from '../context/MenuProvider';
import { BiTime } from 'react-icons/bi';
import { GiHeartPlus } from 'react-icons/gi';
import usePriceFormat from '../hooks/usePriceFormat';

export default function DishModal(props) {
  const dishContent = stripHtml(props.dish.summary).result;
  const { menu, addDish, deleteDish, finalPrice, finalHealth, finalPrepTime } = useMenu();

  const isDishInMenu = menu.find(item => item.id === props.dish.id);

  const priceToUsd = props.dish.pricePerServing / 100;
  const [ currentMenuPrice ] = usePriceFormat({ price: finalPrice });

  const newMenuPrice = priceToUsd + finalPrice;
  const [ newMenuPrecisePrice ] = usePriceFormat({ price: newMenuPrice });

  const updatedMenu = {
    menuPrice: newMenuPrecisePrice,
    menuPrepTime: finalPrepTime + props.dish.readyInMinutes,
    menuHealth: finalHealth + props.dish.healthScore,
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.dish.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.dish.vegan &&
            (<h5 className="mb-2" style={{ color: 'green' }}>Vegan</h5>)
          }
          <div style={{ display: 'flex', justifyContent: 'row' }}>
            <img src={props.dish.image}/>
            <div>
              <div>
                <h5>Your Current Menu</h5>
                <BiTime/>{' '}{finalPrepTime}{' '}
                <GiHeartPlus/>{' '}{finalHealth}{'  $'}{currentMenuPrice}
              </div>
              <div>
                <h5>Your Menu + {props.dish.title}</h5>
                <BiTime/>{' '}{updatedMenu.menuPrepTime}{' '}
                <GiHeartPlus/>{' '}{updatedMenu.menuHealth}{'  $'}{updatedMenu.menuPrice}
              </div>
            </div>
          </div>
          <p>
            {dishContent}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => addDish(props.dish)}>Add to menu</Button>
          <Button onClick={props.onHide}>Close</Button>
          {isDishInMenu !== undefined && (<Button onClick={() => deleteDish(props.dish)}>X</Button>) }
        </Modal.Footer>
      </Modal>
    </>
  );
}
