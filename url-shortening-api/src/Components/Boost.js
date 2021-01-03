import React from "react";
import BoostMobileBG from "../images/bg-boost-mobile.svg";
import BoostDesktopBG from "../images/bg-boost-desktop.svg";
function Boost() {
  return (
    <section className="boost">
      <img src={BoostMobileBG} alt="" className="boost-mobile-bg" aria-hidden="true" />
      <img src={BoostDesktopBG} alt="" className="boost-Desktop-bg" aria-hidden="true" />
      <div className="container">
        <h2> Boost your links today</h2>
        <a href="/boost" className="btn">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Boost;
