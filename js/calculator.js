class Calculator {
  constructor() {
    this.quantity = 1;
    this.size = 4;
    this.color = true;
    this.type = true;
    this.border = false;
    this.paper = 80;
    this.basePrice = 0;

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

  updateType(type) {
    this.type = type;
    this.calculate();
  }

  updateBorder(border) {
    this.border = border;
    this.calculate();
  }

  updatePaper(paper) {
    this.paper = paper;
    this.calculate();
  }

  calculateSizePrice(price) {
    if (this.size === 4) return price;
    if (this.size === 5) return price / 2;
    if (this.size === 6) return price / 4;
    if (this.size === 7) return price / 8;

    alert("Paper size not available");
  }

  calculateColorPrice(price) {
    if (this.color === false) return price + 0.1;
    if (this.color === true) return price + 0.5;

    alert("Color not available");
  }

  calculateTypePrice(price) {
    if (this.type === true) return price;
    if (this.type === false) return price * 2;
    if (this.type === 1) return price + 4.95;

    alert("Type not available");
  }

  calculateBorderPrice(price) {
    if (this.border === false) return price;
    if (this.border.checked === true) return price + 4.95;

    alert("Border not available");
  }

  calculatePaperPrice(price) {
    if (this.paper === 80) return price;
    if (this.paper === 100) return price + 0.05;
    if (this.paper === 120) return price + 0.08;
    if (this.paper === 160) return price + 0.13;
    if (this.paper === 200) return price + 0.16;
    if (this.paper === 300) return price + 0.3;

    alert("Paper not available");
  }

  calculate() {
    let subtotal = this.basePrice;

    subtotal = this.calculateColorPrice(subtotal);
    subtotal = this.calculateSizePrice(subtotal);
    subtotal = this.calculateTypePrice(subtotal);
    subtotal = this.calculateBorderPrice(subtotal);
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
