import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [value, setValue] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");

  function handleValue(evt) {
    setValue(evt.target.value);
  }

  function getWeather() {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=e823c159c27ed93a505a3cb4ec27d88f`)
      .then(function (response) {
        console.log(response);
        setWeather(response.data.weather[0].main);
        setTemp(response.data.main.temp);
        setDescription(response.data.weather[0].description);
      })
      .catch(function (error) {
        console.error("Error fetching weather data:", error);
      });
  }

  return (
    <div className="p-9 bg-black">
      <div className="p-9 bg-green-700 rounded-md">
        <h1 className="bold text-3xl">Weather Report</h1>
        <p>I can give you Weather report about your city !</p>
        <div className="flex flex-col">
          <input
            onChange={handleValue}
            placeholder="Enter your City Name"
            className="rounded-md text-black p-1 w-60 mt-2"
          ></input>
          <button
            onClick={getWeather}
            className="rounded-md text-white bg-black  p-1 w-40 mt-2"
          >
            Get Report
          </button>
        </div>
        <div className="mt-2">
          <h1>
            <b>Weather:</b> {weather}
          </h1>
          <h1>
            <b>Temperature:</b> {temp}
          </h1>
          <h1>
            <b>Description:</b> {description}
          </h1>
        </div>
      </div>
    </div>
  );
}

// Done