const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.getElementById("lastModified");
modifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger");
    const nav = document.querySelector("nav");

    hamburgerBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
        hamburgerBtn.textContent = nav.classList.contains("active") ? "❌" : "☰";
    });
});
