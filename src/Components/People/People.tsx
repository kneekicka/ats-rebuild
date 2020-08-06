import React, { useState, useEffect } from "react";
import { Table, Row, Col } from "react-bootstrap";
import "./People.css";
import Person from "../Person/Person";
import PeoplePagination from "../Pagination/Pagination";
import PeopleDropDown from "../PeopleDropdown/PeopleDropdown";
import IPerson from "../../Models/Person.model";
import mockedPeople from "../../MockData/people";

const People = () => {
  const [people, setPeople] = useState<IPerson[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage, setPeoplePerPage] = useState(10);

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true);
      const res = await mockedPeople;
      setPeople(res);
      setLoading(false);
    };

    fetchPeople();
  }, []);

  // change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const setPeoplePerPageNumber = (perPageNumber: number) => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
    setPeoplePerPage(perPageNumber);
  };

  // Get current posts
  const indexOfLastPerson = currentPage * peoplePerPage;
  const indexOfFirstPost = indexOfLastPerson - peoplePerPage;
  const currentPeople = people.slice(indexOfFirstPost, indexOfLastPerson);
  const showingPeople = (
    <p className="People-showing">
      Showing {indexOfLastPerson + 1 - peoplePerPage} to{" "}
      {indexOfLastPerson >= people.length ? people.length : indexOfLastPerson}{" "}
      of {people.length} entries
    </p>
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="People">
      <div className="People-title">
        <h3>People</h3>
        <PeopleDropDown
          perPage={peoplePerPage}
          setPeoplePerPage={setPeoplePerPageNumber}
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {currentPeople.map((person) => (
            <Person key={person.id} person={person} />
          ))}
        </tbody>
      </Table>
      <Row>
        <Col>{showingPeople}</Col>
        <Col>
          <PeoplePagination
            totalPeople={people.length}
            peoplePerPage={peoplePerPage}
            active={currentPage}
            paginate={paginate}
          />
        </Col>
      </Row>
    </div>
  );
};

export default People;
