import '../index.html';

import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../stylesheets/index.scss';

var swiper = new Swiper(".office", {
  slidesPerView: 3,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});