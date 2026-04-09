document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".Home");
    const overlay = document.querySelector(".overlay");

    menuBtn.addEventListener("click", function() {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");

        menuBtn.textContent = menu.classList.contains("active") ? "✖" : "☰";
    });

    overlay.addEventListener("click", function() {
        menu.classList.remove("active");
        overlay.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});
const container = document.querySelector(".container");

container.addEventListener("click", function() {
    container.classList.toggle("active");
});