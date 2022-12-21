import React, { useEffect } from "react";
import "./style.scss";
import logo from "../../assets/img/logo.png";
import avatar from "../../assets/img/avatar.png";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/Login/LoginSlice";
import { readStory } from "../../redux/Main/HomeSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  const users = JSON.parse(localStorage.getItem("user"));
  console.log(users);
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/login");
  };
  const handleLogout = () => {
    dispatch(logout());
    dispatch(readStory());
  };
  useEffect(() => {}, [user]);
  const renderUser = () => {
    return users?.id ? (
      <>
        <div className="header__right__info">
          <span className="header__right__info__handicrafted">
            Handicrafted by
          </span>
          <span className="header__right__info--name">{users?.fullName}</span>
          <div>
            <div className="More">
              More
              <div className="More__hiddent">
                {users?.roleID === 1 && (
                  <button
                    onClick={() => navigate("/admin")}
                    style={{
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Admin
                  </button>
                )}
                <button
                  onClick={() => navigate("/changePass")}
                  style={{
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Đổi Mật Khẩu
                </button>
                <button
                  onClick={handleLogout}
                  style={{
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <img className="header__right__avatar" src={avatar} alt="avatar" />
      </>
    ) : (
      <Button
        content="Đăng Nhập, Đăng Kí"
        color="var(--background-secondary)"
        onClick={handleClick}
      />
    );
  };
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <div className="header__right">{renderUser()}</div>
    </header>
  );
};

export default Header;
