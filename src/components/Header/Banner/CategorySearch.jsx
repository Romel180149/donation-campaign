import React, { useState } from "react";

const CategorySearch = ({ allPhones, onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = () => {
    // Perform the search based on the user's input
    const filteredPhones = allPhones.filter((phone) =>
      phone.category.toLowerCase().includes(searchInput.toLowerCase())
    );
    // Pass the filtered results to the parent component
    onSearch(filteredPhones);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by category..."
        value={searchInput}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default CategorySearch;
