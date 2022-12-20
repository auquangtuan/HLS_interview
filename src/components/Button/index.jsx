import React from "react";
import "./style.css";
const Button = ({ className, content, primary, secondary, color , onClick}) => {
  return (
    <button
      className={`buttonComponent ${className}`}
      onClick={onClick}
      style={{
        backgroundColor: ` ${
          primary
            ? "var(--background-primary)"
            : secondary
            ? "var(--background-secondary)"
            : color
        }`,
      }}
    >
      {content}
    </button>
  );
};

export default Button;
