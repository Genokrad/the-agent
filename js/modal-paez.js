(() => {
  const refs = {
    openModalBtn: document.querySelector('.modal-paez__open'),
    closeModalBtn: document.querySelector('.modal-paez__close'),
    modal: document.querySelector('.modal-paez'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
