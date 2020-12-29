import { setScrollToTopBtn } from "./scrollToTopBtn.js";

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinkBtn = document.querySelector(".nav__link.btn");
  const navLinks = document.querySelector(".nav__links");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("opened");
    navLinkBtn.classList.toggle("violet--btn");
    navLinks.classList.toggle("navheight");
  });
  setScrollToTopBtn();
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800 && menuBtn.classList.contains("opened")) {
      menuBtn.click();
    }
  });
});
