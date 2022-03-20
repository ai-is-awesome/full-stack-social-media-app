import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  const cred = { email: "test", password: "test", firstName: "Sunil" };

  function loginWithEmail(email, password) {
    if (email === cred.email && password === cred.password) {
      setUser({ email: cred.email, firstName: cred.firstName });
    }
  }

  function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        setUser(userCredential.user);
        console.log("user is SET!");
      }
    );
  }

  function logout() {
    console.log("logging out");
    auth.signOut();
  }

  function login(email, password) {
    signInWithEmailAndPassword(email, password);
  }

  onAuthStateChanged(auth, (user) => {
    setAuthReady(true);
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <>
      <AuthContext.Provider
        value={{ loginWithEmail, user, logout, signup, authReady }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
