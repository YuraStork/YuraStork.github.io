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
}

main();
