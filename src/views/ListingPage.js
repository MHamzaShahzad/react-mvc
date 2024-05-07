import React, { useState } from "react";
import Listing from "../components/Listing";
import Search from "../components/Search.js";
import Sorting from "../components/Sorting.js";
import Filter from "../components/Filter.js";

function ListingPage({ items }) {
  const [searchQuery, setSearchQuery] = useState("");

  const [filters, setFilters] = useState([]);

  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    if (selectedSortBy === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(selectedSortBy);
      setSortOrder("asc");
    }
  };

  // Options for sorting
  const sortingOptions = [
    { value: "", label: "Select Sorting" },
    { value: "name", label: "Name" },
  ];

  // Options for sorting
  const sortOrderOptions = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];

  // Options for filtering
  const filteringOptions = [
    { value: "", label: "Select State" },
    { value: "Abu Dhabi", label: "Abu Dhabi" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">People List</h2>
      <div className="row mb-3 align-items-center">
        <Search value={searchQuery} onChange={handleSearchChange} />
        <Sorting
          options={sortingOptions}
          value={sortBy}
          onChange={handleSortChange}
        />
        <Sorting
          options={sortOrderOptions}
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        />
        <Filter
          options={filteringOptions}
          value={filters["state"] || ""}
          onChange={(e) => handleFilterChange("state", e.target.value)}
        />
      </div>
      <Listing
        items={items}
        searchQuery={searchQuery}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
    </div>
  );
}

export default ListingPage;
