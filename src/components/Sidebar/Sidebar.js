import React from "react";
import "./Sidebar.scss";
import { AiFillHome } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className="sidebar_container">
      <div className="sidebar_item">
        <AiFillHome />
        Home
      </div>
      <div className="sidebar_item">
        <IoCreateOutline />
        Create Post
      </div>
      <div className="sidebar_item">
        <IoCreateOutline />
        Login or Signup!
      </div>
      <div className="sidebar_item">Home</div>
    </div>
  );
}
