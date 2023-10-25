(function main() {
  new Swiper(".swiper", {
    grabCursor: true,
    loop: true,
    slideToClickedSlide: true,
    
    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        centeredSlides: true,
        initialSlide: 1,
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      800: {
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: 2,
        spaceBetween: 50,
      },

      1000: {
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: 2.5,
        spaceBetween: 50,
      },

      1300: {
        initialSlide: 2,
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: true,
      },

      1700: {
        initialSlide: 2,
        slidesPerView: 4,
        spaceBetween: 50,
        centeredSlides: true,
      },
    },
  });

  const burgerIcon = document.querySelector("#burger-icon");
  const mobileMenu = document.querySelector("#mobile-menu");
  const body = document.querySelector("body");

  burgerIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("visible");
    burgerIcon.classList.toggle('close');
    body.classList.toggle("freezed");
  });
})();
