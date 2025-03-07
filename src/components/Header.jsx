import React from "react";
import Tweet from "../assets/tweet.svg";
import Discord from "../assets/discord.svg";
import Logo from "../assets/logo-full.png";

const Header = () => {
  return (
    <div className="header">
      <nav class="navbar">
        <a href="#" class="logo">
          <img src={Logo} alt="logo" />
        </a>
        <span>
          <a href="https://x.com/versegalleryNFT" class="logoTop">
            <img src={Tweet} alt="x logo" />
          </a>
          <a href="#" class="logoTop">
            <img src={Discord} alt="discord logo" />
          </a>
        </span>
      </nav>
    </div>
  );
};

export default Header;
