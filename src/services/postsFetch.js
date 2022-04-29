import { db } from "../firebase";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  doc,
  where,
} from "firebase/firestore";

export const postsFetch = async (setPosts) => {
  const q = query(
    collection(db, "posts"),
    orderBy("timeCreated", "desc"),
    limit(10)
  );
  const querySnapshot = await getDocs(q);

  setPosts(querySnapshot.docs.map((doc) => doc.data()));
};

export const fetchUserPosts = async (userId) => {
  const userRef = doc(db, "users", userId);
  // console.log("user ref: ", userRef);
  // console.log(userRef);
  const q = query(
    collection(db, "posts"),
    where("userRef", "==", userRef),
    orderBy("timeCreated", "desc"),
    limit(10)
  );
  const docs = await getDocs(q);
  return docs.docs.map((doc) => doc.data());
};
