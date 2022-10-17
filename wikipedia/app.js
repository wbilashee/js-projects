const url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";
const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
const results = document.querySelector(".results");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;
    if (!value) {
        results.innerHTML = `<div class="error">please enter valid search term</div>`;
        return;
    }
    fetchPages(value);
});

async function fetchPages(value) {
    results.innerHTML = `<h2>Loading...</h2>`;

    try {
        const response = await fetch(`${url}${value}`);
        const data = await response.json();
        const results = data.query.search;
        if (results.length < 1) {
            results.innerHTML = `<div class="error">no matching results. Please try again.</div>
          `;
            return;
        }
        renderResults(results);
    } catch (error) {
        console.log(error);
        results.innerHTML = `<div class="error">there was an error...</div>`;
        return;
    }
};

const renderResults = (list) => {
    const cardsList = list
        .map((item) => {
            const { title, snippet, pageid } = item;
            return `<a href="http://en.wikipedia.org/?curid=${pageid}" target="_blank">
              <h4>${title}</h4>
              <p>${snippet}</p>
            </a>`;
        }).join("");

    results.innerHTML = `<div class="articles">
            ${cardsList}
          </div>
        </div>`;
};