const url = "https://dummyjson.com/products";
const productsContainer = document.querySelector(".products-container");

const fetchProducts = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.products;
    } catch (error) {
        productsContainer.innerHTML = '<p class="error">There was an error</p>';
    }
}

const displayProducts = (products) => {
    const result = products.map((product) => {
        const { id, title, thumbnail, price } = product;
        return `<a class="product" href="product.html?id=${id}" />
            <img src="${thumbnail}" class="product-img img" alt="${title}" />
            <footer>
            <h5 class="name">${title}</h5>
            <span class="price">$${price}</span>
            </footer>
            </a>`;
    }).join("");
    productsContainer.innerHTML = result;
}

const start = async () => {
    const data = await fetchProducts();
    displayProducts(data);
}

start();