import React, { useState, useContext } from "react";
import "./LoginModal.scss";
import Modal from "../Modal/Modal";
import { AuthContext } from "../../context/AuthContext";

export default function LoginModal({ showModal, onClose }) {
  // Use userinput hook for later on plz
  const { user, signup, logout } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    console.log("submitted");
    signup(email, password);
    e.preventDefault();
  };
  return (
    <Modal showModal={showModal} onClose={onClose}>
      <div>
        <form onSubmit={(e) => formSubmitHandler(e)}>
          <div className="login_fields">
            <label>
              <div>Login</div>
              <input
                type={"text"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <div>Password</div>

              <input
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </Modal>
  );
}
