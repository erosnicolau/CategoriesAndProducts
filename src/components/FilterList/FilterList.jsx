import React from 'react'
import Filter from '../Filter/Filter';

export default function FilterList(props) {
  const {availability, categories, category_specific_filters, manufacturers} = props.data;
  return (
    <div>
      FilterList
      {availability && <Filter data={availability} name='Availability'/> }
      {categories && <Filter data={categories} name='Categories'/> }
      {category_specific_filters && <Filter data={category_specific_filters} name='Category Specific Filters'/> }
      {manufacturers && <Filter data={manufacturers} name='Manufacturers'/> }
    </div>
  )
}
