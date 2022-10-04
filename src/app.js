function showDate(timestamp) {
  let date = new Date(timestamp);
  let day = date.getDay();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuesday",
    "Friday",
    "Saturday",
  ];

  //console.log(date);
  return `${days[day]} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dayElement = document.querySelector("#day");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dayElement.innerHTML = showDate(response.data.dt * 1000);
  //console.log(response.data.dt * 1000);
}

let key = "71d408ce6d06bd306538cad60e9bf579";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${key}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
