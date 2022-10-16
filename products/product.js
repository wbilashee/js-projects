const url = `https://dummyjson.com/products`;
const singleProduct = document.querySelector(".single-product");

const fetchProducts = async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        singleProduct.innerHTML = '<p class="error">There was an error</p>';
    }
}

const displayProducts = (product) => {
    const { thumbnail, title, brand, price, description } = product;
    document.title = title;
    const result = `<div class="product-wrapper">
              <img src="${thumbnail}" class="img" alt="${title}" />
              <div class="product-info">
               <h3>${title}</h3>
               <h4>${brand}</h4>
               <h6>$${price}</h6>
               <p>${description}</p>
               <button class="btn cart-btn">add to cart</button>
              </div>
           </div>`;
    singleProduct.innerHTML = result;
}

const start = async () => {
    const data = await fetchProducts();
    displayProducts(data);
}

start();