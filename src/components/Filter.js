// Filter.js
import React from "react";

function Filter({ options, value, onChange }) {
  return (
    <div className="col-md-2">
      <select className="form-control" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
