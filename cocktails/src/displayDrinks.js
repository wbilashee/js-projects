import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({ drinks }) => {
    const title = getElement(".title");
    const container = getElement(".cocktails-container");

    if (!drinks) {
        hideLoading();
        title.textContent = "Sorry, no drinks matched your search";
        container.innerHTML = null;
        return;
    }

    const newDrinks = drinks.map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

        return `<a href="./drink.html">
                <article class="cocktail" data-id="${id}" >
                <img src="${image}" alt="${name}" />
                <h3>${name}</h3>
                </article>
                </a>`;
    }).join("");

    hideLoading();
    title.textContent = "";
    container.innerHTML = newDrinks;
    return container;
}

export default displayDrinks;