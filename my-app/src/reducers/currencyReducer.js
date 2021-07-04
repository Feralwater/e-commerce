import { CHANGE_CURRENCY } from '../types';

export const currencyReducer = (state = { currency: 'USD', icon: '$' }, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return {
        currency: action.payload.currency,
        icon: action.payload.icon,
      };
    default:
      return state;
  }
};
