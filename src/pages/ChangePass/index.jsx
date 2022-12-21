import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { changePass, logout } from "../../redux/Login/LoginSlice";
import { schema } from "./schema";
import "./style.scss";
const ChangePass = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const userData = {
      passwordOLD: data.password,
      password: data.newPassword,
    };
    try {
      const res = await dispatch(changePass([ JSON.parse(localStorage.getItem("user"))?.id, userData]));
      console.log(res.payload);
      if (res.payload.id) {
        alert("Đổi Mật Khẩu Thành Công");
        dispatch(logout())
        navigate("/");
    } else if(res.payload.flag === false) {
        alert("Đổi Mật Khẩu Thất Bại Do MK cũ không đúnng");
    }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="change">Đổi Mật Khẩu</h1>
      <div className="ChangePass">
        <div className="registerForm">
          <div className="formContainer">
            <Input
              id="password"
              placeholder="Nhập mật khẩu CŨ..."
              register={register}
              errors={errors.password}
              position="bottomLeft"
              type="password"
            />
            <Input
              id="confirmPassword"
              placeholder="Nhập lại mật khẩu một lần nữa nhé..."
              register={register}
              errors={errors.confirmPassword}
              position="bottomRight"
              type="password"
            />
            <Input
              id="newPassword"
              placeholder="Nhập MẬT KHẨU MỚI..."
              register={register}
              errors={errors.newPassword}
              position="bottomRight"
              type="password"
            />
          </div>
          <div className="containerBtn" style={{gap : "2rem"}}>
            <Button
              color="green"
              content="Đổi Mật Khẩu"
              onClick={handleSubmit(onSubmit)}
            />
            <Button
              color="blue"
              content="Quay Lại"
              onClick={()=>navigate("/")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePass;
