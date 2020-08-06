import React from "react";
import "./Job.css";
import { Tab, Tabs } from "react-bootstrap";
import People from "../../Components/People/People";
import Detail from "../../Components/Detail/Detail";

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
        <Detail />
      </Tab>
    </Tabs>
  );
};

export default Job;
