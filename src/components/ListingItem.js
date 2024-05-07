import React from "react";
import { Link } from "react-router-dom";
import "../styles/ListingItem.css";

function ListingItem({ item, onDelete }) {
  const { id, name, country, webPages } = item;

  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div className="list-item">
      <Link to={`/details/${id}`} state={item}>
        <h2 className="list-item__name">{name}</h2>
      </Link>
      <p className="list-item__info">
        <span className="list-item__label">Country:</span> {country}
      </p>
      <p className="list-item__info">
        <span className="list-item__label">Website:</span>
        {webPages?.map((page, index) => (
          <a
            key={index}
            href={page}
            className="list-item__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {page}
          </a>
        ))}
        <div className="delete-icon" onClick={handleDelete}>
          🗑️
        </div>
      </p>
    </div>
  );
}

export default ListingItem;
