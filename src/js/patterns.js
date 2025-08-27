import Swiper from 'swiper';
import 'swiper/css/bundle';

const patternsDots = document.querySelectorAll('.patterns-dot');

let patternsSwiper;

patternsSwiper = new Swiper('.patterns-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 8,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 4,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.patterns-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updatepatternsDots(this.realIndex);
    },
  },
});

function updatepatternsDots(index) {
  patternsDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

patternsDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    patternsSwiper.slideTo(index);
  });
});
