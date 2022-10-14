const imgBox = document.querySelector(".img-box");
const whiteBoxes = document.querySelectorAll(".white-box");

imgBox.addEventListener("dragstart", function () {
    this.className += " hold";
    setTimeout(() => {
        this.className = "hide";
    }, 0);
});

imgBox.addEventListener("dragend", function () {
    this.className = "img-box";
});

for (const whiteBox of whiteBoxes) {
    whiteBox.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    whiteBox.addEventListener("dragenter", function (e) {
        e.preventDefault();
        this.className += " dashed";
    });

    whiteBox.addEventListener("dragleave", function () {
        this.className = "white-box";
    });

    whiteBox.addEventListener("drop", function () {
        this.className = "white-box";
        this.append(imgBox);
    });
}