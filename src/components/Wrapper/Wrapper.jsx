import React from 'react';
import CategoryList from '../CategoryList/CategoryList'
import ProductList from '../ProductList/ProductList'


export default function Wrapper() {
  return (
    <div className='wrapper'>
      <div className="sidebar">
        <CategoryList/>
      </div>
      <div className="main">
        <ProductList/>
      </div>
    </div>
  );
}
