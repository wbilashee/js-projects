import getElement from "./getElement.js";
import presentDrinks from "./presentDrinks.js";
const form = getElement(".search-form");
const cocktail = getElement("#cocktail");
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

form.addEventListener("keyup", (e) => {
    e.preventDefault();
    const value = cocktail.value;
    if (!value) return;
    presentDrinks(`${url}${value}`);
});