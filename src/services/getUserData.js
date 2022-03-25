import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const fetchUserData = async (ID) => {
  const docSnap = await getDoc(doc(db, "users", ID));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};
