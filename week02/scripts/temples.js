const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.getElementById("lastModified");
modifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

