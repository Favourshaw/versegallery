import React from "react";
import Tweet from "../assets/tweet.svg";
import Discord from "../assets/discord.svg";
import Logo from "../assets/logo1.png";

const Header = () => {
  return (
    <div className="header">
      <nav class="navbar">
        <a href="https://x.com/versegalleryNFT" class="logoTop">
          <img src={Discord} alt="x logo" />
        </a>
        <a href="https://x.com/versegalleryNFT" class="logoTop">
          <img src={Tweet} alt="x logo" />
        </a>
      </nav>
    </div>
  );
};

export default Header;
