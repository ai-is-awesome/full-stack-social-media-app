import { db } from "../firebase";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";

export const postsFetch = async (setPosts) => {
  const q = query(
    collection(db, "posts"),
    orderBy("timeCreated", "desc"),
    limit(1)
  );
  const querySnapshot = await getDocs(q);

  setPosts(querySnapshot.docs.map((doc) => doc.data()));
};
