const links = document.querySelector(".nav-links");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
    links.classList.toggle("show-links");
});