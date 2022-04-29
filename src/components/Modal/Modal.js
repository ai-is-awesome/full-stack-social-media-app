import React from "react";
import "./Modal.scss";

export default function Modal({ size, showModal, children, onClose }) {
  return (
    <>
      {showModal ? (
        <div className="model_container">
          <button className="modal_close_btn" onClick={onClose}>
            X
          </button>
          {children}
        </div>
      ) : null}
    </>
  );
}
