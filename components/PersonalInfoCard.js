class PersonalInfoCard extends HTMLElement {
  constructor() {
    super();
  }

  getHtml() {
    return /*html*/ `
        <div class="personal-info">
            <div class="profile-pic">
                <img src="../assets/images/person2.jpeg" alt="hossam sherif" />
                <div class="online-dot"></div>
            </div>

            <div class="personal-name">
                <span>Hossam Sherif</span>
                <img src="../assets/icons/verify.svg" alt="hossam sherif" />
            </div>

            <div class="personal-location">
                <img src="../assets/icons/pin.svg" alt="cairo" />
                <span>Cairo, Egypt</span>
            </div>

            <div class="personal-rate">
                <review-stars></review-stars>
                <span>4.1 (500)</span>
            </div>

            <div class="personal-btns">
                <button class="btn">
                    <img src="../assets/icons/badge.svg" alt="badge">
                </button>

                <button class="btn">
                    <img src="../assets/icons/login.svg" alt="login">
                </button>

                <button class="btn">
                    <img src="../assets/icons/info.svg" alt="info">
                </button>
            </div>

            <p class="personal-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                Lorem ipsum dolor sit amet..
            </p>

            <a class="btn contactus-btn" href="https://www.linkedin.com/in/hossamsherif28/">
                Contact us
            </a>
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

customElements.define("personal-info", PersonalInfoCard);
