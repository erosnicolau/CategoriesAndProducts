import React from "react";
import { NavLink } from "react-router-dom";
import "./filter.css";

export default function Filter(props) {
  const { data, name, isCheckboxList } = props;
  return (
    <div className="menu-container box mb-3">
      <h6 className="fw-bold">{name}</h6>
      <ul>
        {data.map((item) => {
          const name = item.name || item.category_name;
          if (isCheckboxList) {
            return (
              <li>
                <label>
                  <input type={"checkbox"} /> {name}
                </label>
              </li>
            );
          } else {
            return (
              <li>
                <NavLink to={item.slug} activeClassName="active">
                  {name}
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
