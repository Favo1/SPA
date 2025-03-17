// Saving Data locally
document.addEventListener("DOMContentLoaded", function() {
    var numberOfVisits = localStorage.getItem("visits");
    var message = document.querySelector("#message");
    if (numberOfVisits) {
        localStorage.setItem("visits", parseInt(numberOfVisits)+1);
        message.innerHTML = "This is your visit #" +numerOfVisits;
    } else {
        // Its the first time the user visits my page
        message.innerHTML = "welcome for the first time to our page";
        localStorage.setItem("visits", "1");
    }
});

//Pages active/Hidden 
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu a', '.navbar a');
    const pages = document.querySelectorAll('.page');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('data-target');
            
            // Hide all pages and show the selected one
            pages.forEach(page => {
                if (page.id === targetId) {
                    page.classList.add('active');
                    page.classList.remove('hidden');
                } else {
                    page.classList.remove('active');
                    page.classList.add('hidden');
                }
            });
        });
    });

    // Example: Circumference Calculation
    document.getElementById('calculateCirc').addEventListener('click', () => {
        const radius = parseFloat(document.getElementById('radiusInput').value);
        if (!isNaN(radius)) {
            const circumference = (2 * Math.PI * radius).toFixed(2);
            document.getElementById('circResult').textContent = `Circumference: ${circumference}`;
        } else {
            alert('Please enter a valid number for radius.');
        }
    });

    // Example: Radius Calculation
    document.getElementById('calculateRad').addEventListener('click', () => {
        const diameter = parseFloat(document.getElementById('diameterInput').value);
        if (!isNaN(diameter)) {
            const radius = (diameter / 2).toFixed(2);
            document.getElementById('radResult').textContent = `Radius: ${radius}`;
        } else {
            alert('Please enter a valid number for diameter.');
        }
    });

    // Example: Quadratic Equation
    document.getElementById('calculateQuad').addEventListener('click', () => {
        // 1. Retrieve and parse coefficients
        const a = parseFloat(document.getElementById('aInput').value);
        const b = parseFloat(document.getElementById('bInput').value);
        const c = parseFloat(document.getElementById('cInput').value);
    
        // 1a. Validate inputs
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            alert('Please enter valid numerical coefficients.');
            return; // Stop execution if inputs are invalid
        }
    
        // 2. Handle non-quadratic (linear) cases
        if (a === 0) {
            // Case: a == 0, so the equation is linear: bx + c = 0
            if (b === 0) {
                // When both a and b are 0, check c:
                if (c === 0) {
                    document.getElementById('quadResult').textContent = "Infinite solutions (all numbers satisfy the equation).";
                } else {
                    document.getElementById('quadResult').textContent = "No solution exists.";
                }
            } else {
                // Solve linear equation: x = -c / b
                const x = (-c / b).toFixed(2);
                document.getElementById('quadResult').textContent = `Linear equation root: ${x}`;
            }
            return; // Exit after handling the linear case
        }
    
        // 3. For quadratic equations, calculate the discriminant
        const discriminant = b * b - 4 * a * c;
        let result;
    
        // 4. Calculate and format roots based on the discriminant value
        if (discriminant > 0) {
            // Two distinct real roots
            const sqrtDiscriminant = Math.sqrt(discriminant);
            const root1 = ((-b + sqrtDiscriminant) / (2 * a)).toFixed(2);
            const root2 = ((-b - sqrtDiscriminant) / (2 * a)).toFixed(2);
            result = `Two distinct real roots: ${root1} and ${root2}`;
        } else if (discriminant === 0) {
            // One real repeated root
            const root = (-b / (2 * a)).toFixed(2);
            result = `One real root (double root): ${root}`;
        } else {
            // Complex roots (discriminant < 0)
            const sqrtDiscriminant = Math.sqrt(-discriminant); // Square root of the absolute value
            const realPart = (-b / (2 * a)).toFixed(2);
            const imaginaryPart = (sqrtDiscriminant / (2 * a)).toFixed(2);
            result = `Two complex roots: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`;
        }
    
        // 5. Output the result to the designated HTML element
        document.getElementById('quadResult').textContent = result;
    });
    
});