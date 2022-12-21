import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import ThisJoke from "./ThisJoke";
import { useNavigate } from "react-router-dom";
import { actionFunny, readStory } from "../../redux/Main/HomeSlice";
const MainJoke = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { storyList } = useSelector((state) => state.story);
  const { userStoryAction } = useSelector((state) => state.story);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const arrRender =
    user && userStoryAction.length > 0
      ? storyList?.filter(
          (items) =>
            !userStoryAction
              ?.map((item) => item?.storyID)
              ?.map((item) => {
                return item;
              })
              .includes(items.id)
        )
      : storyList;

  const [show, setShow] = useState(0);
  const handleFunnyClick = async (id) => {
    const data = {
      userID: user.id,
      storyID: id,
      actionsID: 1,
    };
    const res = await dispatch(actionFunny(data));
    if (res.payload.id) {
      setShow(show + 1);
    }
  };

  const handleNotFunnyClick = async (id) => {
    const data = {
      userID: user.id,
      storyID: id,
      actionsID: 2,
    };
    const res = await dispatch(actionFunny(data));
    if (res.payload.id) {
      setShow(show + 1);
    }
  };

  const handleNext = () => {
    setShow(show + 1);
  };
  if (arrRender.length === 0) {
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
          {arrRender?.map((item, index) => {
            return (
              <>
                {index === show && (
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
                            onClick={() => handleNext()}
                          />
                        </>
                      )}
                    </div>
                  </>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainJoke;
