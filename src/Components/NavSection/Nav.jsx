import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faMoon } from "@fortawesome/free-solid-svg-icons";
const Nav = ({ onClick }) => {
  return (
    <div className="d-flex justify-content-between align-items-center my-2">
      <div>
        <FontAwesomeIcon icon={faBook} className="fa-2x" />
      </div>
      <div>
        <FontAwesomeIcon icon={faMoon} onClick={onClick} />
      </div>
    </div>
  );
};

export default Nav;
