// src/components/SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a movie..."
      value={searchValue}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
