(() => {
  const refs = {
    openModalBtn: document.querySelector('.mekong-open-btn'),
    closeModalBtn: document.querySelector('.modal-mekong__close'),
    modal: document.querySelector('.modal-mekong'),
    body: document.querySelector('body'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    // refs.body.classList.toggle('blur-bg');
  }
})();
