(function main() {
  const swipperGalleryFooter = new Swiper(".swiper-gallery-footer", {
    initialSlide: 4,
    slidesPerView: 1,

    allowTouchMove: false,

    320: {
      initialSlide: 1,
      slidesPerView: 1,
    },

    600: {
      initialSlide: 2,
      slidesPerView: 1,
    },

    1700: {
      initialSlide: 1,
      slidesPerView: 1,
    },
  });

  new Swiper(".swiper", {
    grabCursor: true,
    slideToClickedSlide: true,
    initialSlide: 2,

    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    thumbs: {
      swiper: swipperGalleryFooter,
    },

    breakpoints: {
      320: {
        centeredSlides: true,
        initialSlide: 1,
        slidesPerView: 1.3,
        spaceBetween: 10,
      },

      500: {
        centeredSlides: true,
        initialSlide: 1,
        slidesPerView: 1.5,
        spaceBetween: 10,
      },

      600: {
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: 1.7,
        spaceBetween: 30,
      },

      800: {
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: 2,
        spaceBetween: 40,
      },

      1000: {
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: 2.5,
        spaceBetween: 40,
      },

      1300: {
        initialSlide: 2,
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: true,
      },

      1700: {
        initialSlide: 1,
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
    if(window.scrollY > 0){
      burgerWrapper.classList.toggle("shadow");
    }

    mobileMenu.classList.toggle("visible");
    burgerIcon.classList.toggle("close");
    body.classList.toggle("freezed");
  });

  const burgerWrapper = document.querySelector(".burger-wrapper");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      burgerWrapper.classList.add("shadow");
    } else {
      burgerWrapper.classList.remove("shadow");
    }
  });
})();
