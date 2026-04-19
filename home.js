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
const containers = document.querySelectorAll(".container");

window.addEventListener("scroll", () => {
    containers.forEach(el => {
        const top = el.getBoundingClientRect().top;
        
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
window.addEventListener("load", () => {
    document.querySelectorAll(".container").forEach(el => {
        el.classList.add("show");
    });
});