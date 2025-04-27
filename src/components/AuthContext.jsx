import React, { createContext, useState, useEffect } from "react";
import supabase from "../backend/initSupabase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserdata] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          setLoggedIn(true);
          setUserdata(session.user);
        } else if (event === "SIGNED_OUT") {
          setLoggedIn(false);
          setUserdata(null);
        }

      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
