const navMenu = document.querySelector('.side-menu');
const navMenuBtn = document.querySelector('#mobileMenuBtn');

if (navMenu !== null) {
  navMenuBtn.addEventListener('click', e => {
    navMenu.classList.toggle('active');
  });
}
