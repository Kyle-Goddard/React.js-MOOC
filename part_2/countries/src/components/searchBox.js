import React from "react";
import InputBox from "./inputBox";

function SearchBox(props) {
  const newSearch = props.newSearch;
  const setNewSearch = props.setNewSearch;

  return (
    <>
      <InputBox
        text="find countries"
        defaultVal={newSearch ? newSearch : "search..."}
        onChange={(event) => {
          setNewSearch(event.target.value);
        }}
      />
    </>
  );
}

export default SearchBox;
