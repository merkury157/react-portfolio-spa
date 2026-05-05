import { useEffect, useState } from "react";
import { fetchWeather } from "../api/weatherApi";

function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const loadWeather = async () => {
      const data = await fetchWeather("Kyiv");
      setWeather(data);
    };

    loadWeather();
  }, []);

  return (
    <div className="page">
      <h1>Моє місто</h1>

      <p>Я живу в Україні. Це чудова країна з гарною природою.</p>

      {weather && (
        <div>
          <h2>Погода</h2>
          <p>Температура: {weather.current_condition[0].temp_C}°C</p>
          <p>
            Опис: {weather.current_condition[0].weatherDesc[0].value}
          </p>
        </div>
      )}
    </div>
  );
}

export default MyCity;