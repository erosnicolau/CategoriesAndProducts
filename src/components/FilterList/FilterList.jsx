import React from "react";
import Filter from "../Filter/Filter";
import PriceRange from "../PriceRange/PriceRange";

export default function FilterList(props) {
  const {
    availability,
    categories,
    category_specific_filters,
    manufacturers,
    min_price,
    max_price,
    selected_min_price,
    selected_max_price,
  } = props.data;

  return (
    <div>
      {categories &&
        categories.map((filter) => (
          <Filter data={filter.children} name={filter.category_name} />
        ))}
      {manufacturers && (
        <Filter data={manufacturers} name="Brand" isCheckboxList={true} />
      )}
      {availability && (
        <Filter
          data={availability}
          name="Disponibilitate"
          isCheckboxList={true}
        />
      )}
      <PriceRange
        min_price={min_price}
        max_price={max_price}
        selected_min_price={selected_min_price}
        selected_max_price={selected_max_price}
        name="Pret (RON)"
      />
      {category_specific_filters &&
        category_specific_filters.map((filter) => (
          <Filter
            data={filter.filters}
            name={filter.name}
            isCheckboxList={true}
          />
        ))}
    </div>
  );
}
