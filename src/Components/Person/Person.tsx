import React from "react";

const Person = (props: any) => {
  return (
    <tr>
      <td>{props.person.name}</td>
      <td>{props.person.lastName}</td>
      <td>{props.person.email}</td>
      <td>{props.person.phoneNumber}</td>
      <td>{props.person.status.toString()}</td>
    </tr>
  );
};

export default Person;
