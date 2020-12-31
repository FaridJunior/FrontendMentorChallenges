import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-img"></div>
      <div className="hero-data">
        <h1 className="hero__heading">More than just shorter links</h1>
        <p className="hero__subtitle">
          {" "}
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <a href="#" className="hero__btn btn">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero;
