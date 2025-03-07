import React from "react";
import Header from "./Header";
import Body from "./Body";
import BgImg from "../assets/bg2.png";
import "../assets/style.css";

import "../assets/particles.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="bg" style={{ backgroundImage: `url(${BgImg})` }}>
          <div class="bg-animation">
            <div className="overlay">
              <Header />
              <Body />
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
              <div id="stars4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
