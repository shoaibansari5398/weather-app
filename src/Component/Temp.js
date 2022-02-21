import React, { useEffect } from "react";
import "./css/style.css";

function Temp() {
  const [city, setCity] = React.useState("Pune");
  const [search, setSearch] = React.useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5cf7db0b54fbd42cb944e54f3b2a9eb0`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="container">
        <div className="card">
          <input
            type="search"
            placeholder="Enter City Name"
            className="search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {!city ? (
            <p>No Data Found</p>
          ) : (
            <div className="info">
              <h6 className="city-name">{search}</h6>
              <p className="temp">Temp : {city.temp}℃</p>
              <div className="temp-diff">
                <p>Min:{city.temp_min}℃</p>
                <p>Max:{city.temp_max}℃</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Temp;
