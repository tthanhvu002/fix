const searchBtns = document.querySelectorAll('.js-search-ticket');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');
function showBuyTickets() {
  modal.classList.add('open');
}
function hideBuyTickets() {
  modal.classList.remove('open');
}
for (const searchBtn of searchBtns) {
  searchBtn.addEventListener('click', showBuyTickets);
 

 }
// buytBtns.addEventListener('click',showBuyTickets);
modal.addEventListener('click', hideBuyTickets);
modalClose.addEventListener('click', hideBuyTickets);
modalContainer.addEventListener('click', function (event) {
  event.stopPropagation()
});
