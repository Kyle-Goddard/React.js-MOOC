import React from "react";
import InputBox from "./inputBox";

function Form(props) {
  const newName = props.newName;
  const newNum = props.newNum;

  return (
    <>
      <h2>Add Contact</h2>
      <form>
        <InputBox
          text="name"
          defaultVal={newName ? newName : "Name..."}
          onChange={(event) => {
            props.setNewName(event.target.value);
          }}
        />

        <InputBox
          text="number"
          defaultVal={newNum ? newNum : "Number..."}
          onChange={(event) => {
            props.setNewNum(event.target.value);
          }}
        />

        <div>
          <button type="submit" onClick={props.onFormSubmit}>
            add
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
