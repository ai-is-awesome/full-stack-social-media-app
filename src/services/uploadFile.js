import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase";
import { getFileExtensionFromFileName, validateFileExtension } from "../utils";

const storageFolder = "imagePosts";

const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject("No file Found");
    }

    const fileName = file.name;

    const isFileValid = validateFileExtension(file);

    if (!isFileValid) {
      reject("File format is incorrect. File should be jpeg, jpg or png");
    }
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
