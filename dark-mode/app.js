const root = document.documentElement;
const mode = document.querySelector(".mode");
const togglerBtn = document.querySelector(".btn-toggler");

togglerBtn.addEventListener("click", () => {
    root.classList.toggle("dark");

    if (root.classList.contains("dark")) {
        mode.textContent = "Dark Mode";
        togglerBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        mode.textContent = "Light Mode";
        togglerBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
});