import React, { useState } from "react";
import shortenMobileBG from "../images/bg-shorten-mobile.svg";
import shortenDesktopBG from "../images/bg-shorten-desktop.svg";
function Shorten() {
  const [currentLink, setCurrentLink] = useState("");
  const [error, setError] = useState(false);
  const [links, setLinks] = useState([]);
  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`https://api.shrtco.de/v2/shorten?url=${currentLink}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setLinks([...links, { link: currentLink, shortLink: data.result["full_short_link2"] }]);
          setCurrentLink("");
        } else {
          // alert("invalid link");
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
    //
  }

  function handleChange(e) {
    setCurrentLink(e.target.value);
  }

  return (
    <section className="shorten-it">
      <div className="container">
        <form
          action=""
          onSubmit={handleFormSubmit}
          className={error ? "error" : ""}
          onFocus={() => setError(false)}
        >
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
          <div className="input">
            <input
              type="text"
              placeholder="Shorten a link Here."
              value={currentLink}
              onChange={handleChange}
              aria-label="shorten-link"
            />
            <p className="error-message">Please add a link </p>
          </div>
          <input type="submit" className=" secondary-btn" value="Shorten It" />
        </form>
        {links && links.map((link, i) => <Resullt link={link} id={i} />)}
      </div>
    </section>
  );
}

export default Shorten;

const Resullt = ({ link, i }) => {
  function copyToClipboard(e) {
    navigator.clipboard.writeText(link["shortLink"]);
    e.target.focus();
  }

  return (
    <div className="result" key={i}>
      <h3 className="result__heading tp">{link["link"]}</h3>
      <div className="">
        <a href={link["shortLink"]} className="result__url">
          {link["shortLink"]}
        </a>
        <button className="secondary-btn" onClick={copyToClipboard}>
          <span className="copy">Copy</span>
          <span className="copied">Copied!</span>
        </button>
      </div>
    </div>
  );
};
