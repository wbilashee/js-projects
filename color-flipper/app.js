const btn = document.getElementById("hero-btn");
const color = document.getElementById("color");

const hex = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9];

btn.addEventListener("click", () => {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        const elem = hex[getRandomNumber()];
        hexColor += elem;
    }

    color.textContent = hexColor;
    document.body.style.background = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}