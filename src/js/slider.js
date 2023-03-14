const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn__left');
const btnRight = document.querySelector('.slider__btn__right');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;

class Slider {
  constructor() {
    this.init();
    this.bindEvents();
  }
  createDots() {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class='dots__dot' data-slide='${i}'></button>`
      );
    });
  }

  activateDot(slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot__active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot__active');
  }

  goToSlide(slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  }

  nextSlide() {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    this.goToSlide(curSlide);
    this.activateDot(curSlide);
  }

  prevSlide() {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    this.goToSlide(curSlide);
    this.activateDot(curSlide);
  }

  init() {
    this.goToSlide(0);
    this.createDots();
    this.activateDot(0);
  }

  bindEvents() {
    btnRight.addEventListener('click', this.nextSlide.bind(this));
    btnLeft.addEventListener('click', this.prevSlide.bind(this));
    document.addEventListener('keydown', e => {
      e.key === 'ArrowLeft' && this.prevSlide();
      e.key === 'ArrowRight' && this.nextSlide();
    });

    dotContainer.addEventListener('click', e => {
      if (e.target.classList.contains('dots__dot')) {
        const slide = e.target.dataset.slide;
        this.goToSlide(slide);
        this.activateDot(curSlide);
      }
    });
  }
}

export default Slider;
