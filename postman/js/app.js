const jsonRadio = document.getElementById("json");
const customParameterRadio = document.getElementById("custom-parameters");
const jsonBox = document.getElementById("request-json-box");
const parameterBox = document.getElementById("parameters-box");
const params = document.getElementById("params");
const form = document.querySelector(".form");
const responsePrism = document.querySelector("#response-prism");

parameterBox.style.display = "none";
let parameterCount = 0;

jsonRadio.addEventListener("click", () => {
    jsonBox.style.display = "flex";
    parameterBox.style.display = "none";
    params.style.display = "none";
});

customParameterRadio.addEventListener("click", () => {
    jsonBox.style.display = "none";
    parameterBox.style.display = "flex";
    params.style.display = "block";
});

function addParam() {
    let fieldset = document.createElement("fieldset");
    fieldset.innerHTML = `<fieldset class="form-group parameter">
                <div class="form-control">
                <legend>Parameter ${parameterCount + 2}</legend>
                </div>
                <div class="form-control parameter-inputs">
                <input
                    type="text"
                    name="parameter-key-${parameterCount + 2}"
                    id="parameter-key-${parameterCount + 2}"
                    autocomplete="off"
                    placeholder="Enter Parameter ${parameterCount + 2} Key"
                />
                <input
                type="text"
                name="parameter-value-${parameterCount + 2}"
                id="parameter-value-${parameterCount + 2}"
                autocomplete="off"
                placeholder="Enter Parameter ${parameterCount + 2} Value"
                />
            <button type="button" class="btn deleteParam"> - </button>`;

    params.appendChild(fieldset);
    parameterCount++;

    const deleteParams = document.querySelectorAll(".deleteParam");
    for (const item of deleteParams) {
        item.addEventListener("click", (e) => {
            let parameter = e.target.parentElement.parentElement;
            parameter.remove();
        });
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = document.querySelector("#url");
    const urlRegex = /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g;

    if (urlRegex.test(url.value) === false) {
        url.style.borderColor = "#bb2525";
        return;
    } else {
        url.style.borderColor = "#99aeaf";
    }

    responsePrism.innerText = "Please wait... Fetching response...";
    const requestType = document.querySelector("input[name='response-type']:checked").value;
    const contentType = document.querySelector("input[name='content-type']:checked").value;
    const requestJSON = document.getElementById("request-json").value;
    let data = {};

    if (contentType === "custom-parameters") {
        for (let i = 0; i < parameterCount + 1; i++) {
            if (document.getElementById(`parameter-key-${i + 1}`) !== undefined) {
                const key = document.getElementById(`parameter-key-${i + 1}`).value;
                const value = document.getElementById(`parameter-value-${i + 1}`).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    } else {
        data = requestJSON;
    }

    if (requestType === "GET") {
        fetch(url.value, {
            method: "GET",
        })
            .then(res => res.text())
            .then(data => {
                responsePrism.innerHTML = data;
                Prism.highlightAll();
            });
    } else {
        fetch(url.value, {
            method: "POST",
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.text())
            .then(data => {
                responsePrism.innerHTML = data;
                Prism.highlightAll();
            });
    }
});