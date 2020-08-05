import React from "react";
import "./Navbar.css";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import logo from "../../logo.svg";
import { FaSignOutAlt, FaSearch } from "react-icons/fa";

const NavBar = () => {
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    console.log("search text", form.formSearchName.value);
    event.preventDefault();
    event.stopPropagation();
  };

  const logout = () => {
    console.log("logout");
  };

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
        <Form onSubmit={handleSubmit} inline className="Navbar-search-form">
          <Form.Group controlId="formSearchName">
            <FormControl
              required
              type="text"
              placeholder="Search by..."
              className="mr-sm-2"
            />
          </Form.Group>
          <Button type="submit" variant="outline-info">
            <FaSearch />
          </Button>
        </Form>
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
