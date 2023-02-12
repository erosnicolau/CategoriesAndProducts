import React from "react";
import Product from "../Product/Product";
import "./product-list.css";

export default function ProductList(props) {
  const { data } = props;
  return (
    <div className="product-list">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
        {data.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}
