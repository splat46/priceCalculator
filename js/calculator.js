class Calculator {
  constructor() {
    this.quantity = 1;
    this.size = 4;
    this.color = true;
    this.paper = 80;
    this.basePrice = 1.25;

    this.subtotal = 0;
    this.vat = 21;
    this.total = 0;

    this.calculate();
  }

  updateQuantity(quantity) {
    this.quantity = quantity;
    this.calculate();
  }

  updateSize(size) {
    this.size = size;
    this.calculate();
  }

  updateColor(color) {
    this.color = color;
    this.calculate();
  }

  updatePaper(paper) {
    this.paper = paper;
    this.calculate();
  }

  calculatePaperPrice(price) {
    if (this.size === 4) return price;
    if (this.size === 5) return price / 2;
    if (this.size === 6) return price / 4;
    if (this.size === 7) return price / 8;

    alert("Paper size not available");
  }

  calculate() {
    let subtotal = this.basePrice;

    subtotal = this.calculatePaperPrice(subtotal);
    subtotal = subtotal * this.quantity;

    this.subtotal = subtotal;
    this.vat = this.subtotal * 0.21;
    this.total = this.subtotal + this.vat;

    document.getElementById("subtotal").innerHTML = this.subtotal.toFixed(2);
    document.getElementById("vat").innerHTML = this.vat.toFixed(2);
    document.getElementById("total").innerHTML = this.total.toFixed(2);
  }
}
