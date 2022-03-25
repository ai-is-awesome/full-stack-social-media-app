import { db } from "../firebase";
import {
  //   addDoc,
  //   collection,
  setDoc,
  doc,
} from "firebase/firestore";

export const addUserInfo = async (userObj, id) => {
  try {
    const results = await setDoc(doc(db, "users", id), userObj);
    return results;
  } catch (e) {
    console.log("error: ", e);
  }
};
