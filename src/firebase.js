import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

// export const uploadFile = (file, setSnapshot, setUploadStatus) => {
//   const fileName = file.name;
//   const fileRef = ref(storage, `photosnap_images/${fileName}`);
//   const uploadBytesTask = uploadBytesResumable(fileRef, file);
//   uploadBytesTask.on(
//     "state_changed",
//     (snapshot) => {
//       // console.log("progress: ", snapshot.bytesTransferred);
//       setSnapshot(snapshot);
//     },
//     (err) => console.log("err"),
//     () => {
//       getDownloadURL(uploadBytesTask.snapshot.ref).then((downloadUrl) =>
//         setUploadStatus(true)
//       );
//     }
//   );

//   // uploadBytes.on("state_changed");
// };
