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
      "transform 400ms ease-in, border-radius 400ms  cubic-bezier(.89,.03,.79,.33)"
    );
    expandedMenuBg.style.transform = "scale(1)";
    expandedMenuBg.style.setProperty("border-bottom-left-radius", "0%");
    expandedMenuBg.style.setProperty("border-top-left-radius", "0%");
    expandedMenuBg.style.setProperty("border-bottom-right-radius", "0%");
  }
  function handleMenuClose() {
    menuBtn.setAttribute("aria-expanded", false);
    expandedMenuBg.style.setProperty("transition", "transform 400ms, border-radius 100ms");
    expandedMenuBg.style.setProperty("transform", "scale(0)");
    expandedMenuBg.style.setProperty("border-bottom-left-radius", "100%");
    expandedMenuBg.style.setProperty("border-top-left-radius", "5%");
    expandedMenuBg.style.setProperty("border-bottom-right-radius", "5%");
  }
});

// this code from => https://codepen.io/nikki-peel/pen/dypEMyp?editors=0110
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes(); // shows initial box(es)

function checkBoxes() {
  console.log("hello world");
  const triggerBottom = window.innerHeight * 0.7;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
