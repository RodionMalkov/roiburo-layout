import '../index.html';
import '../stylesheets/index.scss';

import Swiper from 'swiper';
import 'swiper/css';

var swiper = new Swiper(".office", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});