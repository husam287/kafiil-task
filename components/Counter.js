class Counter extends HTMLElement {
  productPrice = document
    .querySelector(".price-container")
    .getAttribute("price");

  priceText = document.querySelector(".price-container span");

  constructor() {
    super();
  }

  getHtml() {
    return /*html*/ `
        <div id="counter-control">
          <button class="btn btn-minus">
            <img src="../assets/icons/minus.svg" alt="minus">
          </button>

          <input type="number" name="services" value="1">

          <button class="btn btn-plus">
            <img src="../assets/icons/plus.svg" alt="plus">
          </button>
        </div>
        `;
  }

  onClickMinusBtn() {
    const minusBtn = this.querySelector(".btn-minus");
    const counterInput = this.querySelector("input");

    minusBtn.addEventListener("click", () => {
      const currentValue = +counterInput.value;
      if (currentValue <= 1) return;

      counterInput.value = currentValue - 1;
      const event = new Event("input");
      counterInput.dispatchEvent(event);
    });
  }

  onClickAddBtn() {
    const plusBtn = this.querySelector(".btn-plus");
    const counterInput = this.querySelector("input");

    plusBtn.addEventListener("click", () => {
      const currentValue = +counterInput.value;

      counterInput.value = currentValue + 1;
      const event = new Event("input");
      counterInput.dispatchEvent(event);
    });
  }

  onValueChange() {
    const counterInput = this.querySelector("input");

    counterInput.addEventListener("input", () => {
      this.priceText.innerHTML = `$${+counterInput.value * +this.productPrice}`;
    });
  }

  render() {
    this.innerHTML = this.getHtml();
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;

      this.onClickMinusBtn();
      this.onClickAddBtn();
      this.onValueChange();
    }
  }

  // static get observedAttributes() { // (3)
  //   return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];
  // }

  // attributeChangedCallback(name, oldValue, newValue) { // (4)
  //   this.render();
  // }
}

customElements.define("counter-control", Counter);
