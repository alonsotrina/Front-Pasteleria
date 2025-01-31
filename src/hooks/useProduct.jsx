import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

function useProduct() {
  const { products } = useContext(ProductContext) 
  
  return { products };
}

export default useProduct;