import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { fetchUserData } from "../services/getUserData";

export const UserContext = React.createContext();

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loadingUserData, setLoadingUserData] = useState(true);
  let navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // console.log(user);
  useEffect(() => {
    const fun = async () => {
      if (user) {
        fetchUserData(user.uid)
          .then((results) => {
            setUserData(results);
          })
          .catch((e) => navigate("onboard"));
      } else {
        setUserData(null);
      }
    };
    fun();
  }, [user, navigate]);

  return (
    <>
      <UserContext.Provider value={{ userData, loadingUserData, setUserData }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
