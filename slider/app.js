const root = document.documentElement;
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slide");
const colors = ["#D9B9DA", "#052D2F", "#7C8A49", "#E4CF62"];

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", () => {
    counter++;
    carousel();
});

prevBtn.addEventListener("click", () => {
    counter--;
    carousel();
});

function carousel() {
    if (counter < 0) {
        counter = 0;
    }

    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }

    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }

    root.style.setProperty("--color", colors[counter]);

    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

prevBtn.style.display = "none";