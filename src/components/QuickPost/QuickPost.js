import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [loading, setLoading] = useState(false);

  const { value, onChange } = useTextInput("");
  console.log("user data: ", userData);

  const fileChangeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // const validate = () => {};

  const formSubmitHandler = () => {
    setUploadStatus("inprogress");
    setLoading(true);

    // create image post once upload is done

    const postObject = {
      imageUrl: downloadURL,
      title: value,
      posterProfilePicURL: userData.profilePicURL
        ? userData.profilePicURL
        : null,
      authorFullName: userData.fullName,
    };
    uploadFile(selectedFile)
      .then((url) => {
        console.log("url: ", url);
        setDownloadURL(url);
        postObject.imageUrl = url;
        createImagePost(postObject, user.uid).then((doc) => {
          console.log("everything done!");
          console.log(doc);
          window.location.reload();
        });
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
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
        <Button
          onClick={onCancel}
          disabled={loading}
          text="Cancel"
          className={"cancelBtn"}
        />
        <Button
          disabled={loading}
          text="Create Post"
          onClick={formSubmitHandler}
        />
      </div>
      {loading && "Loading..."}
    </div>
  );
}
