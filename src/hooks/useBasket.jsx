import { useContext } from 'react';
import { BasketContext } from '../context/BasketContext';

function useBasket() {
  const { basket } = useContext(BasketContext) 
  
  return { basket };
}

export default useBasket;