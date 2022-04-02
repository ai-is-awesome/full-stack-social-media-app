import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import QuickPost from "../QuickPost/QuickPost";
import SunSVG from "../ResuableComponents/SunSVG";
import Button from "../ResuableComponents/TextInput/Button";
import "./Sidebar.scss";

export default function Sidebar() {
  const { userData } = useContext(UserContext);
  const [showQuickPost, setShowQuickPost] = useState(false);

  const toggleShowQuickPost = () => {
    setShowQuickPost((p) => !p);
  };
  return (
    <div className="sidebar_container">
      <div className="sidebar_profile">
        <img
          alt="profile-pic"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ></img>
        <div className="greeting_container">
          <p className="greeting">Welcome Back</p>
          <p className="name">{userData ? userData.fullName : " "}</p>
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
