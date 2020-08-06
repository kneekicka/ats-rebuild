import React from "react";
import { ListGroup, Form, Button } from "react-bootstrap";
import "./Detail.css";

const Detail = () => {
  return (
    <div className="Detail">
      <h3>GENERAL INFORMATION</h3>
      <ListGroup>
        <ListGroup.Item>job code</ListGroup.Item>
        <ListGroup.Item>job folder</ListGroup.Item>
        <ListGroup.Item>job position title</ListGroup.Item>
        <ListGroup.Item># of operations</ListGroup.Item>
        <ListGroup.Item>Shift</ListGroup.Item>
        <ListGroup.Item>Is this position budgeted</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Detail;
