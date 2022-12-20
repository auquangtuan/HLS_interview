import Cookies from "js-cookie";
import React, { useState } from "react";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import "./style.scss";
import ThisJoke from "./ThisJoke";
import { useNavigate } from "react-router-dom";
const MainJoke = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { storyList } = useSelector((state) => state.story);
  const { userStoryAction } = useSelector((state) => state.story);
  const filterIDStory = userStoryAction?.map((item) => item?.storyID) || [];
  const arrFilter = storyList?.filter((items) =>
    filterIDStory?.map((item) => {
        return item;
      })
      .includes(items.id)
  );
  const navigate = useNavigate();
  const [show, setShow] = useState(storyList[0]);
  const handleFunnyClick = (id) => {};
  const handleNotFunnyClick = (id) => {};
  const handleNext = () => {};
  if (storyList.length === 0) {
    return (
      <div className="MainJoke">
        <div className="MainJoke__Container">
          <ThisJoke content="That's all the jokes for today! Come back another day!" />
        </div>
      </div>
    );
  }
  return (
    <div className="MainJoke">
      <div>
        <div className="MainJoke__Container">
          {arrFilter.map((item, index) => {
            return (
              <>
                <ThisJoke content={item.story} />
                <div
                  className="spliter joke_spliter"
                  style={{ width: "80%", margin: "0 auto" }}
                ></div>
                <div className="MainJoke__button">
                  {user ? (
                    <>
                      <Button
                        secondary
                        content="This is Funny!"
                        onClick={() => handleFunnyClick(item.id)}
                      />
                      <Button
                        primary
                        content="This is not funny."
                        onClick={() => handleNotFunnyClick(item.id)}
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        secondary
                        content="Bạn cần đăng nhập để thích, không thích."
                        onClick={() => navigate("/login")}
                      />
                      <Button
                        primary
                        content="Chuyện Tiếp."
                        onClick={() => {}}
                      />
                    </>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainJoke;
