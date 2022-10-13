const topBtn = document.querySelector(".top-link");

window.onscroll = function () {
    if (document.documentElement.scrollTop < 350) {
        topBtn.classList.remove("show-link");
    } else {
        topBtn.classList.add("show-link");
    }
};