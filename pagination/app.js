import paginate from "./src/paginate.js";
import fetchFollowers from "./src/fetchFollowers.js";
import displayButtons from "./src/displayButtons.js";
import displayFollowers from "./src/displayFollowers.js";
const title = document.querySelector('.section-title h1');
const btnContainer = document.querySelector('.btn-container');

let index = 0;
let pages = [];

const setupUI = () => {
    displayFollowers(pages[index]);
    displayButtons(btnContainer, pages, index);
}

const init = async () => {
    const followers = await fetchFollowers();
    title.textContent = "Pagination";
    pages = paginate(followers);
    setupUI();
}

btnContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-container")) return;
    if (e.target.classList.contains("page-btn")) {
        index = parseInt(e.target.dataset.index);
    }
    if (e.target.classList.contains("next-btn")) {
        index++;
        if (index > pages.length - 1) {
            index = 0;
        }
    }
    if (e.target.classList.contains("prev-btn")) {
        index--;
        if (index < 0) {
            index = pages.length - 1;
        }
    }
    setupUI();
});

window.addEventListener("load", init);