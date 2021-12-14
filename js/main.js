"use strict"
const Start = () => {
  const headerSlider = new Swiper(".header-slider", {
    slidesPerView: 11,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      780: {
        slidesPerView: 7,
        spaceBetween: 0,
      },
      970: {
        slidesPerView: 9,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 11,
        spaceBetween: 0,
      }
    }
  });
  const lastItemSlider = new Swiper(".last-item__slider", {
    slidesPerView: 5,
    spaceBetween: 0,
    centerSlides: true,
    loop: true,
    navigation: {
      nextEl: ".last-item__slider-button-next",
      prevEl: ".last-item__slider-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 0,
      }
    }
  });

  const burgerMenu = document.querySelector('.burger');
  const menuListLink = document.querySelectorAll('.menu__list-link');

  if (burgerMenu != null) {

    const ShowMenu = () => {
      burgerMenu.classList.toggle('burger--active')
      document.body.classList.toggle('no-scroll');

    }

    burgerMenu.addEventListener('click', ShowMenu);
  }

  if (menuListLink.length > 0) {
    menuListLink.forEach(item => {
      item.addEventListener('click', () => {
        burgerMenu.classList.remove('burger--active');
        document.body.classList.remove('no-scroll');
      })
    })
  }
}

window.addEventListener('DOMContentLoaded', Start);

