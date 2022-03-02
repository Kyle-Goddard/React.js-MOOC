import { useEffect, useState } from "react";
import ContactList from "./components/contactList";
import Form from "./components/form";
import Notification from "./components/notification";
import SearchBox from "./components/searchBox";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const [newMessage, setNewMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((persons) => setPersons(persons));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    let existingNames = persons.map((person) => person.name.toUpperCase());
    let existingNums = persons.map((person) => person.number);

    if (newName && newNum) {
      const personObject = { name: newName, number: newNum };

      if (existingNames.includes(newName.toUpperCase())) {
        if (
          window.confirm(
            `${newName} has already been added to this phonebook. Do you want to update their number?`
          )
        ) {
          const person = persons.find((p) => p.name === newName);

          personService
            .updatePerson(person.id, personObject)
            .then(() => {
              personService.getAll().then((persons) => setPersons(persons));
              setNewName("");
              setNewNum("");
            })
            .then(() => {
              setNewMessage(
                `${personObject.name}'s number has been updated in the phonebook`
              );
              setTimeout(() => {
                setNewMessage(null);
              }, 2000);
            });
        }
      } else if (existingNums.includes(newNum)) {
        const person = persons.find((p) => p.number === newNum);

        alert(
          `Number "${newNum}" already exists in the phonebook (see contact: ${person.name})`
        );
      } else {
        personService
          .createPerson(personObject)
          .then((data) => {
            setPersons(persons.concat(data));
            setNewName("");
            setNewNum("");
          })
          .then(() => {
            setNewMessage(`${personObject.name} added to phonebook`);
            setTimeout(() => {
              setNewMessage(null);
            }, 2000);
          });
      }
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={newMessage} />
      <SearchBox newSearch={newSearch} setNewSearch={setNewSearch} />
      <Form
        newName={newName}
        setNewName={setNewName}
        newNum={newNum}
        setNewNum={setNewNum}
        onFormSubmit={addPerson}
      />
      <ContactList
        persons={persons}
        setPersons={setPersons}
        filter={newSearch}
      />
    </div>
  );
};

export default App;
