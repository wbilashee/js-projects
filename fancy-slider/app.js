const apiKey = "19198286-98539ba906a9a2590add72c51";
const image = document.getElementById("image");
const loader = document.querySelector(".loader");
const slider = document.querySelector(".slider");
const gallery = document.querySelector(".gallery");
const duration = document.getElementById("duration");
const createBtn = document.querySelector(".create-btn");
const searchForm = document.querySelector(".search-form");
const durationForm = document.querySelector(".duration-form");
const durationFormContainer = document.querySelector(".duration-form-container");
let timer;
let slides = [];
let slideIndex = 0;

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    slides = [];
    clearInterval(timer);
    slider.style.display = "none";
    gallery.style.display = "grid";
    searchImages();
});

function searchImages() {
    loader.classList.remove("hide-loader");

    const inputValue = image.value;
    const value = inputValue.split(" ").join("+") || "mountain";
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${value}&image_type=photo&pretty=true`;

    if (value !== "") {
        fetch(url)
            .then(res => res.json())
            .then(data => displayImages(data.hits));
    }
}

function displayImages(data) {
    image.value = "";
    loader.classList.add("hide-loader");
    durationFormContainer.style.display = "flex";

    data = data.map(item => {
        return `<div class="img-div" onclick="selectItem(event, '${item.webformatURL}')">
         <img src=${item.webformatURL} alt=${item.tags[0]} />
        </div>`;
    }).join("");

    gallery.innerHTML = data;
}

function selectItem(event, img) {
    const imgDiv = event.currentTarget;
    imgDiv.classList.toggle("selected");

    if (slides.indexOf(img) === -1) {
        slides.push(img);
    } else {
        slides.splice(img, 1);
    }
}

durationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (duration.value < 0) {
        alert("Negative value is not allowed");
    }
});

createBtn.addEventListener("click", () => {
    if (slides.length < 2) {
        alert('Select at least 2 image');
        return;
    }

    durationFormContainer.style.display = "none";
    gallery.style.display = "none";
    gallery.innerHTML = "";
    slider.style.display = "block";

    slides = slides.map((img) => {
        return `<div class="slide">
        <img src=${img} alt="image">
      </div>`
    });

    slider.innerHTML = slides.join("");
    carousel();
});

function carousel() {
    let time = duration.value || 1000;
    slides = document.querySelectorAll(".slide");

    timer = setInterval(() => {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        if (slides[slideIndex - 1] === undefined) {
            slides[slideIndex].style.display = "block";
        } else {
            slides[slideIndex - 1].style.display = "block";
        }

        slideIndex++;
    }, time);
}

searchImages();