const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab__container');
const tabsContent = document.querySelectorAll('.operations__content');

const initTabs = () => {
  tabsContainer.addEventListener('click', e => {
    e.preventDefault();

    const clicked = e.target.closest('.operations__tab');
    if (!clicked) return;

    tabs.forEach(t => t.classList.remove('operations__tab__active'));
    tabsContent.forEach(c => c.classList.remove('operations__content__active'));

    clicked.classList.add('operations__tab__active');

    document
      .querySelector(`.operations__content__${clicked.dataset.tab}`)
      .classList.add('operations__content__active');
  });
};

export default initTabs;
