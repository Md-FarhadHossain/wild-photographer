import React from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../config/firebase";
import { useState } from "react";
import { useEffect } from "react";

export const UserContext = createContext();

const AuthContext = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState();

  // Singup
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Signout
  const signout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
    });
    return () => unsubscribe();
  }, []);

  const authValue = { signup, login, user,signout };
  return (
    <div>
      <UserContext.Provider value={authValue}>{children}</UserContext.Provider>
    </div>
  );
};

export default AuthContext;
