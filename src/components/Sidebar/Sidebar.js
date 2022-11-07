import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import { getUserProfilePageURL } from "../../utils";
import QuickPost from "../QuickPost/QuickPost";
import SunSVG from "../ResuableComponents/SunSVG";
import Button from "../ResuableComponents/TextInput/Button";
import "./Sidebar.scss";

export default function Sidebar() {
  const { userData } = useContext(UserContext);
  console.log("user data", userData);
  const [showQuickPost, setShowQuickPost] = useState(false);

  const toggleShowQuickPost = () => {
    setShowQuickPost((p) => !p);
  };
  return (
    <div className="sidebar_container">
      <div className="sidebar_profile">
        <img
          alt="profile-pic"
          src={
            userData?.profilePicURL
              ? userData.profilePicURL
              : "https://firebasestorage.googleapis.com/v0/b/socialmediaapp-59ba2.appspot.com/o/imagePosts%2Fman.png?alt=media&token=046ec377-5c0a-4b6b-b14b-67b2081d4be0"
          }
        ></img>
        <div className="greeting_container">
          <p className="greeting">Welcome Back</p>

          <Link
            className="name"
            to={userData ? getUserProfilePageURL(userData.firebaseUID) : "/"}
          >
            {userData ? userData.fullName : " "}
          </Link>
        </div>
      </div>
      {/* Conditional create post, only show when showCraetePost is false */}
      {!showQuickPost && (
        <button
          className="create_post"
          onClick={() => setShowQuickPost((p) => !p)}
        >
          Create Post
        </button>
      )}
      {/* Show / hide quick post */}
      {showQuickPost && <QuickPost onCancel={toggleShowQuickPost} />}
      {!showQuickPost && (
        <div className="sidebar_recent_posts_container">
          <p className="title">Your Recent Posts</p>
        </div>
      )}
    </div>
  );
}
