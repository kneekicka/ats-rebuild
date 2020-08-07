import React from "react";
import "./Job.css";
import { Tab, Tabs, Container } from "react-bootstrap";
import People from "../../Components/People/People";
import Detail from "../../Components/Detail/Detail";

const Job = () => {
  return (
    <Container fluid>
      <Tabs
        className="Job-tabs"
        defaultActiveKey="people"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="people" title="People">
          <People />
        </Tab>
        <Tab eventKey="detail" title="Detail">
          <Detail />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Job;
