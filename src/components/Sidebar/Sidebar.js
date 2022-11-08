import React from "react";
import "./Sidebar.scss";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className="sidebar_container">
      <div className="sidebar_item active">
        <AiFillHome />
        <span>Home</span>
      </div>
      <div className="sidebar_item">
        <IoCreateOutline />
        <span>Create Post</span>
      </div>
      <div className="sidebar_item">
        <IoCreateOutline />
        <span>Create Post</span>
      </div>
      <div className="sidebar_item">
        <AiOutlineLogin />
        <span>Login</span>
      </div>
    </div>
  );
}
