import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";
const singleDrink = getElement(".single-drink");

const displayDrink = (data) => {
    hideLoading();
    const drink = data.drinks[0];
    const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ];

    document.title = name;
    const result = `<img src="${image}" class="drink-img" alt="${name}" />
                    <article class="drink-info">
                    <h2 class="drink-name">${name}</h2>
                    <p class="drink-desc">${desc}</p>
                    <ul class="drink-ingredients">
                    ${list.map((item) => {
        if (!item) return;
        return `<li><i class="far fa-check-square"></i>${item}</li>`;
    }).join("")}
                    </ul>
                    <a href="./index.html" class="btn">all cocktails</a>
                    </article>`;
    singleDrink.innerHTML = result;
}

export default displayDrink;