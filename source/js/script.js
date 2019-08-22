var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
navToggle.classList.remove('main-nav__toggle--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var openModal = document.querySelectorAll('.button--open-modal');
var checkoutpopup = document.querySelector('.modal-cart');
var modalOverlay = document.querySelector('.modal-overlay');

for (i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    checkoutpopup.classList.add("modal-cart--open");
    modalOverlay.classList.add("modal-overlay-open");
  });
}

modalOverlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  checkoutpopup.classList.remove("modal-cart--open");
  modalOverlay.classList.remove("modal-overlay-open");
});
