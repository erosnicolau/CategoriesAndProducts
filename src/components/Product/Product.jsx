import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import "./product.css";

export default function Product(props) {
  const { data } = props,
    { image, name, availability, price, rating, reviews } = data,
    discount = Math.floor(Math.random() * 21) + 5,
    priceValue = Number(price.split(" ")[0].split(",").join(".")),
    currency = price.split(" ")[1],
    discountedPrice = priceValue - (priceValue * discount) / 100;

  const slug = "the provided JSON does not provide this";

  function formatPrice(p) {
    let arr = p.toString().split(/[.,]/),
      ron = arr[0],
      ban = arr[1];
    return (
      <>
        {ron}
        <sup>{ban}</sup>
      </>
    );
  }

  return (
    <div className="product-box col">
      <div className="product-item box">
        <div className="discount">{discount}%</div>
        <div className="favorite" data-toggle="tooltip" data-placement="left" title="Adauga la Favorite">
          <i class="fa-regular fa-heart"></i>
        </div>
        <Link to={slug}>
          <div className="image-container">
            <img src={image} alt="name" className="img-fluid product-image" />
          </div>
        </Link>
        <Link to={slug + "#reviews"}>
          <div className="stats">
            <StarRating rating={rating} />
            <small>{reviews} review-uri</small>
          </div>
        </Link>
        <Link to={slug}>
          <h2 className="mt-2">{name}</h2>
        </Link>
        <div className="card-bottom pb-2">
          <small className="product-availability">{availability}</small>
          <div className="price">
            <div className="old-price">
              {formatPrice(discountedPrice.toFixed(2))} {currency}
            </div>
            <div className="current-price">
              {formatPrice(priceValue)} {currency}
            </div>
          </div>
          <div
            class="btn-group btn-group-add-cart itg-add-to-cart"
            role="group"
          >
            <button class="btn my-2 w-100 cart-btn">Adauga in cos</button>
            <button class="btn btn-secondary my-2 cart-icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
