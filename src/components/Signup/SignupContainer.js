import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function SignupContainer({}) {
  // Use userinput hook for later on plz
  const { signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    console.log("submitted");
    signup(email, password);
    e.preventDefault();
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
