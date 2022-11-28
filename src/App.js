import React, { useContext, useEffect, useState } from "react";
import "./reset.css";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post/Post";
import Sidebar from "./components/Sidebar/Sidebar";
import { AuthContext } from "./context/AuthContext";
import SunSVG from "./components/ResuableComponents/SunSVG";
import { postsFetch } from "./services/postsFetch";
import ActiveUsers from "./components/ActiveUsers/ActiveUsers";
import CreatePost from "./components/CreatePost/CreatePost";

// import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  if (posts.length) {
    console.log("posts: ", posts[0]["userRef"]["path"]);
  }
  useEffect(() => {
    postsFetch(setPosts);
    // console.log("posts: ", posts);
  }, []);

  return (
    <>
      <Navbar />
      {/* <div>
        <button onClick={toggleTheme}>Click to toggle theme!</button>
        Theme is : {theme === false ? "FALSE" : "TRUE"}
      </div> */}
      <div className="container">
        <div className="home_container">
          {/* <div className="sun_svg">
          <SunSVG />
        </div> */}
          <Sidebar />
          <div className="middle-section">
            <CreatePost />
            <div className="posts">
              {posts.map((post) => (
                <Post
                  imageUrl={post.imageUrl}
                  title={post.title}
                  profileName={post?.authorFullName}
                  profilePicUrl={post?.posterProfilePicURL}
                  userRef={post?.userRef}
                />
              ))}
            </div>
          </div>
          <ActiveUsers />
        </div>
      </div>
    </>
  );
}
