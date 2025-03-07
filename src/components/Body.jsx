import React from "react";

import Logo from "../assets/logo1.png";
import "../assets/button.css";
import ContactBtn from "../molecules/ContactBtn";

const Body = () => {
  return (
    <>
      <div className="centers">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <div>VERSE CONSULTING</div>
        </div>
        <div>
          <div className="heading">
            Empowering Web3 Projects with Expert Consulting
          </div>
          <div className="sub-heading">
            Verse Consulting provides strategic solutions for blockchain, NFT,
            and Web3 businesses. From marketing and community growth to legal
            and technical execution, we help projects scale.
          </div>
        </div>
        <ContactBtn />
      </div>
    </>
  );
};

export default Body;
