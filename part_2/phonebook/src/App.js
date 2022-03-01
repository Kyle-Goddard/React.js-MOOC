import { useEffect, useState } from "react";
import ContactList from "./components/contactList";
import Form from "./components/form";
import SearchBox from "./components/searchBox";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    let existingNames = persons.map((person) => person.name);
    let existingNums = persons.map((person) => person.number);

    console.log(existingNames);

    if (newName && newNum) {
      if (existingNames.includes(newName) || existingNums.includes(newNum)) {
        alert(
          `Name "${newName}" or Number "${newNum}" already exists in the phonebook`
        );
      } else {
        setPersons(persons.concat({ name: newName, number: newNum }));
        setNewName("");
        setNewNum("");
      }
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox newSearch={newSearch} setNewSearch={setNewSearch} />
      <Form
        newName={newName}
        setNewName={setNewName}
        newNum={newNum}
        setNewNum={setNewNum}
        onFormSubmit={addPerson}
      />
      <ContactList persons={persons} filter={newSearch} />
    </div>
  );
};

export default App;
