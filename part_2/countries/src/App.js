import { useEffect, useState } from "react";
import axios from "axios";
import SearchBox from "./components/searchBox";
import React from "react";
import CountryList from "./components/countryList";

function App() {
  const [countryList, setCountryList] = useState([]);

  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountryList(response.data);
    });
  }, []);

  let countriesToShow = countryList.filter((country) => {
    if (country.name.common.toLowerCase().includes(newSearch.toLowerCase())) {
      return country;
    }
  });

  return (
    <>
      <SearchBox newSearch={newSearch} setNewSearch={setNewSearch} />

      <CountryList
        countriesToShow={countriesToShow}
        setNewSearch={setNewSearch}
      />
    </>
  );
}

export default App;
