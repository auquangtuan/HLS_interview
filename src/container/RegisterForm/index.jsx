import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { registers } from "../../redux/Login/LoginSlice";
import { schema } from "./schema";
import "./style.scss";

const RegisterForm = () => {
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
      fullName: data.fullName,
      userName: data.userName,
      password: data.password,
    };
    try {
      const res = await dispatch(registers(userData));
      console.log(res.payload);
      if (res.payload.id) {
        alert("Đăng Kí Thành Công");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="registerForm">
      <div className="formContainer">
        <div style={{ display: "flex", gap: "12px" }}>
          <Input
            id="fullName"
            placeholder="Họ Và Tên..."
            register={register}
            errors={errors.fullName}
            position="bottomLeft"
          />
          <Input
            id="userName"
            placeholder="Tên Người Dùng..."
            register={register}
            errors={errors.userName}
            position="bottomRight"
          />
        </div>
        <Input
          id="password"
          placeholder="Nhập mật khẩu bạn muốn..."
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
      </div>
      <div className="containerBtn">
        <Button
          color="green"
          content="Đăng kí"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default RegisterForm;
