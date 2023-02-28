import { Order } from '../types/Order';

export function useTotal( order : Order | null){
  const total = order?.products.reduce((acc, { product, quantity }) => {
    return acc += (product.price * quantity );
  }, 0);

  return total;
}
