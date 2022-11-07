import React, { useContext, useState } from "react";
import "./AuthModal.scss";
import Modal from "../Modal/Modal";
import SignupContainer from "../Signup/SignupContainer";
import LoginContainer from "../Login/LoginContainer";
import { AuthContext } from "../../context/AuthContext";

export default function AuthModal(props) {
  const [activeAuth, setActiveAuth] = useState("login");
  const { authError } = useContext(AuthContext);
  return (
    <Modal {...props}>
      <div className={`auth_modal_container`}>
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
          <div className="auth_error_message">{authError}</div>
        )}
      </div>
    </Modal>
  );
}
