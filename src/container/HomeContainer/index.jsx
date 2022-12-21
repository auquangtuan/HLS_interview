import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomePage from "../../pages/HomePage";
import { readStory, userStoryActions } from "../../redux/Main/HomeSlice";
import Carousel from "../Carousel";
import MainJoke from "../MainJoke";
import "./style.scss";
const HomeContainer = () => {
  const id = JSON.parse(localStorage.getItem("user"))?.id
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(readStory())
    id && dispatch(userStoryActions(id))
  }, [dispatch, id])
  return (
    <HomePage
      children={
        <div className="HomeContainer">
          <Carousel />
          <MainJoke />
        </div>
      }
    />
  );
};

export default HomeContainer;
