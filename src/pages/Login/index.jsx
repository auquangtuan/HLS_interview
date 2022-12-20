import React, { useState } from "react";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import img from "../../assets/img/logo.png";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import RegisterForm from "../../container/RegisterForm";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Login/LoginSlice";
const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const userData = {
      userName: data.username,
      password: data.password,
    };
    try {
      const res = await dispatch(login(userData));
      if (res.payload.asscess_Token) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="loginPage">
        <div className="loginPageWraper">
          <div className="loginUser">
            <div className="headerLogin">
              <img src={img} alt="LOGO" />
              <span className="sloganLogin">
                Đăng nhập xem chuyện cười thư giãn mỗi ngày. Cùng chia sẻ cho
                bạn bè khoảnh khắc thú vị.
              </span>
            </div>
            <div className="loginContainer">
              <div className="loginLogin">
                <form className="loginForm">
                  <Input
                    id="username"
                    placeholder="Nhập tên tài khoản..."
                    type="text"
                    register={register}
                    errors={errors.username}
                    position="topLeft"
                  />
                  <Input
                    id="password"
                    placeholder="Nhập mật khẩu..."
                    type="password"
                    register={register}
                    errors={errors.password}
                    position="bottomRight"
                  />
                  <Button
                    onClick={handleSubmit(onSubmit)}
                    type="submit"
                    content="Đăng nhập"
                    color="blue"
                  />
                </form>
                <Link className="linknavigate" to="/forgot">
                  Quên mật khẩu ?
                </Link>
                <div className="spliter" />
                <Button
                  className="create-account"
                  content="Tạo tài khoản"
                  color="green"
                  onClick={handleOpen}
                />
              </div>
            </div>
          </div>
        </div>
        <Modal
          open={open}
          children={<RegisterForm />}
          handleOpen={handleOpen}
          title="Đăng Kí"
          description="Nhanh chóng và dễ dàng"
          className="ModalLogin"
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default Login;
