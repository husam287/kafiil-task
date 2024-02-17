class ReviewBar extends HTMLElement {
  constructor() {
    super();
  }

  getHtml() {
    return /*html*/ `
    <div class="review-bar-container">
      <div class="review-bar" review="${this.getAttribute("review") || "4"}">
          <div></div>
      </div>

      <span>${this.getAttribute("review") || "4"}</span>
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
}

customElements.define("review-bar", ReviewBar);
