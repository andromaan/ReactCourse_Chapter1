import React from "react";

function SearchBar({ searchValue, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={onSearchChange}
        name="search"
        id="search"
        placeholder="Search tasks"
      />
    </div>
  );
}

export default SearchBar;
