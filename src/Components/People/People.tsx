import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./People.css";
import Person from "../Person/Person";
import PeoplePagination from "../Pagination/Pagination";
import IPerson from "../../Models/Person.model";
import mockedPeople from "../../MockData/people";

const People = () => {
  const [people, setPeople] = useState<IPerson[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage, setPeoplePerPage] = useState(10);

  // change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true);
      const res = await mockedPeople;
      setPeople(res);
      setLoading(false);
    };

    fetchPeople();
  }, []);

  // Get current posts
  const indexOfLastPerson = currentPage * peoplePerPage;
  const indexOfFirstPost = indexOfLastPerson - peoplePerPage;
  const currentPeople = people.slice(indexOfFirstPost, indexOfLastPerson);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="People">
      <h3 className="People-title">People</h3>
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
      <PeoplePagination
        totalPeople={people.length}
        peoplePerPage={peoplePerPage}
        active={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default People;
