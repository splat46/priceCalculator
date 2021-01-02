// get price incl. BTW
const totalPrice = (document.getElementById("priceTotal").innerHTML = btwCalc(
  price
).toFixed(2));

function logPriceCalc(event) {
  // get quantity of products
  const quantity = document.getElementById("quantity").value;
  console.log(quantity);

  // get price - BTW
  const price = (document.getElementById("price").innerHTML = 0.8 * quantity);

  event.preventDefault();
}

// get BTW
const btwPrice = (document.getElementById("priceBTW").innerHTML =
  totalPrice - price);

// Calc BTW
function btwCalc(price) {
  const BTW = 21;
  return (price / 100) * (BTW + 100);
}

const priceCalculator = document.querySelector("#priceCalculator");
priceCalculator.addEventListener("submit", logPriceCalc);
