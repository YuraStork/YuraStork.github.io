function freezeBody() {
  const body = document.querySelector("body");
  const backdrop = document.querySelector("#backdrop");

  body.classList.toggle("disable");
  backdrop.classList.toggle("show");
}

function applyApplicationControl() {
  const closeModalBtn = document.querySelector("#close-modal-btn");
  const button = document.querySelector("#open-modal-btn");
  const modal = document.querySelector("#modal");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.toggle("show");
    freezeBody();
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.toggle("show");
    freezeBody();
  });
}

function main() {
  const mobileMenuBurger = document.querySelector("#mobile-menu-burger");
  const headerNavigation = document.querySelector("#header-navigation");
  const headerNavigationWrapper = document.querySelector(
    ".header-navigation-wrapper"
  );

  const body = document.body;

  mobileMenuBurger.addEventListener("click", () => {
    headerNavigation.classList.toggle("mobile");
    body.classList.toggle("freeze");
  });

  window.addEventListener("click", () => {
    headerNavigation.classList.remove("mobile");
    body.classList.remove("freeze");
  });

  headerNavigationWrapper.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  applyApplicationControl();
}

main();
