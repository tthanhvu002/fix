const menuBtns = document.querySelector('.js-menu-ticket');
const navmobile = document.querySelector('.nav-mobile');
const mobileClose = document.querySelector('.js-mobile-close');
// const modalContainer = document.querySelector('.js-modal-container');
function showBuyTickets() {
  navmobile.classList.add('open');
}
function hideBuyTickets() {
  navmobile.classList.remove('open');
}

menuBtns.addEventListener('click',showBuyTickets);
navmobile.addEventListener('click', hideBuyTickets);
mobileClose.addEventListener('click', hideBuyTickets);
navmobile.addEventListener('click', function (event) {
  event.stopPropagation()
});
