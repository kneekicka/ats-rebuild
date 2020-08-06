import React from "react";
import { Pagination } from "react-bootstrap";
import "./Pagination.css";

const PeoplePagination = (props: any) => {
  const pageNumbers = [];

  for (
    let number = 1;
    number <= Math.ceil(props.totalPeople / props.peoplePerPage);
    number++
  ) {
    pageNumbers.push(
      <Pagination.Item
        onClick={() => {
          props.paginate(number);
        }}
        key={number}
        active={number === props.active}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="People-pagination">
      <Pagination>
        <Pagination.Prev
          disabled={props.active - 1 === 0}
          onClick={() => {
            props.paginate(props.active - 1);
          }}
        />
        {pageNumbers}
        <Pagination.Next
          disabled={
            props.active + 1 >
            Math.ceil(props.totalPeople / props.peoplePerPage)
          }
          onClick={() => {
            props.paginate(props.active + 1);
          }}
        />
      </Pagination>
    </div>
  );
};

export default PeoplePagination;
