// src/components/StarRating.jsx
import React from "react";

const StarRating = ({ rating, totalStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

  return (
    <span className="star-rating-display">
      {[...Array(fullStars)].map((_, i) => (
        <i key={`full-${i}`} className="fas fa-star"></i> // fas cho solid star
      ))}
      {halfStar && <i key="half" className="fas fa-star-half-alt"></i>}
      {[...Array(emptyStars)].map((_, i) => (
        <i key={`empty-${i}`} className="far fa-star"></i> // far cho regular (empty) star
      ))}
    </span>
  );
};

export default StarRating;
