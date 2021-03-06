import React, { useContext, useEffect, useState } from "react";
import "./reset.css";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post/Post";
import Sidebar from "./components/Sidebar/Sidebar";
import { AuthContext } from "./context/AuthContext";
import SunSVG from "./components/ResuableComponents/SunSVG";
import { postsFetch } from "./services/postsFetch";

// import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    postsFetch(setPosts);
  }, []);

  return (
    <>
      <Navbar />
      {/* <div>
        <button onClick={toggleTheme}>Click to toggle theme!</button>
        Theme is : {theme === false ? "FALSE" : "TRUE"}
      </div> */}

      <div className="home_container">
        <div className="sun_svg">
          <SunSVG />
        </div>
        {user && <Sidebar />}
        <div className="posts">
          {posts.map((post) => (
            <Post
              imageUrl={post.imageUrl}
              title={post.title}
              profileName={post?.authorFullName}
            />
          ))}
        </div>
      </div>
    </>
  );
}
