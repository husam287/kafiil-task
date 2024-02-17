class SocialRow extends HTMLElement {
  constructor() {
    super();
  }

  getHtml() {
    return /*html*/ `
          <div class="social">
              <a href="https://www.linkedin.com/in/hossamsherif28/">
                <img src="assets/icons/linkedin.svg" alt="linked-in">
              </a>

              <a href="https://www.linkedin.com/in/hossamsherif28/">
                <img src="assets/icons/facebook.svg" alt="facebook">
              </a>

              <a href="https://wa.me/+201129000383">
                <img src="assets/icons/whatsapp.svg" alt="whats-up">
              </a>

              <a href="https://www.linkedin.com/in/hossamsherif28/">
                <img src="assets/icons/twitter.svg" alt="tweeter">
              </a>

              <div class="copyBtn" role="button">
                <img src="assets/icons/copy.svg" alt="copy">
              </div>
          </div>
          `;
  }

  onClickCopy() {
    this.querySelector(".copyBtn").addEventListener("click", () => {
      navigator.clipboard.writeText(
        "https://www.linkedin.com/in/hossamsherif28/"
      );
      alert("Copied to clipboard!");
    });
  }

  render() {
    this.innerHTML = this.getHtml();
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;

      this.onClickCopy();
    }
  }

  // static get observedAttributes() { // (3)
  //   return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];
  // }

  // attributeChangedCallback(name, oldValue, newValue) { // (4)
  //   this.render();
  // }
}

customElements.define("social-row", SocialRow);
