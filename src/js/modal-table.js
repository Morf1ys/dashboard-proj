const triggerButton = document.querySelector('.trigger');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

triggerButton.addEventListener('click', function () {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
});
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

function toggleModal() {
  modal.classList.toggle('show-modal');
}
triggerButton.addEventListener('click', toggleModal);
