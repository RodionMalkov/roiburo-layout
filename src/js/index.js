import '../index.html';

import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../stylesheets/index.scss';

let officeСarousel = new Swiper(".office", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: "auto",
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1700: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

let teamСarousel = new Swiper(".team", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: "auto",
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});