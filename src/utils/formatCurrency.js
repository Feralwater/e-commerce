export default function formatCurrency(prices, currency) {
  const price = Number(prices.find((x) => x.currency === currency).amount.toFixed(2)).toLocaleString();
  switch (currency) {
    case 'USD':
    case 'AUD':
      return {
        icon: '$',
        price,
      };
    case 'GBP':
      return {
        icon: '£',
        price,
      };
    case 'JPY':
      return {
        icon: '¥',
        price,
      };
    case 'RUB':
      return {
        icon: '₽',
        price,
      };
    default:
      throw new Error('something went wrong.');
  }
}
