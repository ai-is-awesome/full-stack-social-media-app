import React, { useContext } from "react";
import "./Onboard.scss";
import useTextInput from "../../hooks/useTextInput";
import TextInput from "../ResuableComponents/TextInput/TextInput";
import Navbar from "../Navbar/Navbar";
import { addUserInfo } from "../../services/userRegister";
import { AuthContext } from "../../context/AuthContext";
import { fetchUserData } from "../../services/getUserData";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import useUploadMedia from "../../hooks/useUploadMedia";
import useFileInput from "../../hooks/useFileInput";

export default function Onboard() {
  const { value, onChange } = useTextInput("");
  const { user } = useContext(AuthContext);
  const { setUserData } = useContext(UserContext);
  const [selectedFile, onFileChange] = useFileInput(null);
  const navigate = useNavigate();
  const [uploadFileFun, loading, status, error] = useUploadMedia();
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (user) {
      let userObject = {
        fullName: value,
        email: user.email,
        firebaseUID: user.uid,
      };
      if (selectedFile) {
        uploadFileFun(selectedFile).then((downloadUrl) => {
          console.log("download url: ", downloadUrl);
          userObject.profilePicURL = downloadUrl;
          addUserInfo(userObject, user.uid).then((res) =>
            fetchUserData(user.uid).then((doc) => {
              console.log("doc: ", doc);
              console.log(setUserData);
              setUserData(doc);
              navigate("/");
            })
          );
        });
      } else {
        console.log("user uid", user.uid);
        addUserInfo(userObject, user.uid).then((res) => {
          fetchUserData(user.uid).then((doc) => {
            console.log("doc: ", doc);
            console.log(setUserData);
            setUserData(doc);
            navigate("/");
          });
        });
      }
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
            <input type={"file"} onChange={onFileChange} />
            <TextInput
              value={value}
              onChange={onChange}
              label={"Enter your full name"}
            />
            <button type="submit">Submit</button>
            {loading && "Uploading Files..."}
          </form>
        </div>
      </div>
    </>
  );
}
