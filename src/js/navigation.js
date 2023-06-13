const nav = document.querySelector('.nav');
const navMobile = document.querySelector('.mobile__nav');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const btnNavEl = document.querySelector('.mobile__nav__btn');
const navHeight = nav.getBoundingClientRect().height;

const navigation = () => {
  const handleHover = e => {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  };

  btnNavEl.addEventListener('click', function () {
    header.classList.toggle('nav__open');
  });
  nav.addEventListener('mouseover', handleHover.bind(0.3));
  nav.addEventListener('mouseout', handleHover.bind(1));

  if (link.classList.contains('nav__link'))
    header.classList.toggle('nav__open');

  const isMobile = window.matchMedia('(max-width: 576px)').matches;

  const stickyNavElement = isMobile ? navMobile : nav;

  const stickyNav = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) stickyNavElement.classList.add('sticky');
    else stickyNavElement.classList.remove('sticky');
  };

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });

  headerObserver.observe(header);

  // Reveal sections
  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    else entry.target.classList.remove('section__hidden');
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section__hidden');
  });
};

export default navigation;
