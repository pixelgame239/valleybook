import React, { createContext, useState, useEffect } from "react";
import supabase from "../backend/initSupabase";
import { getUserData } from "../backend/userData";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserdata] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async (email) => {
      try {
        const tempData = await getUserData(email);
        setUserInfo(tempData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    // ✅ Check for existing session on mount
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setLoggedIn(true);
        setUserdata(session.user);
        fetchUserInfo(session.user.email);
      }
    };

    checkSession();

    // ✅ Set up listener for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          setLoggedIn(true);
          setUserdata(session.user);
          fetchUserInfo(session.user.email);
        } else if (event === "SIGNED_OUT") {
          setLoggedIn(false);
          setUserdata(null);
          setUserInfo(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, userData, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
