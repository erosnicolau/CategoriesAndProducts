import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Collapse } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "./filter.css";

export default function Filter(props) {
  const { data, name, isCheckboxList } = props;

  const [isOpen, setIsOpen] = useState(
    useMediaQuery({ query: "(min-width: 992px)" })
  );
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="menu-container box mb-3">
      <Button
        variant="primary"
        onClick={toggleCollapse}
        className="btn btn-link toggle"
      >...</Button>
      <h6 className="fw-bold">{name}</h6>
      <Collapse in={isOpen}>
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
      </Collapse>
    </div>
  );
}
