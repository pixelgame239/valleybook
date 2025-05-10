import React, { createContext, useState, useEffect } from "react";
import supabase from "../backend/initSupabase";
import { getUserData } from "../backend/userData";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserdata] = useState(null);

useEffect(() => {
  // Fetches the user data from your backend and stores it in local storage.
  const fetchUserInfo = async (email) => {
    try {
      console.log("Fetching user data for email:", email);
      const tempData = await getUserData(email);
      localStorage.setItem("userInfo", JSON.stringify(tempData));
      if (tempData.cart_items == null) {
        localStorage.setItem("cart_items", "[]");
      } else {
        localStorage.setItem("cart_items", JSON.stringify(tempData.cart_items));
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  let accountChannel;

  // Subscribes to realtime updates on the user's account.
  const subscribeToAccountUpdates = (email) => {
    // If a channel already exists, remove it first.
    if (accountChannel) {
      supabase.removeChannel(accountChannel);
    }
    accountChannel = supabase
      .channel(`account-updates-${email}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "accounts",
          filter: `email=eq.${email}`,
        },
        (payload) => {
          console.log("Realtime account update:", payload);
          fetchUserInfo(email);
        }
      )
      .subscribe();
  };

  // Check for an existing session and subscribe on a valid session.
  const checkSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session?.user) {
      setLoggedIn(true);
      setUserdata(session.user);
      await fetchUserInfo(session.user.email);
      subscribeToAccountUpdates(session.user.email);
    }
  };

  // Perform the initial session check when the component mounts.
  checkSession();

  // Set up a listener for auth state changes.
  const { data: authListener } = supabase.auth.onAuthStateChange(
    (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        console.log("User signed in:", session.user.email);
        setLoggedIn(true);
        setUserdata(session.user);
        fetchUserInfo(session.user.email);
        sessionStorage.removeItem("cart_items");
        subscribeToAccountUpdates(session.user.email);
      } else if (event === "SIGNED_OUT") {
        setLoggedIn(false);
        setUserdata(null);
        localStorage.removeItem("userInfo");
        localStorage.removeItem("cart_items");
        if (accountChannel) {
          supabase.removeChannel(accountChannel);
          accountChannel = null;
        }
      }
    }
  );

  // Clean up the auth listener and the realtime channel on unmount.
  return () => {
    if (authListener && authListener.subscription) {
      authListener.subscription.unsubscribe();
    }
    if (accountChannel) {
      supabase.removeChannel(accountChannel);
    }
  };
}, []);


  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
