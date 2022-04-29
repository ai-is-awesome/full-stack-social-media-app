import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { AuthContext } from "../../context/AuthContext";
import AuthModal from "../AuthModal/AuthModal";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, loginWithEmail, logout, setAuthError } =
    useContext(AuthContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { userData } = useContext(UserContext);

  return (
    <nav className="navbar_container">
      <div>{userData && `Welcome ${userData.fullName}!`}</div>
      <Link className="brand_name" to={"/"}>
        BUZZTALK
      </Link>
      {/* <a className="brand_name"></a> */}
      {!user ? (
        <button
          className="login_or_signup_btn"
          onClick={() => setShowLoginModal(!showLoginModal)}
        >
          Login / Signup
        </button>
      ) : (
        <button onClick={() => logout()} className="logout-btn">
          Logout
        </button>
      )}
      <AuthModal
        showModal={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        // Close the modal on successful authentication
        onAuthSuccess={() => {
          setShowLoginModal(false);
          setAuthError("");
        }}
      />
    </nav>
  );
}
