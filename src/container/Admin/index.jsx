import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { readStory } from "../../redux/Main/HomeSlice";
import "./style.scss";
const Admin = () => {
  const id = JSON.parse(localStorage.getItem("user"))?.id;
  const { storyList } = useSelector((state) => state.story);
  const dispatch = useDispatch();
  const navigate = useNavigate()
 
  useEffect(() => {
    dispatch(readStory());
  }, [dispatch, id]);
  return (
    <div>
      <div class="container">
        <h2>CRUD STORY</h2>
        <div style={{margin : "3rem", textAlign : "center"}}>
        <Button content="THÊM STORY" color="orange" onClick={()=>navigate(`/addStory`)}/>
        </div>
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">MÃ SỐ</div>
            <div class="col col-4">CÂU CHUYỆN</div>
          </li>
          {storyList.map((item) => {
            return (
              <li class="table-row" key={item.id}>
                <div class="col col-1">{item.id}</div>
                <div class="col col-4">{item.story}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{margin : "3rem", textAlign : "center"}}>
        <Button content="QUAY LẠI" color="orange" onClick={() => navigate("/")} />
        </div>
    </div>
  );
};

export default Admin;
