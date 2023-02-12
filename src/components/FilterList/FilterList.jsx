import React from 'react'
import Filter from '../Filter/Filter';

export default function FilterList(props) {
  const {availability, categories, category_specific_filters, manufacturers} = props.data;
  console.log(categories)
  return (
    <div>
      {categories && 
        categories.map(filter => 
          <Filter 
            data={filter.children}
            name={filter.category_name}
          />
          )
      }
      {manufacturers && <Filter
        data={manufacturers}
        name='Brand'
        isCheckboxList={true}
      />}
      {availability && <Filter
        data={availability} 
        name='Disponibilitate'
        isCheckboxList={true}
      />}
      {category_specific_filters && 
        category_specific_filters.map(filter => 
          <Filter 
            data={filter.filters}
            name={filter.name}
            isCheckboxList={true}
          />
          )
      }
    </div>
  )
}
