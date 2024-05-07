// Search.js
import React from "react";

function Search({ value, onChange }) {
  return (
    <div className="col-md-4">
      <input
        type="text"
        placeholder="Search by name..."
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
}

export default Search;
