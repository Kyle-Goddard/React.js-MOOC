import axios from "axios";
import React, { useEffect, useState } from "react";

function WeatherWidget({ weatherData }) {
  console.log(weatherData);

  const tempCelsius = weatherData.main.temp - 273;

  return (
    <div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          height="100"
        />
      </div>
      <div>Temp: {tempCelsius.toFixed(1)} &#x2103;</div>
    </div>
  );
}

function Weather({ city }) {
  const weather_api_key = process.env.REACT_APP_WEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}`
      )
      .then((response) => {
        setWeatherData(response.data);
      });
  }, []);

  return (
    <div>
      <h3>Live Weather : {city}</h3>
      {weatherData ? (
        <WeatherWidget weatherData={weatherData} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Weather;
