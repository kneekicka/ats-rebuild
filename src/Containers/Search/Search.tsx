import React from "react";
import { Jumbotron, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Search.css";

const Search = () => {
  const handleJobTitleSubmit = (event: any) => {
    const form = event.currentTarget;
    console.log("job title", form.formSearchJobTitle.value);
    event.preventDefault();
    event.stopPropagation();
  };

  const handlePersonSubmit = (event: any) => {
    const form = event.currentTarget;
    console.log("name", form.formSearchName.value);
    console.log("surname", form.formSearchSurname.value);
    console.log("email", form.formSearchEmail.value);
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Jumbotron className="Search-jumbotron">
      <Container>
        <Row>
          <Col>
            <h3>Person search</h3>
            <Form onSubmit={handlePersonSubmit}>
              <Form.Group controlId="formSearchName">
                <Form.Control required type="text" placeholder="Name..." />
              </Form.Group>
              <Form.Group controlId="formSearchSurname">
                <Form.Control required type="text" placeholder="Surname..." />
              </Form.Group>
              <Form.Group controlId="formSearchEmail">
                <Form.Control required type="email" placeholder="Email..." />
              </Form.Group>
              <Button variant="info" type="submit">
                Search
              </Button>
            </Form>
          </Col>
          <Col>
            <h3>Job title search</h3>
            <Form onSubmit={handleJobTitleSubmit}>
              <Form.Group controlId="formSearchJobTitle">
                <Form.Control required type="text" placeholder="Job Title..." />
              </Form.Group>
              <Button variant="info" type="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Search;
