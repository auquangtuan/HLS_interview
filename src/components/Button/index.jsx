import React from "react";
import "./style.css";
const Button = ({ className, content, primary, secondary, color , onClick}) => {
  return (
    <button
      className={`buttonComponent ${className}`}
      style={{
        backgroundColor: ` ${
          primary
            ? "var(--background-primary)"
            : secondary
            ? "var(--background-secondary)"
            : color
        }`,
      }}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
