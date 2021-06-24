export default function formatCurrency(prices, currency) {
  const price = Number(prices.find(x => x.currency === currency).amount.toFixed(2)).toLocaleString();
  switch (currency) {
    case "USD":
      return "$" + price
    case "GBP":
      return "£" + price
    case "AUD":
      return "$" + price
    case "JPY":
      return "¥" + price
    case "RUB":
      return "₽" + price
  }
}
