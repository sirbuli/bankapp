const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const scrollToSection = () => {
  const section1Coordinates = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
};

const initSmoothScroll = () => {
  btnScrollTo.addEventListener('click', scrollToSection);

  document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
};

export default initSmoothScroll;
