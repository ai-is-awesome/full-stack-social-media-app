import React, { useContext, useState } from "react";
import "./reset.css";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post/Post";
import Modal from "./components/Modal/Modal";

// import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [modal, setModal] = useState(false);
  console.log(theme);
  return (
    <>
      <Navbar />
      {/* <div>
        <button onClick={toggleTheme}>Click to toggle theme!</button>
        Theme is : {theme === false ? "FALSE" : "TRUE"}
      </div> */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
}
