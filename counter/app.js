let count = 0;
const value = document.getElementById("value");
const btnContainer = document.getElementById("btn-container");

btnContainer.addEventListener("click", (e) => {
    const btn = e.target;

    if (btn.classList.contains("decrease")) {
        count--;
    }

    if (btn.classList.contains("reset")) {
        count = 0;
    }

    if (btn.classList.contains("increase")) {
        count++;
    }

    if (count < 0) {
        value.style.color = "#FF0000";
    }

    if (count == 0) {
        value.style.color = "#102a42";
    }

    if (count > 0) {
        value.style.color = "#008000";
    }

    value.textContent = count;
});