import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import MainJoke from "../../container/MainJoke";
import ThisJoke from "../../container/MainJoke/ThisJoke";
import "./style.scss";
const History = () => {
  const { storyList } = useSelector((state) => state.story);
  return (
    <div className="History">
      <span>Xem Lại Lịch Sử Thích & Không Thích</span>
      <div className="History__container">
        <span>Bạn đã thích : </span>
        <div className="MainJoke">
          <div>
            <div className="MainJoke__Container">
              {storyList.map((item, index) => {
                return (
                  <>
                    <ThisJoke content={item.story} />
                    <div
                      className="spliter joke_spliter"
                      style={{ width: "80%", margin: "0 auto" }}
                    ></div>
                    <div className="MainJoke__button">
                      <>
                        <Button
                          secondary
                          content="This is Funny!"
                          onClick={() => {}}
                        />
                        <Button
                          primary
                          content="This is not funny."
                          onClick={() => {}}
                        />
                      </>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="History__container">
        <span>Bạn đã không thích : </span>
        <div className="MainJoke">
          <div>
            <div className="MainJoke__Container">
              {storyList.map((item, index) => {
                return (
                  <>
                    <ThisJoke content={item.story} />
                    <div
                      className="spliter joke_spliter"
                      style={{ width: "80%", margin: "0 auto" }}
                    ></div>
                    <div className="MainJoke__button">
                      <>
                        <Button
                          secondary
                          content="This is Funny!"
                          onClick={() => {}}
                        />
                        <Button
                          primary
                          content="This is not funny."
                          onClick={() => {}}
                        />
                      </>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
