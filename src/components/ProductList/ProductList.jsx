import React from 'react'
import Product from '../Product/Product'

export default function ProductList(props) {
  const {data} = props;
  return (
    <div>
      <h1>ProductList</h1>
      <Product/>
    </div>
  )
}
