(() => {
  const refs = {
    openModalBtn: document.querySelector('.modal-oakwood__open'),
    closeModalBtn: document.querySelector('.modal-oakwood__close'),
    modal: document.querySelector('.modal-oakwood'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
