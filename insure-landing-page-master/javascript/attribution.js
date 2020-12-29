// it is attribution component seems to be not arranged I know but I was try some thing like styled component 😀
document.addEventListener("DOMContentLoaded", () => {
  const attribution = document.createElement("div");
  attribution.classList.add("attribution");
  attribution.style.boxShadow = `0 0px 4.2px -4px rgba(0, 0, 0, 0.072), 0 0px 7px -4px rgba(0, 0, 0, 0.114),
  0 0px 15px -4px rgba(0, 0, 0, 0.2)`;
  attribution.style = attributionStyle;
  attribution.innerHTML = `
    <div style=${attributionContainerStyle}>
      <div class="mentor" style=${attributionMentor}>
        <p style=${attributionP}>Challenge by </p>
        <a style=${attributionA} href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >
      </div>
      <div class="challenger">
        <p style=${attributionP}>Coded by</p>
        <a style=${attributionA} href="https://twitter.com/mfarid_se">Mohamed Farid</a>
      </div>
      <button id="toggle-attribution" aria-label="toogle-attribution "style=${toggleAttributionBtn} >
        <svg width="16" height="32" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg" style=${toggleAttributionBtnSvg}>
        <path d="M1 1L6.98764 8.36941C7.28616 8.73681 7.28616 9.26319 6.98764 9.63059L1 17" stroke="white" stroke-width="2"/>
        </svg>
      </button>
    </div>
    `;
  function setAttribution() {
    document.body.appendChild(attribution);
    const toggleAttributionBtn = document.querySelector("#toggle-attribution");
    const attributionSvg = attribution.querySelector("svg");

    toggleAttributionBtn.addEventListener("click", () => {
      if (attribution.classList.contains("opened")) {
        attribution.classList.remove("opened");
        attribution.style.transform = "";
        attributionSvg.style.transform = "";
      } else {
        attribution.classList.add("opened");
        attribution.style.transform = "translate(180px)";
        attributionSvg.style.transform = "rotate(180deg)";
      }
    });
  }
  setTimeout(setAttribution, 0);
});

function removeSpace(str) {
  return str.replace(/\s/g, "");
}
const attributionMentor = "margin-bottom:.6rem;";
const attributionP = "margin-bottom:4px;";
const attributionA = "text-decoration:none;";
const attributionStyle = removeSpace(`
  position: fixed;
  bottom: 20vh;
  width: 180px;
  left: -180px;
  transition: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  `);
const attributionContainerStyle = removeSpace(`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  align-items: center;
  font-size: 16px;
  text-align: center;
  background: rgba(0,0,0,.07);
  font-weight:700;
  color: #000;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  `);
const toggleAttributionBtn = removeSpace(`position: absolute;
  cursor: pointer;
  border: none;
  background: inherit;
  bottom: 0px;
  right: -26px;
  padding-top: 0.4rem;
  padding-bottom:.4rem;
  padding-left: 0.45rem;
  padding-right: 0.45rem;
  display: flex;
  justify-content: center;
  align-items:center;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  `);

const toggleAttributionBtnSvg = removeSpace(`
  transition-property:all;
  transition-duration:300ms;
  transition-timing-function:ease-in-out;
`);
