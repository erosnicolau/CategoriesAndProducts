import React, { useState } from "react";
import "./sort-menu.css";

export default function SortMenu() {
  const [checked, setChecked] = useState(1);

  const handleToggleChange = (index) => {
    setChecked(index);
  };

  return (
    <div className="sort-menu row box mb-3">
      <div className="col-6">
        Ordoneaza dupa:
        <div class="btn-group sorting">
          <button
            class="btn btn-secondary btn-sm btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Cele mai vandute
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Cele mai vandute
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Pret Crescator
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Pret Descrescator
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Nume A-Z
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Nume Z-A
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-6 text-end">
        Tip afisare:
        <div className="btn-group change-display-style" data-toggle="buttons">
          <label
            className={`btn btn-primary ${
              checked === 1 ? "active btn-success" : "btn-light"
            }`}
            onClick={() => handleToggleChange(1)}
          >
            <input
              type="radio"
              name="options"
              id="option1"
              autoComplete="off"
            />{" "}
            <i class="fa fa-th-large" aria-hidden="true"></i>
          </label>
          <label
            className={`btn btn-primary ${
              checked === 2 ? "active btn-success" : "btn-light"
            }`}
            onClick={() => handleToggleChange(2)}
          >
            <input
              type="radio"
              name="options"
              id="option2"
              autoComplete="off"
            />{" "}
            <i class="fa fa-bars" aria-hidden="true" id=""></i>
          </label>
        </div>
      </div>
    </div>
  );
}
