console.log('console is working');

// SELECTORS
// form ellements selectors
const formOpen = document.querySelector('.form-open');
const formClose = document.querySelector('.form__close');
const form = document.querySelector('.form');
const footerButton = document.querySelector('.footer__button');
const contactUsButton = document.querySelector('.contact-us-button');
const contactUsMobileButton = document.querySelector(
  '.contact-us-button-white-bgc'
);

// mobMenu selectors
const body = document.querySelector('body');
const ul = document.querySelectorAll('.navig-mobile__list');
const menuOpen = document.querySelector('.menu-open');
const mobMenuClose = document.querySelector('.mob-menu__close');
const menu = document.querySelector('.mob-menu');

// use cases selectors
// HAVAINAS
const modalHavaianasOpen = document.querySelector('.modal-havaianas__open');
const closeModalHavainasBtn = document.querySelector('.modal-havaianas__close');
const modalHavainas = document.querySelector('.modal-havaianas');
// PAEZ
const openModalBtnPaez = document.querySelector('.modal-paez__open');
const closeModalBtnPaez = document.querySelector('.modal-paez__close');
const modalPaez = document.querySelector('.modal-paez');
// LECOQSPORTIFF
const openModalBtnCoq = document.querySelector('.mekong-open-btn');
const closeModalBtnCoq = document.querySelector('.modal-mekong__close');
const modalCoq = document.querySelector('.modal-mekong');
// OAKWOOD
const openModalBtnOak = document.querySelector('.modal-oakwood__open');
const closeModalBtnOak = document.querySelector('.modal-oakwood__close');
const modalOak = document.querySelector('.modal-oakwood');

// EVENT LISTENERS
// open form listeners
formOpen.addEventListener('click', opeFormFu);
contactUsButton.addEventListener('click', opeFormFu);
footerButton.addEventListener('click', opeFormFu);
contactUsMobileButton.addEventListener('click', opeFormFu);

// close form listeners
formClose.addEventListener('click', closeFormFu);

// open mobMenu listener
menuOpen.addEventListener('click', openMobileMenuFu);

// use cases listeners
modalHavaianasOpen.addEventListener('click', openModalHavainas);
closeModalHavainasBtn.addEventListener('click', closeModalHavainas);
openModalBtnPaez.addEventListener('click', openModalPaez);
closeModalBtnPaez.addEventListener('click', closeModalBtnPaezFu);
openModalBtnCoq.addEventListener('click', openModalCoq);
closeModalBtnCoq.addEventListener('click', closeModalBtnCoqFu);
openModalBtnOak.addEventListener('click', openModalOak);
closeModalBtnOak.addEventListener('click', closeModalBtnOakFu);

// FUNCTIONS
// contuct us open function
function opeFormFu(event) {
  if (form.classList[1] === 'is-hidden') {
    form.classList.remove('is-hidden');
  }
}

// contuct us close function
function closeFormFu(event) {
  if (form.classList[1] !== 'is-hidden') {
    form.classList.add('is-hidden');
  }
}

// recursy for close mob menu function
function openMobileMenuFu(event) {
  for (let i = 0; i < ul[0].children.length; i++) {
    ul[0].children[i].addEventListener('click', openMobileMenuFu);
  }

  menu.classList.toggle('is-hidden');
  body.classList.toggle('no-scroll');
}

// Use cases Functions
// Havainas
function openModalHavainas(params) {
  if (modalHavainas.classList[1] === 'is-hidden') {
    modalHavainas.classList.remove('is-hidden');
  }
}
function closeModalHavainas(params) {
  if (modalHavainas.classList[1] !== 'is-hidden') {
    modalHavainas.classList.add('is-hidden');
  }
}

// Paez
function openModalPaez(params) {
  if (modalPaez.classList[1] === 'is-hidden') {
    modalPaez.classList.remove('is-hidden');
  }
}
function closeModalBtnPaezFu(params) {
  // console.log('closeModalBtnPaezFu');
  if (modalPaez.classList[1] !== 'is-hidden') {
    modalPaez.classList.add('is-hidden');
  }
}

// LeCoqSportiff
function openModalCoq(params) {
  if (modalCoq.classList[1] === 'is-hidden') {
    modalCoq.classList.remove('is-hidden');
  }
}
function closeModalBtnCoqFu(params) {
  // console.log('closeModalBtnPaezFu');
  if (modalCoq.classList[1] !== 'is-hidden') {
    modalCoq.classList.add('is-hidden');
  }
}

// Oakwood
function openModalOak(params) {
  if (modalOak.classList[1] === 'is-hidden') {
    modalOak.classList.remove('is-hidden');
  }
}
function closeModalBtnOakFu(params) {
  // console.log('closeModalBtnPaezFu');
  if (modalOak.classList[1] !== 'is-hidden') {
    modalOak.classList.add('is-hidden');
  }
}
