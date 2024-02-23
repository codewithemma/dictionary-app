import React from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Search = ({ handleButtonSubmit, handleInputChange, inputValue }) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter word here..."
          aria-describedby="basic-addon2"
          onChange={handleInputChange}
          value={inputValue}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleButtonSubmit}
          className="primary-text"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </InputGroup>
    </div>
  );
};

export default Search;
