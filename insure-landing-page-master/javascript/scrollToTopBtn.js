export function setScrollToTopBtn() {
  const rootElement = document.documentElement;
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.innerHTML = "&#8593;";
  scrollToTopBtn.setAttribute("id", "scrollToTopBtn");
  scrollToTopBtn.setAttribute("style", scrollToTopBtnStyle);
  scrollToTopBtn.style.boxShadow = `0 0px 4.2px -4px rgba(0, 0, 0, 0.072), 0 0px 7px -4px rgba(0, 0, 0, 0.114),
  0 0px 15px -4px rgba(0, 0, 0, 0.2)`;
  scrollToTopBtn.setAttribute("title", "go to top");
  scrollToTopBtn.setAttribute("aria-label", "go to top");
  document.body.appendChild(scrollToTopBtn);
  const handleScroll = () => {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    scrollToTopBtn.style.opacity = rootElement.scrollTop / scrollTotal;
    if (rootElement.scrollTop / scrollTotal > 0.15) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };
  const scrollToTop = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTopBtn.addEventListener("click", scrollToTop);
  document.addEventListener("scroll", handleScroll);
}

function removeSpace(str) {
  return str.replace(/\s/g, "");
}

const scrollToTopBtnStyle = removeSpace(`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  border-radius: 50%;
  color: var(--very-dark-violet);
  background-color: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  font-size: 2em;
  line-height: 48px;
  width: 48px;
  outline: none;
`);
