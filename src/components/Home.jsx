import React from "react";
import Header from "./Header";
import Body from "./Body";
import BgImg from "../assets/bg2.png";
import "../assets/style.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="bg" style={{ backgroundImage: `url(${BgImg})` }}>
          <div className="overlay">
            <Header />
            <Body />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
