import React, { createContext, useState, useContext } from 'react';

// Create a Context
export const ForumContext = createContext();

// Create a Provider component
export const ForumProvider = ({ children }) => {
  const [adminPost, setAdminPost] = useState([]);
  const [explorePost, setExplorePost] = useState([]);
  const [homePost, setHomePost] = useState([]);
  const [searchPost, setSearchPost] =useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ForumContext.Provider value={{ adminPost, setAdminPost, explorePost, setExplorePost, homePost, setHomePost, searchPost, setSearchPost,
      currentPage, setCurrentPage
     }}>
      {children}
    </ForumContext.Provider>
  );
};
