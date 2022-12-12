import React from "react";
import "./style.scss";

import logo from "../../assets/img/Logo_4x.png";
const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <div className="header__right">
        <div className="header__right__info">
          <span className="header__right__info__handicrafted">
            Handicrafted by
          </span>
          <span className="header__right__info--name">Jim HLS</span>
        </div>
        <img className="header__right__avatar" src={logo} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
