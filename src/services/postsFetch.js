import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const postsFetch = async (setPosts) => {
  const q = query(collection(db, "posts"), orderBy("timeCreated", "desc"));
  const querySnapshot = await getDocs(q);

  setPosts(querySnapshot.docs.map((doc) => doc.data()));
};
