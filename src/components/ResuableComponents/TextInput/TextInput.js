import React from "react";
import "./TextInput.scss";

export default function TextInput({
  onChange,
  value,
  type,
  inputWidth,
  label,
}) {
  return (
    <label>
      <div className="input_container">
        <div>{label}</div>
        <input type={type} value={value} onChange={onChange} />
      </div>
    </label>
  );
}
