// for time
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let today = document.querySelector("#date-time");

today.innerHTML = `${day} ${hours}:${minutes}`;

// for city
function submit(event) {
  event.preventDefault();
  // let city = document.querySelector("#search");
  let heading = document.querySelector("#city");

  heading.innerHTML = `${search.value}`;
}
let form = document.querySelector("form");
form.addEventListener("submit", submit);

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity: ${response.data.main.humidity}%`;
  document.querySelector("#wind").innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )} km/h`;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchForCity() {
  let apiKey = "ade2c941f456758f1ba37300092d4328";
  let city = document.querySelector("#search").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let tempForm = document.querySelector("#search-form");
tempForm.addEventListener("submit", searchForCity);
