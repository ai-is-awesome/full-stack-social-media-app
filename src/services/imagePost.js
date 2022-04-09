import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase";

export const createImagePost = (postObject, uid) => {
  return new Promise(async (resolve, reject) => {
    const postType = "imagePost";
    const postUploadTime = Timestamp.fromDate(new Date());
    const numLikes = 0;
    const userRef = doc(db, "users", uid);

    //   const postObject = {
    //     postType,
    //     imageUrl,
    //     numLikes,
    //     timeCreated: postUploadTime,
    //     title: postTitle,
    //     userRef,
    //     posterName: posterName,
    //     posterProfileURL: posterProfilePicURL,
    //   };
    const completePostObject = {
      postType,
      numLikes,
      userRef,
      timeCreated: postUploadTime,
      ...postObject,
    };
    console.log("download url from inside image post", completePostObject);

    if (!completePostObject.imageUrl) {
      console.log("oops cnat fidn img");
      return;
    }

    const docRef = await addDoc(collection(db, "posts"), completePostObject);
    resolve(docRef);
    //   await setDoc(doc)
  });
};
