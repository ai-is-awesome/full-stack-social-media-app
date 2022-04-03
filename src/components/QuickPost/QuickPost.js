import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import useTextInput from "../../hooks/useTextInput";
import { createImagePost } from "../../services/imagePost";
import uploadFile from "../../services/uploadFile";
import Button from "../ResuableComponents/TextInput/Button";
import TextInput from "../ResuableComponents/TextInput/TextInput";
import "./QuickPost.scss";

export default function QuickPost({ onCancel }) {
  const { userData } = useContext(UserContext);
  const { user } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("notInitialized");
  const [downloadURL, setDownloadURL] = useState(null);
  const { value, onChange } = useTextInput("");

  const fileChangeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const formSubmitHandler = () => {
    setUploadStatus("inprogress");

    // create image post once upload is done
    const postObject = {
      imageUrl: downloadURL,
      title: value,
      posterProfilePicURL: userData.profilePictureURL
        ? userData.profilePictureURL
        : null,
      posterName: userData.fullName,
    };
    const callback = () => {
      createImagePost(postObject, user.uid);
    };
    uploadFile(selectedFile, setUploadStatus, setDownloadURL, callback);
  };

  return (
    <div className="quickpost_container">
      <select>
        <option>Quick Add Image Post</option>
        <option>Add other Post(Redirect)</option>
      </select>
      <div className="inputs_container">
        <TextInput
          label={"Enter Post Title"}
          placeholder="Type here"
          value={value}
          onChange={onChange}
        />
        <input
          type="file"
          onChange={(e) => fileChangeHandler(e)}
          accept=".png, .jpg, .jpeg"
        />
      </div>
      <div className="quickpost_btns_container">
        <button onClick={onCancel}>Cancel</button>
        <Button text="Create Post" onClick={formSubmitHandler} />
      </div>
      upload status: {uploadStatus}
    </div>
  );
}
