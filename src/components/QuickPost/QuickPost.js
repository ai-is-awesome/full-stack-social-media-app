import React, { useState } from "react";
import uploadFile from "../../services/uploadFile";
import Button from "../ResuableComponents/TextInput/Button";
import TextInput from "../ResuableComponents/TextInput/TextInput";
import "./QuickPost.scss";

export default function QuickPost({ onCancel }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("notInitialized");
  const fileChangeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const formSubmitHandler = () => {
    setUploadStatus("inprogress");
    uploadFile(selectedFile, "", setUploadStatus);
  };

  return (
    <div className="quickpost_container">
      <select>
        <option>Quick Add Image Post</option>
        <option>Add other Post(Redirect)</option>
      </select>
      <div className="inputs_container">
        <TextInput label={"Enter Post Title"} placeholder="Type here" />
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
