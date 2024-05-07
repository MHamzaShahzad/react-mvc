import React from "react";
import "../styles/Details.css";

function Details({ item }) {
  return (
    <div className="details-container">
      <h2 className="details-heading">{item.name}</h2>
      <div className="details-info">
        <p>
          <strong>State/Province:</strong> {item.stateProvince}
        </p>
        <p>
          <strong>Country:</strong> {item.country}
        </p>
        <p>
          <strong>Alpha Two Code:</strong> {item.alphaTwoCode}
        </p>
      </div>
      <div className="details-links">
        <p>
          <strong>Web Pages:</strong>
        </p>
        <ul>
          {item.webPages.map((page, index) => (
            <li key={index}>
              <a href={page} target="_blank" rel="noopener noreferrer">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;
