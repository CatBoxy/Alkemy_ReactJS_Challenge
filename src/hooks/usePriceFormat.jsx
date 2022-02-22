import { useState, useEffect } from 'react';

export default function usePriceFormat({ price }) {
  const [ formattedPrice, setFormattedPrice ] = useState();

  useEffect(() => { // formats price int to correct number of decimals
    const formatPrice = () => {
      let newFormattedPrice = price.toPrecision(3);
      if (newFormattedPrice.length === 5) {
        newFormattedPrice = newFormattedPrice.slice(0, -1);
      }
      setFormattedPrice(newFormattedPrice);
    };
    formatPrice();
  }, [ price ]);

  return [ formattedPrice ];
}
