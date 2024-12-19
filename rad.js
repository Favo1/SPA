// Alert the user about the purpose of the calculator
window.alert("Hello, This calculates the radius of a circle based on the diameter you provide");

// Declare variables
let radius;
let diameter;

// Event listener for the submit button
document.getElementById("mySubmit").onclick = function() {
    // Retrieve and convert the radius input
    diameter = document.getElementById("myText").value;
    radius = Number(radius);

    // Calculate the diameter (2 times the radius)
   radius = diameter / 2;

    // Display the result
    document.getElementById("myH3").textContent = radius + " cm";

    // Handle cases where the radius is 0 or invalid
    if (diameter <= 0 || isNaN(radius)) {
        document.getElementById("myH3").textContent = "ERR! Please enter a valid diameter.";
    }
};