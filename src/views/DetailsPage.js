import React from "react";
import { useLocation } from "react-router-dom";
import Details from "../components/Details";
import "../styles/DetailsPage.css";

function DetailsPage() {
  const location = useLocation();
  const item = location.state || {};

  return (
    <div className="details-container">
      <h2 className="details-header">Details</h2>
      {item && <Details item={item} />}
    </div>
  );
}

export default DetailsPage;
