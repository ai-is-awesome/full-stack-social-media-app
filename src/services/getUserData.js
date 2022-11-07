import {
  collection,
  doc,
  documentId,
  Firestore,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { getIdFromPath, getTopValues } from "../utils";

export const fetchUserData = async (ID) => {
  const docSnap = await getDoc(doc(db, "users", ID));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("No user found");
  }
};

export const getPopularProfiles = async () => {
  const postsRef = collection(db, "posts");
  const q = query(postsRef, limit(60));
  const querySnapshot = await getDocs(q);
  const mostPopular = {};
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const path = getIdFromPath(data.userRef.path);
    mostPopular[path] ? (mostPopular[path] += 1) : (mostPopular[path] = 1);
  });

  const topMostPopular = getTopValues(mostPopular, 4);
  const usersRef = collection(db, "users");
  const q2 = query(
    usersRef,
    where(documentId(), "in", Object.keys(topMostPopular))
  );

  const querySnapshot2 = await getDocs(q2);
  const data = querySnapshot2.docs.map((d) => {
    return { ...d.data(), numOfPosts: topMostPopular[d.id] };
  });

  return data.sort((a, b) => b.numOfPosts - a.numOfPosts);
};

getPopularProfiles().then(() => console.log("called scuccsefully"));
