import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { AuthContext } from "../../context/AuthContext";
import AuthModal from "../AuthModal/AuthModal";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { getImageFallbackURL } from "../../utils";

export default function Navbar() {
  const { user, loginWithEmail, logout, setAuthError } =
    useContext(AuthContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const { userData } = useContext(UserContext);

  return (
    <nav className="navbar_container">
      <div className="container">
        <Link className="brand_name" to={"/"}>
          BUZZTALK
        </Link>
        {/* <a className="brand_name"></a> */}
        <div className="nav__search-bar">
          <BsSearch />
          <input
            type={"search"}
            placeholder="Search for different posts and people!"
          />
        </div>
        {!user ? (
          <button
            className="login_or_signup_btn"
            onClick={() => setShowLoginModal(!showLoginModal)}
          >
            Login / Signup
          </button>
        ) : (
          <>
            <div
              onClick={() => setProfileModal((prev) => !prev)}
              className="profile-icon-container"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ marginRight: "1rem" }} className="welcome-text">
                  Create Post
                </p>
                {userData?.profilePicURL ? (
                  <div className="user_profile_pic_container">
                    <img src={userData.profilePicURL} alt="user profile" />
                  </div>
                ) : (
                  <div className="user_profile_pic_container">
                    <img src={getImageFallbackURL()} alt="user profile" />
                  </div>
                )}
              </div>

              {profileModal && (
                <>
                  <button onClick={() => logout()} className="logout-btn">
                    Logout
                  </button>
                </>
              )}
            </div>
          </>
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
      </div>
    </nav>
  );
}
