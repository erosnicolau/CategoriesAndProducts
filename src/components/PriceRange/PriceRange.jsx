import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Range } from "react-range";
import "./price-range.css";

export default function PriceRange(props) {
  const { min_price, max_price, selected_min_price, selected_max_price, name } =
    props;

  const [isOpen, setIsOpen] = useState(
    useMediaQuery({ query: "(min-width: 992px)" })
  );

  const toggleCollapse = () => setIsOpen(!isOpen);

  const [values, setValues] = useState([
    selected_min_price,
    selected_max_price,
  ]);

  const onChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <div className="menu-container box mb-3">
      <Button
        variant="primary"
        onClick={toggleCollapse}
        className="btn btn-link toggle"
      >
        ...
      </Button>
      <h6 className="fw-bold">{name}</h6>
      <Collapse in={isOpen}>
        <div className="range-slider mx-2">
          <Range
            step={1}
            min={min_price}
            max={max_price}
            values={values}
            onChange={onChange}
            renderTrack={({ props, children }) => (
              <div {...props} className="range-track">
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div {...props} className="range-thumb" />
            )}
          />
          <div className="range-values">
            <div className="range-value">{values[0]}</div>
            <div className="range-value">{values[1]}</div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
