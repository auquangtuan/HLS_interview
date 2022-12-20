import React from "react";
import useWindowDimensions from "../../helper/hook/useWindowsScreen";
import "./style.scss";
/**
 *
 * @param {*position} : topLeft, topRight, bottomLeft, bottomRight
 * @returns top if screen > 939 and return left orr right if screen < 939
 */
const Input = ({
  id,
  register,
  className,
  errors,
  position,
  number,
  name,
  ...rest
}) => {
  const { width } = useWindowDimensions();
  const SCREEN = 939;
  return (
    <div className="InputComponent">
      <input
        id={id}
        className={`input ${
          errors && width < SCREEN
            ? ((position === "topLeft" || position === "topRight") && "pTop") ||
              ((position === "bottomLeft" || position === "bottomRight") &&
                "pBottom")
            : ""
        } ${errors && "errors"} ${className}`}
        {...rest}
        {...register(id)}
      />
      {errors && (
        <>
          <div
            className={`errorCheck ${
              width > SCREEN
                ? ((position === "topLeft" || position === "bottomLeft") &&
                    "pLeft") ||
                  ((position === "topRight" || position === "bottomRight") &&
                    "pRight")
                : ((position === "topLeft" || position === "topRight") &&
                    "top") ||
                  ((position === "bottomLeft" || position === "bottomRight") &&
                    "bottom")
            }`}
          >
            {errors?.message}
          </div>
          {errors && (
            <i
              className={`${
                (width < SCREEN &&
                  (position === "topLeft" || position === "topRight") &&
                  "topIcon") ||
                "bottomLeftRightIcon"
              } error_icon`}
            ></i>
          )}
        </>
      )}
    </div>
  );
};

export default Input;
