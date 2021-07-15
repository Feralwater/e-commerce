import { ADD_TO_CART, DECREMENT_IN_CART } from '../types';

const prepare = (attributes) => JSON.stringify(Object.entries(attributes).sort((x, y) => (x[0] > y[0] ? -1 : 1)));

export const addToCart = (product, attributes) => (dispatch, getState) => {
  const cartItems = [...getState().cart.cartItems];
  const cartCurrentItem = cartItems.find((x) => {
    const s = prepare(x.params);
    const s1 = prepare(attributes);
    return x.name === product.name && s === s1;
  });
  if (cartCurrentItem) {
    cartCurrentItem.count++;
  } else {
    cartItems.push({ ...product, count: 1, params: attributes });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const counterDecrement = (product) => (dispatch, getState) => {
  let cartItems = [...getState().cart.cartItems];
  const cartCurrentItem = cartItems.find((x) => x.name === product.name && JSON.stringify(x.params) === JSON.stringify(product.params));

  if (cartCurrentItem) {
    cartCurrentItem.count--;
  }

  cartItems = cartItems.filter((x) => x.count !== 0);
  dispatch({
    type: DECREMENT_IN_CART,
    payload: { cartItems },
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const counterIncrement = (product) => (dispatch, getState) => {
  let cartItems = [...getState().cart.cartItems];
  const cartCurrentItem = cartItems.find((x) => x.name === product.name && JSON.stringify(x.params) === JSON.stringify(product.params));

  if (cartCurrentItem) {
    cartCurrentItem.count++;
  }

  cartItems = cartItems.filter((x) => x.count !== 0);
  dispatch({
    type: DECREMENT_IN_CART,
    payload: { cartItems },
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
