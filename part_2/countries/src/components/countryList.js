import React from "react";
import CountryView from "./countryView";

function CountryList({ countriesToShow, setNewSearch }) {
  if (countriesToShow.length > 10) {
    return <div>Too many matches to show. Be more specific... </div>;
  } else if (countriesToShow.length === 0) {
    return <div>Nothing to show... </div>;
  } else {
    if (countriesToShow.length === 1) {
      return <CountryView country={countriesToShow[0]} />;
    } else {
      return countriesToShow.map((country) => {
        return (
          <div key={country.name.common}>
            <table>
              <tbody>
                <tr>
                  <td>{country.name.common}</td>
                  <td></td>
                  <td
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <button
                      onClick={() => {
                        setNewSearch(country.name.common);
                      }}
                    >
                      Show Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      });
    }
  }
}

export default CountryList;
