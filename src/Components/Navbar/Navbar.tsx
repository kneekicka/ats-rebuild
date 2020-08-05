import React from "react";
import "./Navbar.css";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import logo from "../../logo.svg";
import { FaSignOutAlt, FaSearch } from "react-icons/fa";

const NavBar = () => {
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
        <Form inline className="Navbar-search-form">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">
            <FaSearch />
          </Button>
        </Form>
        <div className="Navbar-logout-button">
          <Button variant="outline-info">
            <FaSignOutAlt />
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
