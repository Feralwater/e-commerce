import { ADD_TO_CART, DECREMENT_IN_CART } from '../types';

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]') },
  action,
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case DECREMENT_IN_CART:
      return { cartItems: action.payload.cartItems };
    default:
      return state;
  }
};
