class Stars extends HTMLElement {
  constructor() {
    super();
  }

  getHtml() {
    return /*html*/ `
        <div class="stars">
            <img src="assets/icons/star.svg" alt="star" />
            <img src="assets/icons/star.svg" alt="star" />
            <img src="assets/icons/star.svg" alt="star" />
            <img src="assets/icons/star.svg" alt="star" />
            <img src="assets/icons/star.svg" alt="star" />
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

customElements.define("review-stars", Stars);
