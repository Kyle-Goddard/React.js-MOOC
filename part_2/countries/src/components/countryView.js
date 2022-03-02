import React from "react";
import Weather from "./weather";

function CountryView({ country }) {
  return (
    <>
      <div>
        <h2>{country.name.common}</h2>
      </div>
      <div>
        {country.capital.map((city) => (
          <div key={city}>Capital: {city}</div>
        ))}
      </div>
      <div>Area: {country.area}</div>
      <div></div>
      <div>
        <img
          src={country.flags.png}
          alt={country.name.common + " flag"}
          height="300"
        />
      </div>
      <div>
        <h3>Languages</h3>

        {Object.entries(country.languages).map((lang) => (
          <div key={lang[0]}>{lang[1]}</div>
        ))}
      </div>

      <Weather city={country.capital[0]} />
    </>
  );
}

export default CountryView;
