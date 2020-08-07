import React from "react";
import { Tab, Tabs, Container, Row, Col } from "react-bootstrap";
import "./People.css";
import Resume from "../../Components/Resume/Resume";
import Contact from "../../Components/Contact/Contact";
import CandDetails from "../../Components/CandDetails/CandDetails";

const PeopleContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={8}>
          <Tabs
            className="Job-tabs"
            defaultActiveKey="resume"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="resume" title="Resume">
              <Resume />
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <Contact />
            </Tab>
            <Tab eventKey="candDetails" title="Cand. Details">
              <CandDetails />
            </Tab>
          </Tabs>
        </Col>
        <Col sm={4}>
          <p>Contact</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PeopleContainer;
