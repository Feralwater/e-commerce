import {ADD_TO_CART, DECREMENT_IN_CART} from "../types";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach(x => {
    if (x.name === product.name) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({...product, count: 1})
  }
  dispatch({
    type: ADD_TO_CART,
    payload: {cartItems}
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const counterDecrement = (product) => (dispatch, getState) => {
  let cartItems = getState().cart.cartItems.slice();
  cartItems.forEach(x => {
    if (x.name === product.name && x.count > 0) {
      x.count--;
    }
  });
  cartItems = cartItems.filter(x => x.count !== 0);
  dispatch({
    type: DECREMENT_IN_CART,
    payload: {cartItems}
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}
