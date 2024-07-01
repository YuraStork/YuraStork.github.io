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

  window.addEventListener("click", () => {
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
  const headerNavigationWrapper = document.querySelector("#header-navigation");

  mobileMenuBurger.addEventListener("click", (event) => {
    event.stopPropagation();

    headerNavigation.classList.add("mobile");
    body.classList.add("open-modal");
    backdrop.classList.add("show");
  });

  window.addEventListener("click", () => {
    if (headerNavigation.classList.contains("mobile")) {
      headerNavigation.classList.remove("mobile");
      body.classList.remove("open-modal");
      backdrop.classList.remove("show");
    }
  });

  headerNavigationWrapper.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  applyApplicationControl();
}

main();
