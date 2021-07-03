export default function formatCurrency(prices, currency) {
  const price = Number(prices.find(x => x.currency === currency).amount.toFixed(2)).toLocaleString();
  switch (currency) {
    case "USD":
      return {
        icon: "$",
        price: price,
      }
    case "GBP":
      return {
        icon: "£",
        price: price,
      }
    case "AUD":
      return {
        icon: "$",
        price: price,
      }
    case "JPY":
      return {
        icon: "¥",
        price: price,
      }
    case "RUB":
      return {
        icon: "₽",
        price: price,
      }
    default:
      return {
        icon: "$",
        price: price,
      }
  }
}
