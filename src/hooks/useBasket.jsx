import { useContext } from 'react';
import { BasketContext } from '../context/BasketContext';

export const useBasket = () => {
  const { cart, dispatch, state, open} = useContext(BasketContext) 
  
  return { 
    cart,
    dispatch,
    state, 
    open
  };
}