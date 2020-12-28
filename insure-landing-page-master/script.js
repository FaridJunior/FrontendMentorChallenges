document.addEventListener("DOMContentLoaded", () => {
  console.log("hello world");
  const menuBtn = document.querySelector(".menu-btn");
  const navLinkBtn = document.querySelector(".nav__link.btn");
  const navLinks = document.querySelector(".nav__links");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("opened");
    navLinkBtn.classList.toggle("violet--btn");
    navLinks.classList.toggle("navheight");
  });
});
