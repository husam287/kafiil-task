class ProductHeader extends HTMLElement {
  constructor() {
    super();
  }

  getHtml() {
    return /*html*/ `
      <div id="productHeader">
        <span class="subtitle">Design / Logo Design</span>
        <h1 class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet, </h1>
      
        <div class="productHeader--row">
          <div class="rate">
            <img src="../assets/icons/star.svg" alt="star" />
            <img src="../assets/icons/star.svg" alt="star" />
            <img src="../assets/icons/star.svg" alt="star" />
            <img src="../assets/icons/star.svg" alt="star" />
            <img src="../assets/icons/star.svg" alt="star" />
      
            <div>
              <span>4.1</span>
              <span> (500)</span>
            </div>
          </div>
      
          <div>
            <img src="../assets/icons/share.svg" alt="share" />
            <img src="../assets/icons/heart.svg" alt="favouite" />
          </div>
        </div>
      </div>
      `;
  }

  render() {
    this.innerHTML = this.getHtml();
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  // static get observedAttributes() { // (3)
  //   return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];
  // }

  // attributeChangedCallback(name, oldValue, newValue) { // (4)
  //   this.render();
  // }
}

customElements.define("product-header", ProductHeader);
