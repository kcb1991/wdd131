const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
];

const select = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});

const footer = document.querySelector(".footer p");
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
footer.innerHTML = `© ${currentYear} ⛵ Kyle Boat ⛵ <br> Product Review Form <br> Last modified: ${lastModified}`;
