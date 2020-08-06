import React, { useState, useEffect } from "react";
import { Table, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import "./People.css";
import Person from "../Person/Person";
import PeoplePagination from "../Pagination/Pagination";
import PeopleDropDown from "../PeopleDropdown/PeopleDropdown";
import IPerson from "../../Models/Person.model";
import mockedPeople from "../../MockData/people";

const People = () => {
  const [people, setPeople] = useState<IPerson[]>([]);
  const [displayPeople, setDisplayPeople] = useState<IPerson[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage, setPeoplePerPage] = useState(10);

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true);
      const res = await mockedPeople;
      setPeople(res);
      setDisplayPeople(res);
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

  const filterPeople = (event: any) => {
    const searchTerm = escape(event.target.value.toLowerCase());
    const currentPeople = [...people];

    const filteredPeople = currentPeople.filter((person) => {
      return (
        escape(person.name.toLowerCase()).includes(searchTerm) ||
        escape(person.lastName.toLowerCase()).includes(searchTerm) ||
        escape(person.email.toLowerCase()).includes(searchTerm) ||
        person.phoneNumber.includes(searchTerm)
      );
    });

    setDisplayPeople(filteredPeople);
  };

  // Get current posts
  const indexOfLastPerson = currentPage * peoplePerPage;
  const indexOfFirstPost = indexOfLastPerson - peoplePerPage;
  const currentPeople = displayPeople.slice(
    indexOfFirstPost,
    indexOfLastPerson
  );
  const showingPeople = (
    <p className="People-showing">
      Showing {indexOfLastPerson + 1 - peoplePerPage} to{" "}
      {indexOfLastPerson >= displayPeople.length
        ? displayPeople.length
        : indexOfLastPerson}{" "}
      of {displayPeople.length} entries
    </p>
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="People">
      <h3>People</h3>
      <Row>
        <Col sm={9}>
          <div className="People-title">
            <PeopleDropDown
              perPage={peoplePerPage}
              setPeoplePerPage={setPeoplePerPageNumber}
            />
          </div>
        </Col>
        <Col sm={3}>
          <InputGroup size="sm">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">
                Search
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              onChange={filterPeople}
              aria-label="Search"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </Col>
      </Row>
      <Table className="People-table" size="sm" striped bordered hover>
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
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Active</th>
          </tr>
        </thead>
      </Table>
      <Row>
        <Col>{showingPeople}</Col>
        <Col>
          <PeoplePagination
            totalPeople={displayPeople.length}
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
