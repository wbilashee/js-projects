let filteredProducts = [...products];
const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
    if (filteredProducts.length < 1) {
        productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
        return;
    }

    productsContainer.innerHTML = filteredProducts.map((product) => {
        const { id, image, title, price } = product;
        return `<article class="product" data-id="${id}">
                <img src="${image}" class="product-img" alt="${title}"/>
                <footer>
                <h5 class="product-name">${title}</h5>
                <span class="product-price">$${price}</span>
                </footer>
                </article>`;
    }).join("");
}

displayProducts();

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
    const inputValue = searchInput.value;
    filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(inputValue);
    });
    displayProducts();
});

const companies = document.querySelector(".companies");

const displayButtons = () => {
    const buttons = ["all", ...new Set(products.map((product) => product.company))];

    companies.innerHTML = buttons.map((company) => {
        return `<button class="company-btn" data-id=${company}>${company}</button>`
    }).join("");
}

displayButtons();

companies.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("company-btn")) {
        if (element.dataset.id === "all") {
            filteredProducts = [...products];
        } else {
            filteredProducts = products.filter((product) => {
                return product.company === element.dataset.id;
            });
        }
        searchInput.value = "";
        displayProducts();
    }
});