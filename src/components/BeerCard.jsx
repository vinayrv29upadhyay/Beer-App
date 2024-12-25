import React from "react";
import "./BeerCard.css";

const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card">
      <img
        src={beer.image || "https://via.placeholder.com/150"}
        alt={beer.name}
        className="beer-image"
      />
      <h2>{beer.name}</h2>
      <p>{beer.style}</p>
      <p>{beer.abv ? `ABV: ${beer.abv}%` : "ABV: N/A"}</p>
    </div>
  );
};

export default BeerCard;
