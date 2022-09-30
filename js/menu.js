(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open'),
    closeMenuBtn: document.querySelector('.mob-menu__close'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
    ul: document.querySelectorAll('.navig-mobile__list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    for (let i = 0; i < refs.ul[0].children.length; i++) {
      refs.ul[0].children[i].addEventListener('click', toggleMenu);
    }
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
