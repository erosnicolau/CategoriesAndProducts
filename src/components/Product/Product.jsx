import React from "react";
import StarRating from "../StarRating/StarRating";
import "./product.css";

export default function Product(props) {
  const { data } = props,
    { image, name, availability, price, rating, reviews } = data,
    discount = Math.floor(Math.random() * 21) + 5,
    priceValue = Number(price.split(" ")[0].split(',').join('.')),
    currency = price.split(" ")[1],
    discountedPrice = priceValue - (priceValue * discount) / 100;
  
    function formatPrice(p) {
      let arr = p.toString().split(/[.,]/),
        ron = arr[0],
        ban = arr[1];
      return (
        <>
          {ron}<sup>{ban}</sup>
        </>
      );
    }

  return (
    <div className="col">
      <div className="product-item box">
        <div className="image-container">
          <img src={image} alt="name" className="img-fluid product-image" />
        </div>
        <div className="stats">
          <StarRating rating={rating} />
          <small>{reviews} review-uri</small>
        </div>
        <h2>{name}</h2>
        <small className="product-availability">{availability}</small>
        <div className="price">
          <div className="old-price">{formatPrice(discountedPrice.toFixed(2))} {currency}</div>
          <div className="current-price">{formatPrice(priceValue)} {currency}</div>
        </div>
        <div className="discount">{discount}%</div>
      </div>
    </div>
  );
}
