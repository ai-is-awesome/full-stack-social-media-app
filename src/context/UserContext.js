import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  // getFirestore,
  // collection,
  getDoc,
  // getDocs,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "./AuthContext";

export const UserContext = React.createContext();

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loadingUserData, setLoadingUserData] = useState(true);
  let navigate = useNavigate();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    // const fetchUserData = async () => {
    //   const usersCollectionRef = collection(db, "users");
    //   const querySnapshot = await getDocs(usersCollectionRef);
    //   querySnapshot.forEach((doc) => console.log(doc.id, "=>", doc.data()));
    // };
    // fetchUserData();
    const fetchUserData = async () => {
      if (user) {
        const docSnap = await getDoc(doc(db, "users", user.uid));
        if (docSnap.exists()) {
          setUserData(docSnap.data());
          console.log(docSnap.data());
        } else {
          navigate("onboard");
        }
      } else {
        setUserData(null);
      }
    };

    fetchUserData();
  }, [user, navigate]);

  // if (snap.exists()) {
  //   console.log("user data", snap.data());
  // } else {
  //   console.log("nothing found");
  // }

  return (
    <>
      <UserContext.Provider value={{ userData, loadingUserData }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
