// Calc BTW
function btwCalc(price) {
  const BTW = 21;
  return (price / 100) * (BTW + 100);
}

function logPriceCalc(event) {
  // get quantity of products
  const quantity = document.getElementById("quantity").value;

  // get price - BTW
  const price = (document.getElementById("price").innerHTML = 1.25 * quantity);

  // get price incl. BTW
  const totalPrice = (document.getElementById("priceTotal").innerHTML = btwCalc(
    price
  ).toFixed(2));

  // get BTW
  const btwPrice = (document.getElementById("priceBTW").innerHTML =
    totalPrice - price);

  console.log("quantity", quantity);
  console.log("price", price);
  console.log("BTWprice", btwPrice);

  event.preventDefault();
}

const priceCalculator = document.querySelector("#priceCalculator");
priceCalculator.addEventListener("submit", logPriceCalc);
