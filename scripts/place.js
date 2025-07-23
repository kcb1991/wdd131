// Static Weather Values (matched to your HTML content)
const temperature = 27; // in °C
const windSpeed = 12; // in km/h

// Windchill Calculation Function (only valid under certain conditions)
function calculateWindChill(t, v) {
    // Canadian formula for °C and km/h
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(v, 0.16) +
        0.3965 * t * Math.pow(v, 0.16)
    ).toFixed(1);
}

// Display Windchill Value If Valid
const windchillDisplay = document.getElementById("windchill-output");
if (temperature <= 10 && windSpeed > 4.8) {
    windchillDisplay.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windchillDisplay.textContent = "N/A";
}

// Footer Year & Last Modified Date
const footer = document.querySelector(".footer p");
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
footer.textContent = `© ${currentYear} Place Explorer. Last modified: ${lastModified}`;