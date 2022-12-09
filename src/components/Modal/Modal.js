import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Modal.scss";

export default function Modal({ size, showModal, children, onClose }) {
  const { setAuthError } = useContext(AuthContext);
  const executeOnClose = () => {
    setAuthError("");
    onClose();
  };
  return (
    <>
      {showModal ? (
        <div className="model_container">
          <button className="modal_close_btn" onClick={executeOnClose}>
            X
          </button>
          {children}
        </div>
      ) : null}
    </>
  );
}
