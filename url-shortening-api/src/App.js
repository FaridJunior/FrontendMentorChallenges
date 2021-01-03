import React from "react";
import "./css/style.css";
import Attribution from "./Components/Attribution";
import Footer from "./Components/Footer";
import Statistics from "./Components/Statistics";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Boost from "./Components/Boost";
import Shorten from "./Components/Shorten";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Shorten />
      <Statistics />
      <Boost />
      <Footer />
      <Attribution />
    </div>
  );
}

export default App;
