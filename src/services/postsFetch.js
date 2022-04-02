import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const postsFetch = async (setPosts) => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  setPosts(querySnapshot.docs.map((doc) => doc.data()));
};
