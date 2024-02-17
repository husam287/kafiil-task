class ImageSlider extends HTMLElement {
  constructor() {
    super();
  }

  getHtml() {
    return /*html*/ `
    <div class="image-swiper-container">
        <div class="image-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="assets/images/product-image.webp" alt="product 1">
                </div>

                <div class="swiper-slide">
                    <img src="assets/images/product-image.webp" alt="product 1">
                </div>

                <div class="swiper-slide">
                    <img src="assets/images/product-image.webp" alt="product 1">
                </div>
            </div>

            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
    `;
  }

  initSwiper() {
    new Swiper(".image-swiper", {
      direction: "horizontal",
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }

  render() {
    this.innerHTML = this.getHtml();
    this.initSwiper();
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

customElements.define("image-slider", ImageSlider);
