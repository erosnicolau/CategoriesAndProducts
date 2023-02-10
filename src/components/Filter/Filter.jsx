import React from 'react'
import { Link } from 'react-router-dom';

export default function Filter(props) {
  const items = props.data,
    name = props.name;
  return (
    <div>
      <h2>{name}</h2>
      {console.log('')}
      {items.map(item => {
        const name = item.name || item.category_name;
        return(<Link to='##'>{name}</Link>)
      })}
    </div>
  )
}
