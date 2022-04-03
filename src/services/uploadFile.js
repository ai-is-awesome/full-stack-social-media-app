import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase";

const storageFolder = "imagePosts";

const uploadFile = (file, setUploadStatus, setDownloadURL, callback) => {
  if (!file) {
    setUploadStatus("failed");
    return null;
  }

  const fileName = file.name;
  const storageRef = ref(storage, `${storageFolder}/${fileName}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on("state_changed", {
    complete: async function () {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      console.log("download url: ", downloadURL);
      setDownloadURL(downloadURL);
      console.log("upload complete!");
      setUploadStatus("successful");
      callback();
    },
    error: function () {
      setUploadStatus("failed");
    },
  });
};

export default uploadFile;
