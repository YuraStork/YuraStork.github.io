const body = document.querySelector("body");
const backdrop = document.querySelector("#backdrop");

function applyApplicationControl() {
  const openModalButton = document.querySelector("#open-modal-btn");
  const closeModalBtn = document.querySelector("#close-modal-btn");
  const modal = document.querySelector("#modal");

  const modalContentContainer = document.querySelector(
    "#modal-content-container"
  );

  openModalButton.addEventListener("click", (event) => {
    event.stopPropagation();

    body.classList.add("open-modal");
    backdrop.classList.add("show");
    modal.classList.add("show");
  });

  closeModalBtn.addEventListener("click", () => {
    body.classList.remove("open-modal");
    backdrop.classList.remove("show");
    modal.classList.remove("show");
  });

  modalContentContainer.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", (event) => {
    if (modal.classList.contains("show")) {
      body.classList.remove("open-modal");
      backdrop.classList.remove("show");
      modal.classList.remove("show");
    }
  });
}

function main() {
  const mobileMenuBurger = document.querySelector("#mobile-menu-burger");
  const headerNavigation = document.querySelector("#header-navigation");
  const headerNavigationWrapper = document.querySelector(
    ".header-navigation-wrapper"
  );

  mobileMenuBurger.addEventListener("click", (event) => {
    event.stopPropagation();

    headerNavigation.classList.add("mobile");
    mobileMenuBurger.classList.add("open");
    body.classList.add("open-modal");
    backdrop.classList.add("show");
  });

  headerNavigationWrapper.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    if (headerNavigation.classList.contains("mobile")) {
      headerNavigation.classList.remove("mobile");
      mobileMenuBurger.classList.remove("open");
      body.classList.remove("open-modal");
      backdrop.classList.remove("show");
    }
  });

  applyApplicationControl();
}

main();
