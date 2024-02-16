class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = /*html*/ `
    <nav id="navbar">
  <div class="nav-container">
    <img class="logo" src="./assets/images/logo.png" alt="kafiil logo" />

    <ul class="main-navs">
      <li class="active-link">
        <a href="#">
          <img src="./assets/icons/cart.svg" alt="auctions" />
          <span>Auctions</span>
        </a>
      </li>

      <li>
        <a href="#">
          <img src="./assets/icons/contests.svg" alt="contests" />
          <span>Contests</span>
        </a>
      </li>

      <li>
        <a href="#">
          <img src="./assets/icons/project.svg" alt="project" />
          <span>Project</span>
        </a>
      </li>

      <li>
        <a href="#">
          <img src="./assets/icons/portfolios.svg" alt="portfolios" />
          <span>Portfolios</span>
        </a>
      </li>

      <li>
        <a href="#">
          <img src="./assets/icons/frelancers.svg" alt="frelancers" />
          <span>Freelancers</span>
        </a>
      </li>

      <li>
        <a href="#">
          <img src="./assets/icons/forum.svg" alt="forum" />
          <span>Forum</span>
        </a>
      </li>
    </ul>

    <ul class="profile-navs">
      <li>
        <a href="#">
          <img src="./assets/icons/chat.svg" alt="chat" />
        </a>
      </li>

      <li>
        <a href="#">
          <img src="./assets/icons/notification.svg" alt="notification" />
        </a>
      </li>

      <li class="person-avatar">
        <a href="#">
          <img src="./assets/images/person.png" alt="person" />
        </a>
      </li>
    </ul>
  </div>
</nav>

    `;
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

customElements.define("nav-bar", Navbar);
