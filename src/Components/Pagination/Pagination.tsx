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
      <Pagination>{pageNumbers}</Pagination>
    </div>
  );
};

export default PeoplePagination;
