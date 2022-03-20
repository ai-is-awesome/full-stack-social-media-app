import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { AuthContext } from "../../context/AuthContext";
import LoginModal from "../LoginModal/LoginModal";

export default function Navbar() {
  const { user, loginWithEmail, logout } = useContext(AuthContext);
  const [showLoginModal, setShowLoginModal] = useState(false);

  console.log(user);
  return (
    <nav className="navbar_container">
      <div>
        USER : <code>{user === null ? "NO USER" : user.email}</code>
      </div>
      <div className="brand_name">SOCIAL MEDIA APP</div>
      {!user ? (
        <button
          className="login_or_signup_btn"
          onClick={() => setShowLoginModal(!showLoginModal)}
        >
          Login / Signup
        </button>
      ) : (
        <button onClick={() => logout()}>Logout</button>
      )}
      <LoginModal
        showModal={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </nav>
  );
}
