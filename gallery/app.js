function getElement(selection) {
    const element = document.querySelector(selection);

    if (element) {
        return element;
    }

    throw new Error(`Please check ${selection} selector, no such element exists`);
}

class Gallery {
    constructor(element) {
        this.container = element;
        this.list = [...element.querySelectorAll(".img")];
        this.modal = getElement(".modal");
        this.mainImg = getElement(".main-img");
        this.imageName = getElement(".image-name");
        this.modalImages = getElement(".modal-images");
        this.closeBtn = getElement(".close-btn");
        this.prevBtn = getElement(".prev-btn");
        this.nextBtn = getElement(".next-btn");

        this.prevImage = this.prevImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.chooseImage = this.chooseImage.bind(this);

        this.container.addEventListener("click", function (e) {
            if (e.target.classList.contains("img")) {
                this.openModal(e.target, this.list);
            }
        }.bind(this));
    }
    openModal(selectedImage, list) {
        this.setMainImage(selectedImage);
        this.modalImages.innerHTML = list.map(function (image) {
            return `<img src="${image.src}" title="${image.title}" class=${image.classList.contains("selected") ? "modal-img selected" : "selected"} data-id="${image.dataset.id}" alt="image"/>`
        });
        this.modal.classList.add("open");
        this.closeBtn.addEventListener("click", this.closeModal);
        this.prevBtn.addEventListener("click", this.prevImage);
        this.nextBtn.addEventListener("click", this.nextImage);
        this.modalImages.addEventListener("click", this.chooseImage);
    }
    setMainImage(selectedImage) {
        this.mainImg.src = selectedImage.src;
        this.imageName.textContent = selectedImage.title;
    }
    closeModal() {
        this.modal.classList.remove("open");
        this.closeBtn.removeEventListener("click", this.closeModal);
        this.prevBtn.removeEventListener("click", this.prevImage);
        this.nextBtn.removeEventListener("click", this.nextImage);
        this.modalImages.removeEventListener("click", this.chooseImage);
    }
    prevImage() {
        const selected = this.modalImages.querySelector(".selected");
        const prev = selected.previousElementSibling || this.modalImages.lastElementChild;
        selected.classList.remove("selected");
        prev.classList.add("selected");
        this.setMainImage(prev);
    }
    nextImage() {
        const selected = this.modalImages.querySelector(".selected");
        const next = selected.nextElementSibling || this.modalImages.firstElementChild;
        selected.classList.remove("selected");
        next.classList.add("selected");
        this.setMainImage(next);
    }
    chooseImage(e) {
        if (e.target.classList.contains("modal-img")) {
            const selected = this.modalImages.querySelector(".selected");
            selected.classList.remove("selected");
            e.target.classList.add("selected");
            this.setMainImage(e.target);
        }
    }
}

const veggies = new Gallery(getElement(".veggies"));
const cities = new Gallery(getElement(".cities"));