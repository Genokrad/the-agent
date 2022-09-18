(() => {
  const refs = {
    openModalBtn: document.querySelector('.modal-havaianas__open'),
    closeModalBtn: document.querySelector('.modal-havaianas__close'),
    modal: document.querySelector('.modal-havaianas'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
