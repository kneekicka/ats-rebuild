import React from "react";
import "./Job.css";
import { Tab, Tabs } from "react-bootstrap";
import People from "../../Components/People/People";

const Job = () => {
  return (
    <Tabs
      className="Job-tabs"
      defaultActiveKey="detail"
      id="uncontrolled-tab-example"
    >
      <Tab eventKey="people" title="People">
        <People></People>
      </Tab>
      <Tab eventKey="detail" title="Detail">
        <p>Detail</p>
      </Tab>
    </Tabs>
  );
};

export default Job;
