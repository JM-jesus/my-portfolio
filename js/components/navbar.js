export function navbar() {
  const navbar = document.querySelector(".navbar");
  const htmlRoot = document.documentElement;
  const headerBtn = document.querySelector(".header__btn");

  const openMenu = () => {
    navbar.classList.add("active");
    htmlRoot.style.overflow = "hidden";
  };

  const closeMenu = () => {
    navbar.classList.remove("active");
    htmlRoot.style.overflow = "auto";
  };

  headerBtn.addEventListener("click", openMenu);

  navbar.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("navbar__close") ||
      event.target.classList.contains("navbar__ancor")
    ) {
      closeMenu();
    }
  });

  window.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && !headerBtn.contains(e.target)) {
      navbar.classList.remove("active");
      htmlRoot.style.overflow = "auto";
    }
  });
}
