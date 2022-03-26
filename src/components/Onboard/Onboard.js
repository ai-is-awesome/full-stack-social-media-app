import React, { useContext } from "react";
import "./Onboard.scss";
import useTextInput from "../../hooks/useTextInput";
import TextInput from "../ResuableComponents/TextInput/TextInput";
import Navbar from "../Navbar/Navbar";
import { addUserInfo } from "../../services/userRegister";
import { AuthContext } from "../../context/AuthContext";
import { fetchUserData } from "../../services/getUserData";
import { UserContext } from "../../context/UserContext";

export default function Onboard() {
  const { value, onChange } = useTextInput("");
  const { user } = useContext(AuthContext);
  const { setUserData } = useContext(UserContext);
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (user) {
      addUserInfo({ fullName: value }, user.uid).then((res) =>
        fetchUserData(user.uid).then((doc) => {
          console.log("doc: ", doc);
          console.log(setUserData);
          setUserData(doc);
        })
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="onboard_container">
        <div className="onboard_content">
          <div className="onboard_heading">
            Let's fill this quick form before you catch up with the posts!
          </div>
          <form className="onboard_form" onSubmit={(e) => onFormSubmit(e)}>
            <TextInput
              value={value}
              onChange={onChange}
              label={"Enter your full name"}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
