import React, { createContext, useState, useContext } from 'react';

// Create a Context
export const ForumContext = createContext();

// Create a Provider component
export const ForumProvider = ({ children }) => {
  const [adminPost, setAdminPost] = useState([]);

  return (
    <ForumContext.Provider value={{ adminPost, setAdminPost }}>
      {children}
    </ForumContext.Provider>
  );
};
