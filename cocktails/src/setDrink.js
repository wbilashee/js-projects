const setCocktail = (container) => {
    container.addEventListener("click", (e) => {
        const id = e.target.parentElement.dataset.id;
        localStorage.setItem("drink", id);
    });
}

export default setCocktail;