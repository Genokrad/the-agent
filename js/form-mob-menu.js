(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-mob-form]'),
    closeModalBtn: document.querySelector('form__close'),
    modal: document.querySelector('[data-modal-mob-form]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
