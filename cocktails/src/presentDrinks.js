import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setCocktail from './setDrink.js';

const presentDrinks = async (url) => {
    const data = await fetchDrinks(url);
    const container = await displayDrinks(data);
    if (container) {
        setCocktail(container);
    }
}

export default presentDrinks;