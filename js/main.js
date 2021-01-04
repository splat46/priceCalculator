// Calc BTW
function btwCalc(price) {
  const BTW = 21;
  return (price / 100) * (BTW + 100);
}
const size = document.getElementsByName("size");
function checkPaperSize() {
  let i;
  for (i = 0; i < size.length; i++) {
    if (size[i].checked) {
      console.log("test", size[i].value);
    }
  }
}

function logPriceCalc(event) {
  // get quantity of products
  const quantity = document.getElementById("quantity").value;

  // get price - BTW
  const price = (document.getElementById("price").innerHTML = (
    1.25 * quantity
  ).toFixed(2));

  // get price incl. BTW
  const totalPrice = (document.getElementById("priceTotal").innerHTML = btwCalc(
    price
  ).toFixed(2));

  // get BTW
  const btwPrice = (document.getElementById("priceBTW").innerHTML = (
    totalPrice - price
  ).toFixed(2));
  checkPaperSize(() => {
    switch (size[i].value) {
      case "A5":
        let price = price / 2;
        break;
      case "A6":
        alert("This is A6");
        break;
      case "A7":
        alert("This is A7");
        break;
      default:
        alert("This is A4");
    }
  });

  console.log("quantity", quantity);
  console.log("price", price);
  console.log("BTWprice", btwPrice);

  event.preventDefault();
}

const priceCalculator = document.querySelector("#priceCalculator");
priceCalculator.addEventListener("submit", logPriceCalc);
