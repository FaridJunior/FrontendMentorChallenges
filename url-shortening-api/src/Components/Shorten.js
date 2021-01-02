import React from "react";
import shortenMobileBG from "../images/bg-shorten-mobile.svg";
import shortenDesktopBG from "../images/bg-shorten-desktop.svg";
function Shorten() {
  return (
    <section className="shorten-it">
      <div className="container">
        <form action="#">
          <img
            src={shortenMobileBG}
            alt="background"
            aria-hidden="true"
            className="shorten-mobile-BG"
          />
          <img
            src={shortenDesktopBG}
            alt="background"
            aria-hidden="true"
            className="shorten-desktop-BG"
          />
          <input type="text" placeholder="Shorten a linke Here." />
          <input type="submit" className=" secondary-btn" value="Shorten It" />
        </form>

        <div className="result">
          <h3 className="result__heading tp">http://example.com </h3>
          <div className="">
            <a href="http://example.com" className="result__url">
              http://example.com
            </a>
            <button className="secondary-btn">Copy</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shorten;
