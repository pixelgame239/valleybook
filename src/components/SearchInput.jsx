import React, { useState } from "react";
import "./SearchInput.css";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality to be implemented
    console.log("Searching for:", searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="search-input">
      <form id="search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          id="searchText"
          name="searchKeyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className="search-input-field"
        />
        <button type="submit" role="button" className="search-input-button">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/search.png"
            alt="search icon"
            className="search-icon"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
