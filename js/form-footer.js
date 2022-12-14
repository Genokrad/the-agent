(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-footer]'),
    closeModalBtn: document.querySelector('form__close'),
    modal: document.querySelector('[data-modal-footer]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
