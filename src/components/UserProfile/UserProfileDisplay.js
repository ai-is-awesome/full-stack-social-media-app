import React from "react";
import "./UserProfileDisplay.scss";

export default function UserProfileDisplay({ name, imageURL }) {
  return (
    <div className="profile-display-container">
      <div className="profile-display-image-container"></div>

      <div className="profile-inner">
        <img src={imageURL} alt="User Pic" width={200} height={200} />
        <p>Welcome to {name}'s Page!</p>
      </div>
    </div>
  );
}
