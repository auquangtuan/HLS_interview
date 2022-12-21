import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { addStory, readStory } from "../../redux/Main/HomeSlice";

const EditStory = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const story = {
      story: content,
    };
    const res = await dispatch(addStory(story));
    if(res.payload.id) {
      alert("Thêm Chuyện Thành Công")
      navigate("/admin")
    } 
    dispatch(readStory());
  };
  return (
    <div style={{ padding: "5rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", padding: "2rem" }}>
        THÊM STORY
      </h1>
      <form>
        <textarea
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <Button content="THÊM" color="blue" onClick={handleSubmit} />
          <Button content="QUAY LẠI" color="green" onClick={()=>navigate("/admin")} />
        </div>
      </form>
    </div>
  );
};

export default EditStory;
