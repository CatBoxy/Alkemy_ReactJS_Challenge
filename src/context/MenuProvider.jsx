import React, { useContext, createContext, useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export default function MenuProvider({ children }) {
  const [ menu, setMenu ] = useState([]);
  const [ finalPrice, setFinalPrice ] = useState(0);
  const [ finalHealth, setFinalHealth ] = useState(0);
  const [ finalPrepTime, setFinalPrepTime ] = useState(0);

  useEffect(() => {
    let priceCount = 0;
    let healthCount = 0;
    let prepTimeCount = 0;
    if (menu.length > 0) {
      menu.forEach((item) => {
        priceCount += item.pricePerServing;
        healthCount += item.healthScore;
        prepTimeCount += item.readyInMinutes;
      });
    }
    const priceToUsd = priceCount / 100;
    setFinalPrice(priceToUsd);
    setFinalHealth(healthCount);
    setFinalPrepTime(prepTimeCount);
  }, [ menu ]);

  const addDish = (dish) => {
    if (menu.length === 4) {
      swal('Ooops! Tu menu ya esta completo, elimina uno mas platos para agregar otro');
      return;
    }
    const newMenu = menu.map(item => item);

    if (dish.vegan) {
      const veganArray = menu.filter(item => item.vegan === true);
      veganArray.length < 2 ? newMenu.push(dish) : swal('Ooops! Tu menu ya tiene 2 platos veganos, elimina uno o mas platos para agregar otro');
    }

    if (!dish.vegan) {
      const notVeganArray = menu.filter(item => item.vegan === false);
      notVeganArray.length < 2 ? newMenu.push(dish) : swal('Ooops! Tu menu ya tiene 2 platos no veganos, elimina uno o mas platos para agregar otro');
    }
    setMenu(newMenu);
  };

  const deleteDish = (dish) => {
    const newMenu = menu.map(item => item);
    const id = dish.id;
    const dishIndex = newMenu.findIndex(item => item.id === id);
    dishIndex !== -1 ? newMenu.splice(dishIndex, 1) : swal('Ooops! Tu menu no contiene este plato');
    setMenu(newMenu);
  };

  const resetMenu = () => {
    setMenu([]);
  };

  return (
    <MenuContext.Provider
      value = {{
        menu,
        addDish,
        deleteDish,
        finalPrice,
        finalHealth,
        finalPrepTime,
        resetMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
