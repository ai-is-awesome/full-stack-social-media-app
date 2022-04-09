import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase";

const storageFolder = "imagePosts";

const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject("No file Found");
    }

    const fileName = file.name;
    const storageRef = ref(storage, `${storageFolder}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed", {
      complete: async function () {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      },
      error: function () {
        reject("Failed to upload");
      },
    });
  });
};

export default uploadFile;
