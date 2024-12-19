// This script calculates the roots of a quadratic equation
window.alert("Hello, This calculates the roots of a quadratic equation (ax^2 + bx + c = 0)");

let a, b, c;
let discriminant, root1, root2;

document.getElementById("calculate").onclick = function() {
    // Retrieve values from input fields
    a = Number(document.getElementById("aInput").value);
    b = Number(document.getElementById("bInput").value);
    c = Number(document.getElementById("cInput").value);

    // Calculate the discriminant
    discriminant = b * b - 4 * a * c;

    if (a === 0) {
        document.getElementById("myH3").textContent = "ERR! 'a' cannot be zero.";
        return;
    }

    if (discriminant > 0) {
        // Two real and distinct roots
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("myH3").textContent = `Roots: ${root1}, ${root2}`;
    } else if (discriminant === 0) {
        // One real root
        root1 = -b / (2 * a);
        document.getElementById("myH3").textContent = `Root: ${root1}`;
    } else {
        // Complex roots
        let realPart = (-b / (2 * a)).toFixed(2);
        let imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        document.getElementById("result").textContent = `Roots: ${realPart} ± ${imaginaryPart}i`;
    }
};
