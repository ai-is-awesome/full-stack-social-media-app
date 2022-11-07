import React, { useContext, useState } from "react";
import "./LoginContainer.scss";
import { AuthContext } from "../../context/AuthContext";

export default function LoginContainer({ onAuthSuccess }) {
  // Use userinput hook for later on plz
  const { login, setAuthError, authError } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    login(email, password)
      .then(() => onAuthSuccess())
      .catch((e) => setAuthError(e.message));
  };

  return (
    <div>
      <form onSubmit={(e) => formSubmitHandler(e)}>
        <div className="login_fields">
          <label>
            <div className="input_container">
              <div>Email</div>
              <input
                type={"text"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </label>

          <label>
            <div className="input_container">
              <div>Password</div>
              <input
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </label>
        </div>
        <button type="submit" className="btn_login">
          Login
        </button>
      </form>
    </div>
  );
}
