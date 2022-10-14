const meal = document.getElementById("meal");
const loader = document.querySelector(".loader");
const form = document.querySelector(".recipe-form");
const container = document.querySelector(".container");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    loader.classList.add("show-loader");
    const value = meal.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
});

function displayMeals(data) {
    let result;
    meal.value = "";
    container.innerHTML = "";
    loader.classList.remove("show-loader");

    if (data !== null) {
        container.style.display = "grid";
        result = data.map(item => {
            return `<div class="card" onclick="searchSingleMeal(${item.idMeal})">
            <div class="card-img">
            <img src=${item.strMealThumb} alt=${item.strMeal} />
            </div>
            <div class="card-info">
            <h4>${item.strMeal}</h4>
            </div>
            </div>`
        }).join("");
    } else {
        container.style.display = "block";
        result = `<h2 class="error">No meal found!</h2>`
    }

    container.innerHTML = result;
}

function searchSingleMeal(id) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals));
}

function displayMealDetails(data) {
    document.body.classList.add("no-scroll");
    overlay.classList.add("show-modal");

    modal.innerHTML = `<div class="modal-header">
            <h3>${data[0].strMeal}</h3>
            <button class="close-btn" onclick="closeModal()">
              <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="modal-content">
        <div class="modal-img">
            <img src=${data[0].strMealThumb} alt=${data[0].strMeal}>
        </div>
            <div class="modal-info">
                <h4>Instructions</h4>
                <p>${data[0].strInstructions}</p>
            </div>
        </div>`;
}

function closeModal() {
    document.body.classList.remove("no-scroll");
    overlay.classList.remove("show-modal");
    modal.innerHTML = "";
};