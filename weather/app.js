const city = document.getElementById("city");
const apiKey = "aa5c2bbf87c6f3bf46b64d73ed04277d";
const form = document.querySelector(".weather-form");
const container = document.querySelector(".weather-container");

form.addEventListener("submit", getWeather);

function getWeather(e) {
    e.preventDefault();
    const value = city.value;

    if (value !== "") {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`;

        fetch(url)
            .then(res => res.json())
            .then(data => displayData(data));
    }
}

function displayData(data) {
    if (data.cod === 200) {
        container.innerHTML = `
            <p class="item city-name">${data.name}</p>
            <img
            class="item icon"
            src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
            alt="icon"
            />
            <p class="item weather">Weather: ${data.weather[0].main}</p>
            <p class="item temperature">Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
            <p class="item humidity">Humidity: ${data.main.humidity}%</p>`
    } else {
        container.innerHTML = `<h4 class="error">${data.message}!</h4>`;
    }
    city.value = "";
}