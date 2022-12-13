import React from "react";
import Carousel from "../Carousel";
import MainJoke from "../MainJoke";
import "./style.scss";
const HomeContainer = () => {
  return <div className="HomeContainer">
        <Carousel />
        <MainJoke />
        <div className="spliter"></div>
  </div>;
};

export default HomeContainer;
