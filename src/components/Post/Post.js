import React from "react";
import { BsHeart } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";

import "./Post.scss";
import { getIdFromPath, getImageFallbackURL } from "../../utils";
import { Link } from "react-router-dom";

export default function Post({
  profilePicUrl,
  name,
  profileName,
  userRef,
  postedtime,
  postImage,
  imageUrl,
  title,
  postDescription,
  likeCount,
}) {
  console.log(profilePicUrl);
  const profileHREF = `/profile/${getIdFromPath(userRef["path"])}`;
  // console.log(profileHREF);
  return (
    <div className="post-main-container">
      <div className="post-container">
        <div className="header">
          <div className="profile-details">
            <div className="img-icon">
              <img
                src={profilePicUrl ? profilePicUrl : getImageFallbackURL()}
                alt=""
              />
            </div>
            <div className="post-details-container">
              <Link to={profileHREF} className="full-name">
                {profileName}
              </Link>
              <div className="time-posted">12 Hours Ago</div>
            </div>
          </div>
          <div className="dot-icon">...</div>
        </div>
        <div className="title">{title}</div>
        <div className="post-image">
          <img alt="profile-img" src={imageUrl} />
        </div>
        <div className="reaction-container">
          <div className="upvote_container">
            <BsHeart />
          </div>
          <div className="comment">
            <BiCommentDetail />
          </div>
        </div>
      </div>
    </div>
  );
}
