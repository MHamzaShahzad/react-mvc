import React, { useState, useEffect } from "react";
import ListingItem from "./ListingItem";
import "../styles/ListingItem.css";

function Listing({ items, searchQuery, sortBy, sortOrder, filters }) {
  const [sortedFilteredItems, setSortedFilteredItems] = useState([]);

  const applyFilters = (item) => {
    for (const filterType in filters) {
      if (filters[filterType] && item[filterType] !== filters[filterType]) {
        return false;
      }
    }
    return true;
  };

  const sortItems = (itemsToSort) => {
    return itemsToSort.sort((a, b) => {
      let aValue = a[sortBy]?.toLowerCase();
      let bValue = b[sortBy]?.toLowerCase();

      if (sortOrder === "asc") {
        return aValue?.localeCompare(bValue);
      } else {
        return bValue?.localeCompare(aValue);
      }
    });
  };

  useEffect(() => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery?.toLowerCase())
    );

    const filteredAndSortedItems = filteredItems.filter(applyFilters);

    const sortedFilteredItems = sortItems(filteredAndSortedItems);

    setSortedFilteredItems(sortedFilteredItems);
  }, [items, searchQuery, sortBy, sortOrder, filters]);

  const handleDeleteItem = (itemId) => {
    setSortedFilteredItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
  };

  const handleTouchEnd = (itemId) => (event) => {
    touchEndX = event.changedTouches[0].clientX;
    if (touchEndX - touchStartX < -50) {
      handleDeleteItem(itemId);
    }
  };

  return (
    <div>
      {sortedFilteredItems.map((item) => (
        <div
          key={item.id}
          className="listing-item-wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd(item.id)}
        >
          <ListingItem key={item.id} item={item} onDelete={handleDeleteItem} />
        </div>
      ))}
    </div>
  );
}

export default Listing;
