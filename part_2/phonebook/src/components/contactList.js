import React from "react";
import personService from "../services/persons";

const Person = ({ person, setPersons }) => {
  const remove = () => {
    if (window.confirm("Are you sure you wish to delete this constact?")) {
      personService
        .removePerson(person.id)
        .then(() =>
          personService.getAll().then((persons) => setPersons(persons))
        );
    }
  };

  return (
    <div>
      {person.name} : {person.number}
      <button onClick={remove}>Delete</button>
    </div>
  );
};

function ContactList({ persons, setPersons, filter }) {
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
              return (
                <Person
                  key={person.id}
                  person={person}
                  setPersons={setPersons}
                />
              );
            })
        : "none"}
    </>
  );
}

export default ContactList;
