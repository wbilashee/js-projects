const url = "https://icanhazdadjoke.com/";
const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");

btn.addEventListener("click", () => {
    fetchJoke();
});

function fetchJoke() {
    fetch(url, {
        headers: {
            Accept: "application/json",
            "User-Agent": "jokes app",
        }
    })
        .then(res => res.json())
        .then(data => {
            return joke.textContent = data.joke;
        });
}

fetchJoke();