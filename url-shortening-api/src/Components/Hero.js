import React from "react";
import heroImage from "../images/illustration-working.svg";
function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} alt="working " className="hero-img" />
      <div className="hero-data">
        <h1 className="hero__heading tp">More than just shorter links</h1>
        <p className="hero__subtitle ts">
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <a href="/get-started" className="hero__btn btn">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero;
