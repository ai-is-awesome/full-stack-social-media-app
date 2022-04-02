import { ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";

const storageFolder = "imagePosts";

const uploadFile = (file, setSnapshot, setUploadStatus) => {
  if (!file) {
    setUploadStatus("failed");
    return null;
  }

  const fileName = file.name;
  const storageRef = ref(storage, `${storageFolder}/${fileName}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on("state_changed", {
    complete: function () {
      console.log("upload complete!");
      setUploadStatus("successful");
    },
    error: function () {
      setUploadStatus("failed");
    },
  });
};

export default uploadFile;
