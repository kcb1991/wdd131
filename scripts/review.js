window.addEventListener("DOMContentLoaded", () => {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCount", reviewCount);

    const counterDisplay = document.getElementById("reviewCounter");
    if (counterDisplay) {
        counterDisplay.textContent = `You've submitted ${reviewCount} review${reviewCount > 1 ? "s" : ""}.`;
    }
});

const footer = document.querySelector(".footer p");
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
footer.innerHTML = `© ${currentYear} ⛵ Kyle Boat ⛵ <br> Product Review Form <br> Last modified: ${lastModified}`;