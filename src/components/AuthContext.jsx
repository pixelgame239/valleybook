import React, { createContext, useState, useEffect } from "react";
import supabase from "../backend/initSupabase";
import { getUserData } from "../backend/userData";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserdata] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async (email) => {
      try {
        console.log("Fetching user data for email:", email); // Debug log
        const tempData = await getUserData(email);
        localStorage.setItem("userInfo", JSON.stringify(tempData));
        if(tempData.cart_items==null){
          localStorage.setItem("cart_items", "[]");
        }
        else{
          localStorage.setItem("cart_items", JSON.stringify(tempData.cart_items));
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    // ✅ Check for existing session on mount
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        setLoggedIn(true);
        setUserdata(session.user);
        await fetchUserInfo(session.user.email);
      }
    };

    checkSession();

    // ✅ Set up listener for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          console.log("User signed in:", session.user.email); // Debug log
          setLoggedIn(true);
          setUserdata(session.user);
          fetchUserInfo(session.user.email);
          sessionStorage.removeItem("cart_items");
        } else if (event === "SIGNED_OUT") {
          setLoggedIn(false);
          setUserdata(null);
          localStorage.removeItem("userInfo");
          localStorage.removeItem("cart_items");
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
