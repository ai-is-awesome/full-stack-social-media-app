import "./CreatePost.scss";
import React, { useContext, useState } from "react";
import useTextInput from "../../hooks/useTextInput";
import uploadFile from "../../services/uploadFile";
import { AuthContext } from "../../context/AuthContext";
import AuthModal from "../AuthModal/AuthModal";

const CreatePost = () => {
  const { value, onChange } = useTextInput("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { user } = useContext(AuthContext);
  const authModalMessage = "Please";
  const authMessageJsx = (
    <p
      style={{
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginBottom: "2rem",
        letterSpacing: "1px",
        color: "black",
        opacity: ".8",
      }}
    >
      <span style={{ color: "pink" }}>Signup</span> to immediately start posting
      content!
    </p>
  );

  console.log("user from creaet post is ; " + user);

  const fileOnChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const formSubmitHandler = () => {
    if (value.length < 8) {
      setErrorMessage(
        "Title's length is too short. Title should be at least 8 characters long"
      );

      return;
    }
    setIsLoading(true);
    uploadFile(selectedFile)
      .then(() => {})
      .catch((e) => setErrorMessage(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const errorMessageDiv =
    errorMessage === null ? (
      ""
    ) : (
      <div className="error-message">{errorMessage}</div>
    );

  return (
    <div
      className="createpost_container"
      onClick={() => {
        if (user === null) {
          console.log("hello from onclick");
          setShowModal(true);
        }
      }}
    >
      <AuthModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        messageJsx={authMessageJsx}
      />
      <input
        type="text"
        placeholder="Write an interesting title"
        className="text-input"
        onChange={(e) => onChange(e)}
      />
      <input
        type="file"
        name="uploadfile"
        id="img"
        style={{ display: "none" }}
        disabled={user === null}
        onChange={fileOnChange}
        accept=".png, .jpg, .jpeg"
      />
      <label htmlFor="img" id="select_file_label">
        {selectedFile ? selectedFile.name : "Please select a file"}
      </label>
      <button
        className="primary_btn"
        onClick={formSubmitHandler}
        disabled={user === null}
      >
        Create Post
      </button>
      {errorMessageDiv}
    </div>
  );
};

export default CreatePost;
