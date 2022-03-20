import React, { useContext } from "react";
import { BsHeart } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";

import "./Post.scss";
import { AuthContext } from "../../context/AuthContext";

export default function Post({
  profilePicUrl,
  name,
  postedtime,
  postImage,
  postDescription,
  likeCount,
}) {
  const { user } = useContext(AuthContext);
  return (
    <div className="post-main-container">
      <div className="post-container">
        <div className="header">
          <div className="profile-details">
            <div className="img-icon">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="post-details-container">
              <div className="full-name">Laura Fisher</div>
              <div className="time-posted">12 Hours Ago</div>
            </div>
          </div>
          <div className="dot-icon">...</div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi
          magni, officiis, nisi, ducimus at omnis esse odit in corporis amet
          illo provident asperiores autem ut? Omnis recusandae nesciunt
          voluptatibus?
        </div>
        <div className="post-image">
          <img
            alt="profile-img"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          />
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
