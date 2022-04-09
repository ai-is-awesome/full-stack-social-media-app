import React from "react";
import "./Button.scss";

export default function Button({ onClick, text, disabled, className }) {
  return (
    <button
      className={`btn_comp ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
