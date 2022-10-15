const updateCount = (element) => {
    const value = parseInt(element.dataset.value);
    const increment = Math.ceil(value / 1000);
    let initialValue = 0;
    const increaseCount = setInterval(() => {
        initialValue += increment;
        if (initialValue > value) {
            element.textContent = `${value}+`;
            clearInterval(increaseCount);
            return;
        }
        element.textContent = `${initialValue}+`;
    }, 1);
}

const items = [...document.querySelectorAll(".number")];

items.forEach(item => {
    updateCount(item);
});