document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const header = document.querySelector("header");
  const expandedMenuBg = document.querySelector(".expanded-menu-bg");
  menuBtn.addEventListener("click", () => {
    console.log(menuBtn.attributes["aria-expanded"]);
    if (menuBtn.attributes["aria-expanded"].value === "true") {
      handleMenuClose();
    } else {
      handleMenuOpen();
    }
  });

  function handleMenuOpen() {
    menuBtn.setAttribute("aria-expanded", true);
    expandedMenuBg.style.setProperty(
      "transition",
      "transform 1000ms cubic-bezier(.31,.59,.35,.92), border-end-start-radius 1000ms  cubic-bezier(.2,.4,.81,.92), border-start-start-radius 1000ms  cubic-bezier(.2,.4,.81,.92), border-bottom-right-radius 1000ms  cubic-bezier(.2,.4,.81,.92)"
    );
    expandedMenuBg.style.transform = "scale(1)";
    expandedMenuBg.style.setProperty("border-end-start-radius", "0%");
    expandedMenuBg.style.setProperty("border-top-left-radius", "0%");
    expandedMenuBg.style.setProperty("border-bottom-right-radius", "0%");
  }
  function handleMenuClose() {
    menuBtn.setAttribute("aria-expanded", false);
    expandedMenuBg.style.setProperty(
      "transition",
      "transform 600ms, border-end-start-radius 100ms, border-top-left-radius 100ms,border-bottom-right-radius 100ms"
    );
    expandedMenuBg.style.setProperty("transform", "scale(0)");
    expandedMenuBg.style.setProperty("border-end-start-radius", "100%");
    expandedMenuBg.style.setProperty("border-top-left-radius", "50%");
    expandedMenuBg.style.setProperty("border-bottom-right-radius", "20%");
  }
});
