const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const sidebarToggle = document.querySelector(".sidebar-toggle");

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});