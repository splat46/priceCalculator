const price = document.getElementById("price").innerHTML;
const totalPrice = (document.getElementById("priceTotal").innerHTML = btwCalc(
  price
));
const btwPrice = (document.getElementById("priceBTW").innerHTML =
  totalPrice - price);

function btwCalc(cost) {
  const BTW = 21;
  return (cost / 100) * (BTW + 100);
}

const quantity = document.getElementById("quantity").value;

console.log(quantity);
