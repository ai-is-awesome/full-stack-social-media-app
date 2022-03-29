import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const postsFetch = async () => {
  console.log("hello");
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc, i) => {
    console.log("posts: ", doc.data());
  });
};
