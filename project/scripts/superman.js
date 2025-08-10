// Simple fictional Kryptonian character map
function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const errors = [];

    // Name validation
    if (name.value.trim().length < 2) {
        errors.push("Name must be at least 2 characters.");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        errors.push("Please enter a valid email address.");
    }

    // Message validation
    if (message.value.trim().length < 10) {
        errors.push("Message must be at least 10 characters.");
    }

    // Display errors or success
    const output = document.getElementById("form-output");
    if (errors.length > 0) {
        output.innerHTML = `<ul style="color: red;">${errors.map(e => `<li>${e}</li>`).join("")}</ul>`;
        return false;
    } else {
        output.innerHTML = `<p style="color: green;">✅ Message sent successfully!</p>`;
        return true;
    }
}

// Attach validation to form submit
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateForm()) {
            form.reset();
        }
    });
});

const kryptonianMap = {
    a: "∆", b: "β", c: "¢", d: "∂", e: "ε", f: "ϝ", g: "γ", h: "♄",
    i: "ι", j: "ĵ", k: "κ", l: "λ", m: "μ", n: "η", o: "ø", p: "π",
    q: "φ", r: "ρ", s: "§", t: "τ", u: "υ", v: "ν", w: "ω", x: "χ",
    y: "ψ", z: "ζ", " ": " "
};

// Translate function
function translateToKryptonian(text) {
    return [...text.toLowerCase()]
        .map(char => kryptonianMap[char] || char)
        .join("");
}

// Save translation
function saveTranslation(original, translated) {
    localStorage.setItem("lastTranslation", JSON.stringify({ original, translated }));
}

// Load previous translation
function loadTranslation() {
    const saved = localStorage.getItem("lastTranslation");
    if (saved) {
        const { original, translated } = JSON.parse(saved);
        displayTranslation(original, translated);
        document.getElementById("english-input").value = original;
    }
}

// Display translation
function displayTranslation(original, translated) {
    const output = document.getElementById("translation-output");
    output.innerHTML = `
    <p><strong>Original:</strong> ${original}</p>
    <p><strong>Kryptonian:</strong> <span style="font-family: monospace;">${translated}</span></p>`;
}

// Event listener
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("english-input");
    const button = document.getElementById("translate-btn");

    button.addEventListener("click", () => {
        const original = input.value.trim();
        if (original.length > 0) {
            const translated = translateToKryptonian(original);
            displayTranslation(original, translated);
            saveTranslation(original, translated);
        }
    });

    loadTranslation();
});