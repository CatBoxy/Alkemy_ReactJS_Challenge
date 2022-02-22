import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { stripHtml } from 'string-strip-html';
import { useMenu } from '../../context/MenuProvider';
import { BiTime } from 'react-icons/bi';
import { GiHeartPlus } from 'react-icons/gi';
import usePriceFormat from '../../hooks/usePriceFormat';


export default function DishModal(props) {

  const { menu, addDish, deleteDish, finalPrice, finalHealth, finalPrepTime } = useMenu();
  const [ currentMenuPrice ] = usePriceFormat({ price: finalPrice });
  const dishContent = stripHtml(props.dish.summary).result; // Formats html content to plain string

  const isDishInMenu = menu.find(item => item.id === props.dish.id);

  const priceToUsd = props.dish.pricePerServing / 100;

  const newMenuPrice = priceToUsd + finalPrice;
  const [ newMenuPrecisePrice ] = usePriceFormat({ price: newMenuPrice }); // formats price to correct number of decimals

  const updatedMenu = {
    menuPrice: newMenuPrecisePrice,
    menuPrepTime: finalPrepTime + props.dish.readyInMinutes,
    menuHealth: finalHealth + props.dish.healthScore,
  };

  return (
    <>

      <Modal
        contentClassName="modalStyles"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton closeVariant="white" bsPrefix="modalHeader">
          <Modal.Title id="contained-modal-title-vcenter" bsPrefix="modalTitle">
            {props.dish.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.dish.vegan &&
            (<h5 className="mb-2" style={{ color: 'green' }}>Vegano</h5>)
          }
          <div className="modalDishInfo">
            <img src={props.dish.image}/>
            <div className='modalMenus'>
              <div>
                <h5>Su Menu</h5>
                <BiTime/>{' '}{finalPrepTime}{' '}
                <GiHeartPlus/>{' '}{finalHealth}{'  $'}{currentMenuPrice}
              </div>
              <div>
                <h5>Su Menu + Plato</h5>
                <BiTime/>{' '}{updatedMenu.menuPrepTime}{' '}
                <GiHeartPlus/>{' '}{updatedMenu.menuHealth}{'  $'}{updatedMenu.menuPrice}
              </div>
            </div>
          </div>
          <p className='modalP'>
            {dishContent}
          </p>
        </Modal.Body>
        <Modal.Footer bsPrefix="modalFooter">
          <Button onClick={() => addDish(props.dish)}>Sumar al Menu</Button>
          {isDishInMenu !== undefined && (<Button onClick={() => deleteDish(props.dish)}>Remover del Menu</Button>) }
        </Modal.Footer>
      </Modal>

    </>
  );
}
