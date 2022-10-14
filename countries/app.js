const url = "https://restcountries.com/v2/all";
const loader = document.querySelector(".loader");
const container = document.querySelector(".container");

fetch(url)
    .then(res => res.json())
    .then(data => displayData(data));

function displayData(data) {
    loader.classList.add("hide-loader");
    data = data.map(country => {
        return `<div class="country">
        <div class="flag">
          <img src=${country.flags.png} alt="flag"/>
        </div>
        <div class="info">
          <h4>${country.name}</h4>
          <p>Capital: <span>${country.capital}</span></p>
          <p>Region: <span>${country.region}</span></p>
          <p>Area: <span>${country.area} km²</span></p>
          <p>Population: <span>${country.population}</span></p>
          <p>Language: <span>${country.languages[0].name}</span></p>
        </div>
      </div>`;
    }).join("");

    container.innerHTML = data;
}