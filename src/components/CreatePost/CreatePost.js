import "./CreatePost.scss";
import React, { useContext, useState } from "react";
import useTextInput from "../../hooks/useTextInput";
import uploadFile from "../../services/uploadFile";
import { AuthContext } from "../../context/AuthContext";
import AuthModal from "../AuthModal/AuthModal";
import { createImagePost } from "../../services/imagePost";
import Loading from "../ResuableComponents/Loading/Loading";
import { UserContext } from "../../context/UserContext";

const CreatePost = () => {
  const { value, onChange } = useTextInput("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { user } = useContext(AuthContext);
  const { userData } = useContext(UserContext);
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

  console.log("USERDATA", userData);

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
      .then((imageUrl) => {
        const postObject = {
          imageUrl,
          title: value,
          posterProfilePicURL: userData.profilePicURL,
          authorFullName: userData.fullName,
        };
        createImagePost(postObject, user.uid).then(() => {
          console.log("Post uploaded successfully!");
          window.location.reload();
        });
      })
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
    <>
      <div
        className="createpost_container"
        onClick={() => {
          console.log("hello from onclick");
          if (user === null) {
            console.log("Setting modal state to true");
            setShowModal(true);
          }
        }}
      >
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
        {isLoading && <Loading inline={true} />}
        {errorMessageDiv}
      </div>
      <AuthModal
        showModal={showModal}
        onClose={() => {
          setShowModal(false);
          console.log("ON CLOSE REACHED");
        }}
        messageJsx={authMessageJsx}
      />
    </>
  );
};

export default CreatePost;
