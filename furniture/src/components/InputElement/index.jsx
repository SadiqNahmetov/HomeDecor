import React, { useState } from "react";
import "./inputElement.scss";

const InputElement = ({
  header,
  filterType,
  setFilters,
  filterItems,
  onFilterClick,
  removeFilterClick,
  options,
}) => {
  const initialCheckBoxesState = {
    all: true,
    ...options.reduce((options, { name }) => {
      options[name] = false;
      return options;
    }, {}),
  };
  const [checkBoxes, setCheckBoxes] = useState(initialCheckBoxesState);
  const uniqueAllId = `all-${filterType}`;

  const handleCheckBoxChange = (checkBoxName) => {
    if (checkBoxName === "all") {
      const updatedCheckBoxes = { ...checkBoxes };
      updatedCheckBoxes.all = !updatedCheckBoxes.all;
      for (const key in updatedCheckBoxes) {
        if (key !== "all") {
          updatedCheckBoxes[key] = false;
        }
      }
      setCheckBoxes(updatedCheckBoxes);
    } else {
      setCheckBoxes((prevCheckBoxes) => ({
        ...prevCheckBoxes,
        all: false,
        [checkBoxName]: !prevCheckBoxes[checkBoxName],
      }));
    }
  };

  return (
    <div className="filter__area">
      <p className="filter__area--title">{header}</p>
      <label
        className="filter__area--label"
        onClick={() => setFilters([])}
        style={{ display: "flex", alignItems: "center" }}
        htmlFor={uniqueAllId}
      >
        <input
          onChange={(event) => {
            handleCheckBoxChange("all");
          }}
          id={uniqueAllId}
          type="checkbox"
        />
        {filterItems.length === 0 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
              stroke="#B8926A"
              strokeWidth="1.5"
            />
            <path
              d="M8.5 12.5L10.5 14.5L15.5 9.5"
              stroke="#B8926A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
              stroke="#B8926A"
              strokeWidth="1.5"
            />
          </svg>
        )}
        All
      </label>

      {options?.map(({ name, id }) => (
        <label
          className="filter__area--label"
          key={name}
          style={{ display: "flex", alignItems: "center" }}
          htmlFor={name}
          onClick={(event) => {
            event.target.checked
              ? onFilterClick(id, filterType)
              : removeFilterClick(id, filterType);
          }}
        >
          <input
            id={name}
            defaultChecked={checkBoxes[name]}
            value={checkBoxes[name]}
            onChange={() => handleCheckBoxChange(name)}
            type="checkbox"
          />
          {checkBoxes[name] || filterItems.includes(id) ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                stroke="#B8926A"
                strokeWidth="1.5"
              />
              <path
                d="M8.5 12.5L10.5 14.5L15.5 9.5"
                stroke="#B8926A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                stroke="#B8926A"
                strokeWidth="1.5"
              />
            </svg>
          )}
          {name}
        </label>
      ))}
    </div>
  );
};

export default InputElement;
