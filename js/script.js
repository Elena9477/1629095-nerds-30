const writeUs = document.querySelector(".address__button-write-us");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const form = document.querySelector(".message-form");
const name = document.querySelector(".name");
const mail = document.querySelector(".mail");
const text = document.querySelector(".text");
const bullits = document.querySelectorAll(".promo__slider-pager-link");
const sortingLinks = document.querySelectorAll(".sorting__link");
const directions = document.querySelectorAll(".sorting-direction__link");


if (writeUs) {
  writeUs.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.remove("modal-error");
    modal.classList.add("modal-show");
  });
}

if (modalClose) {
  modalClose.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.remove("modal-show");
  });
}

if (form) {
  name.required = false;
  mail.required = false;
  text.required = false;

  form.addEventListener("submit", function (e) {

    if (!name.value ||
      !mail.value ||
      !text.value ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value)) {
      e.preventDefault();
      modal.classList.remove("modal-error");
      modal.offsetWidth = modal.offsetWidth;
      modal.classList.add("modal-error");

      if (!name.value) {
        name.classList.add("error");
      }
      if (!mail.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value)) {
        mail.classList.add("error");
      }
      if (!text.value) {
        text.classList.add("error");
      }
    }
  });
}

if (bullits) {
  bullits.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      let screen = this.dataset.screen;
      document.querySelector(".promo__slider-item--active").classList.remove("promo__slider-item--active");
      document.querySelector("." + screen).classList.add("promo__slider-item--active");
      document.querySelector(".promo__slider-pager-link--active").classList.remove("promo__slider-pager-link--active");
      this.classList.add("promo__slider-pager-link--active");
    });
  });
}

if (sortingLinks) {
  sortingLinks.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".sorting__link--active").classList.remove("sorting__link--active");
      this.classList.add("sorting__link--active");
    });
  });
}

if (directions) {
  directions.forEach(function (direction) {
    direction.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(".sorting-direction__link--active").classList.remove("sorting-direction__link--active");
      this.classList.add("sorting-direction__link--active");
    });
  });
}
