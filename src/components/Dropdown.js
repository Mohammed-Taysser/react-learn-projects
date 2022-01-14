import React, { useState, useEffect, useRef } from "react";

/** 
 *- TODO : add document event to close dropdown when click on other location
**/

const Dropdown = (props) => {
  const [currentOption, setCurrentOption] = useState(0);
  const [isOpened, setIsOpened] = useState(false);
  const dropdown = useRef(null);

  /**
   *? code for body eventListener
  **/
  // useEffect(() => {
  //   if(dropdown.current !== null){
  //     const body_event = (e) => {
  //       if (dropdown.current.contains(e.target)) {
  //         return;
  //       }
  //       setIsOpened(false);
  //     };
  //     document.body.addEventListener("click", body_event, { capture: true });
  //     return () => {
  //       document.body.removeEventListener("click", body_event);
  //     };
  //   }
  // }, []);

  const OnSelectChange = (index) => {
    setCurrentOption(index);
    setIsOpened(false);
  };

  const renderedItems = () => {
    return (
      <ul className={`dropdown-menu ${isOpened ? "show" : ""}`}>
        {props.items.map((item, index) => {
          return (
            <li key={item.value}>
              <button
                className="dropdown-item"
                type="button"
                onClick={(e) => {
                  OnSelectChange(index);
                  props.OnSelectChange(item.value);
                }}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="position-relative" ref={dropdown}>
      <button
        className="btn btn-light "
        onClick={(e) => setIsOpened(!isOpened)}
      >
        {props.items[currentOption].label}
      </button>
      {isOpened ? renderedItems() : null}
    </div>
  );
};

Dropdown.defaultProps = {
  label: "custom label",
};

export default Dropdown;
