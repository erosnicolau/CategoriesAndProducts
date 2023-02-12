import React from "react";
import "./star-rating.css";

export default function StarRating(props) {
  const { rating } = props;

  function fiveStars() {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} class="fa fa-star"></i>
    ));
  }
  return (
    <div className="rating">
      <div className="stars gold" style={{ width: `${rating * 20}%` }}>
        {fiveStars()}
      </div>
      <div className="stars gray">{fiveStars()}</div>
    </div>
  );
}
