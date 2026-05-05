export async function fetchWeather(city) {
  const response = await fetch(
    `https://wttr.in/${city}?format=j1`
  );

  return response.json();
}