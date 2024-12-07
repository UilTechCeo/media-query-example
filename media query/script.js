let width_size = document.getElementById("width-size");
let color_text = document.getElementById("color-text");

// List of CSS named colors
const namedColors = {
    "black": "rgb(0, 0, 0)",
    "white": "rgb(255, 255, 255)",
    "red": "rgb(255, 0, 0)",
    "blue": "rgb(0, 0, 255)",
    "green": "rgb(0, 128, 0)",
    "yellow": "rgb(255, 255, 0)",
    "purple": "rgb(128, 0, 128)",
    "orange": "rgb(255, 165, 0)",
    "pink": "rgb(255, 192, 203)",
    "gray": "rgb(128, 128, 128)",
    // Add more colors if needed
};

// Function to get the named color from RGB
function getNamedColor(rgbValue) {
    for (const [name, rgb] of Object.entries(namedColors)) {
        if (rgb === rgbValue) {
            return name;
        }
    }
    return ""; // Default to RGB if no match found
}




window.addEventListener("resize", () => {
    width_size.textContent = window.innerWidth

    // Get the computed background color
    const rgbColor = window.getComputedStyle(document.querySelector("body")).backgroundColor;
    
    // Convert to named color if possible
    color_text.textContent = getNamedColor(rgbColor);

})