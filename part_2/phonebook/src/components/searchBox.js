import React from "react";
import InputBox from "./inputBox";

function SearchBox(props) {
  const newSearch = props.newSearch;

  return (
    <>
      <h2>Search</h2>
      <InputBox
        text="filter by name"
        defaultVal={newSearch ? newSearch : "search..."}
        onChange={(event) => {
          props.setNewSearch(event.target.value);
        }}
      />
    </>
  );
}

export default SearchBox;
