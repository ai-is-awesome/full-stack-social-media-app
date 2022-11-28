import React, { useContext, useState } from "react";
import "./AuthModal.scss";
import Modal from "../Modal/Modal";
import SignupContainer from "../Signup/SignupContainer";
import LoginContainer from "../Login/LoginContainer";
import { AuthContext } from "../../context/AuthContext";

export default function AuthModal(props) {
  // Props are
  // 1. onClose > function
  // 2. showModal > boolean
  // 3. messageJsx > String > A personal message to display on the auth modal
  const [activeAuth, setActiveAuth] = useState("login");
  const { authError } = useContext(AuthContext);
  return (
    <Modal {...props}>
      <div className={`auth_modal_container`}>
        {props.messageJsx}
        <div className="auth_tab_btn_container">
          <button
            className={activeAuth === "signup" ? "active" : ""}
            onClick={() => setActiveAuth("signup")}
          >
            Sign Up
          </button>
          <button
            className={activeAuth === "login" ? "active" : ""}
            onClick={() => setActiveAuth("login")}
          >
            login
          </button>
        </div>

        {activeAuth === "signup" ? (
          <SignupContainer onAuthSuccess={props.onAuthSuccess} />
        ) : (
          <LoginContainer onAuthSuccess={props.onAuthSuccess} />
        )}
        {authError.length !== 0 && (
          <div className="error-message">{authError}</div>
        )}
      </div>
    </Modal>
  );
}
