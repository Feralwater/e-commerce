import { CHANGE_CURRENCY } from '../types';

export const changeCurrency = (currency) => (dispatch) => {
  let icon;
  switch (currency) {
    case 'USD':
      icon = '$';
      break;
    case 'GBP':
      icon = '£';
      break;
    case 'AUD':
      icon = '$';
      break;
    case 'JPY':
      icon = '¥';
      break;
    case 'RUB':
      icon = '₽';
      break;
    default:
      icon = '$';
      break;
  }
  dispatch({
    type: CHANGE_CURRENCY,
    payload: { currency, icon },
  });
};
