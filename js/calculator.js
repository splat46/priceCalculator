class Calculator {
  constructor() {
    this.quantity = 1;
    this.size = 4;
    this.color = true;
    this.paper = 80;

    this.subtotal = 0;
    this.vat = 0;
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

  calculate() {
    // TODO: Fix caculator

    this.total = this.subtotal + this.vat;

    console.log(this);

    document.getElementById("subtotal").innerHTML = this.subtotal.toFixed(2);
    document.getElementById("vat").innerHTML = this.vat.toFixed(2);
    document.getElementById("total").innerHTML = this.total.toFixed(2);
  }
}
