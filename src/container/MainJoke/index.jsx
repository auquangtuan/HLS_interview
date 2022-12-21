import Cookies from "js-cookie";
import React, { useState } from "react";
import Button from "../../components/Button";
import { data } from "../../data";
import "./style.scss";
import ThisJoke from "./ThisJoke";
const MainJoke = () => {
  const dataArr = data
    .filter((sp) => sp.id !== parseInt(Cookies?.get(sp?.id)?.slice(0)))
    ?.map((item) => item.id);
  console.log(dataArr);
  const [show, setShow] = useState(dataArr[0]);
  const handleFunnyClick = (id) => {
    Cookies.set(id, `${id}_funny`);
    handleNext();
  };
  const handleNotFunnyClick = (id) => {
    Cookies.set(id, `${id}_notFunny`);
    handleNext();
  };
  const handleNext = () => {
    setShow(
      data
        .filter((sp) => sp.id !== parseInt(Cookies?.get(sp?.id)?.slice(0)))
        ?.map((item) => item.id)[0]
    );
  };
  if (dataArr.length === 0) {
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
      {data.map((item, index) => {
        return (
          !Cookies.get(item.id) && (
            <div key={item.id}>
              {item.id === show && (
                <div className="MainJoke__Container">
                  <ThisJoke content={item.content} />
                  <div
                    className="spliter joke_spliter"
                    style={{ width: "80%", margin: "0 auto" }}
                  ></div>
                  <div className="MainJoke__button">
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
                  </div>
                </div>
              )}
            </div>
          )
        );
      })}
    </div>
  );
};

export default MainJoke;
