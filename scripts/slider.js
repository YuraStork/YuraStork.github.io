(function main() {
  const thumbs = new Swiper(".swiper-gallery-footer", {
    allowTouchMove: false,
    centeredSlides: true,
    loopedSlides: 4, 
    initialSlide: 1,
    loop: true,
  });

  const slider = new Swiper(".gallery-swiper", {
    slideToClickedSlide: false,
    grabCursor: true,
    slidesPerView: 4,
    spaceBetween: 50,
    initialSlide: 1,
    loop: true,

    loopedSlides: 4,
    centeredSlides: true,

    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },

      500: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },

      600: {
        slidesPerView: 1.7,
        spaceBetween: 30,
      },

      800: {
        slidesPerView: 2,
        spaceBetween: 40,
      },

      1000: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },

      1300: {
        slidesPerView: 3,
        spaceBetween: 50,
      },

      1700: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  slider.controller.control = thumbs;
  thumbs.controller.control = slider;

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
