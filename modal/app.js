const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", () => {
    overlay.classList.add("show-modal");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show-modal");
});