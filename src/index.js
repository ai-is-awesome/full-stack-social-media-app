import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/scss_styles/main.scss";
import App from "./App";
import ActiveUsers from "./components/ActiveUsers/ActiveUsers";
import Navbar from "./components/Navbar/Navbar";
import Onboard from "./components/Onboard/Onboard";
import Loading from "./components/ResuableComponents/Loading/Loading";
import UserProfile from "./components/UserProfile/UserProfile";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { UserDataProvider } from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <UserDataProvider>
            <Routes>
              <Route path="/" element={<App />}></Route>
              <Route path="onboard" element={<Onboard />}></Route>
              <Route path="loading" element={<Loading />}></Route>
              <Route path="profile/:userId" element={<UserProfile />}></Route>
              <Route path="temp" element={<ActiveUsers />}></Route>
            </Routes>
          </UserDataProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
