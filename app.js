import tiles from "./data.js";
const container = document.querySelector(".container");

const displayTiles = () => {
    let result = tiles.map((item) => {
        return `<a class="tile" href="${item.id}/index.html" target="_blank">
                <div class="img-div">
                <img src=${item.image} alt="${item.title}"/>
                </div>
                <div class="tile-info">
                <h3>${item.title}</h3>
                </div>
                </a>`;
    }).join("");
    container.innerHTML = result;
}

window.addEventListener("DOMContentLoaded", displayTiles);