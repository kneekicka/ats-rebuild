import React, { useState } from "react";
import "./Navbar.css";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  InputGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import logo from "../../logo.svg";
import { FaSignOutAlt } from "react-icons/fa";

const NavBar = (props: any) => {
  const [searchOption, setSearchOption] = useState("Job");
  const [searchTerm, setSearchTerm] = useState(null);

  const handleSubmit = (event: any) => {
    console.log("search option", searchOption);
    console.log("searchTerm", searchTerm);
    event.preventDefault();
    event.stopPropagation();
  };

  const getSearchValue = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const logout = () => {
    console.log("logout");
  };

  const searchBar = props.showSearch ? (
    <Form onSubmit={handleSubmit} inline className="Navbar-search-form">
      <InputGroup>
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-info"
          title={searchOption}
          id="input-group-dropdown-1"
        >
          <Dropdown.Item
            onClick={() => {
              setSearchOption("Job");
            }}
          >
            Job
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            onClick={() => {
              setSearchOption("People");
            }}
          >
            People
          </Dropdown.Item>
        </DropdownButton>
        <FormControl
          onChange={getSearchValue}
          placeholder="Search..."
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </Form>
  ) : (
    ""
  );

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {searchBar}
        <div className="Navbar-logout-button">
          <Button variant="outline-info" onClick={logout}>
            <FaSignOutAlt />
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
