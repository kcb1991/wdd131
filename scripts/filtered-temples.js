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
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Seattle Washington",
        location: "Seattle Washington",
        dedicated: "1980,November, 17",
        area: 110000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/seattle-washington-temple/seattle-washington-temple-55800.jpg"
    },
    {
        templeName: "Moses Lake",
        location: "Moses Lake",
        dedicated: "2023, September, 17",
        area: 28933,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/moses-lake-washington-temple/moses-lake-washington-temple-39148.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056.jpg"
    },
    // Add more temple objects here...
];

createTempleCard(temples);


const oldLink = document.querySelector("#Old");

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    }));

});

const newLink = document.querySelector("#New");

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    }));

});

const largeLink = document.querySelector("#Large");

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallLink = document.querySelector("#Small");

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

const homeLink = document.querySelector("#Home");

homeLink.addEventListener("click",() => {
    createTempleCard(temples);
});

function createTempleCard(filteredTemples) {
    document.querySelector(".templeGrid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("temple-card");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".templeGrid").appendChild(card);
    })
}



