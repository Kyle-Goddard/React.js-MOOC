import React from "react";

const Person = ({ person }) => {
  return (
    <div>
      {person.name} : {person.number}
    </div>
  );
};

function ContactList(props) {
  const persons = props.persons;
  const filter = props.filter;
  return (
    <>
      <h2>Numbers</h2>

      {persons && persons
        ? persons
            .filter((person) => {
              if (person.name.toUpperCase().includes(filter.toUpperCase())) {
                return person;
              }
            })
            .map((person) => {
              return <Person key={person.name} person={person} />;
            })
        : "none"}
    </>
  );
}

export default ContactList;
