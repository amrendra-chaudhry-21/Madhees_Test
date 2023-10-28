/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconOutlinePlus35 } from "../../icons/IconOutlinePlus35";
import "./style.css";

export const Button = ({ size, type, style, className, signUpClassName, text = "Button" }) => {
  return (
    <button className={`button ${style} ${type} ${size} ${className}`}>
      {style === "text" && <div className={`text-wrapper ${signUpClassName}`}>{text}</div>}

      {style === "icon-right" && <div className="div">{text}</div>}

      {["double-icon", "icon-left", "icon-right", "icon"].includes(style) && (
        <IconOutlinePlus35
          className={`${["l", "m"].includes(size) ? "class" : "class-2"}`}
          color={type === "primary" ? "white" : "#1C1C1C"}
        />
      )}

      {["double-icon", "icon-left"].includes(style) && <div className="text-wrapper-2">{text}</div>}

      {style === "double-icon" && (
        <IconOutlinePlus35
          className={`${["l", "m"].includes(size) ? "class" : "class-2"}`}
          color={type === "primary" ? "white" : "#1C1C1C"}
        />
      )}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["l", "XS", "m", "s"]),
  type: PropTypes.oneOf(["primary", "secondary", "plain"]),
  style: PropTypes.oneOf(["icon", "icon-right", "icon-left", "text", "double-icon"]),
  text: PropTypes.string,
};
