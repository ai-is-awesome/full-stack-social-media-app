import React from "react";
import "./Button.scss";

export default function Button({ onClick, text }) {
  return (
    <button className="btn_comp" onClick={onClick}>
      {text}
    </button>
  );
}
