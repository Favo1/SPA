// Saving Data locally
document.addEventListener("DOMContentLoaded", function() {

    function attachCalculationEvents() {
        console.log("Re-attaching calculation functions...");

        // Example: Attach circumference calculation
        const calculateCircumference = document.querySelector("#calculateCirc");
        if (calculateCircumference) {
            calculateCircumference.addEventListener("click", function() {
                let radius = parseFloat(document.querySelector("#radiusInput").value);
                if (!isNaN(radius)) {

                    document.querySelector("#circResult").innerText = (2 * Math.PI * radius).toFixed(2);
                }
            });
        }

        //Example: Attach radius calculation
        document.getElementById('calculateRad').addEventListener('click', () => {
        const diameter = parseFloat(document.getElementById('diameterInput').value);
        if (!isNaN(diameter)) {
            const radius = (diameter / 2).toFixed(2);
            document.getElementById('radResult').textContent = `Radius: ${radius}`;
        } else {
            alert('Please enter a valid number for diameter.');
        }
    });

        // Example: Attach quadratic equation solver
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
    }

   // Initial attach
   attachCalculationEvents();

   // Page Switching Logic
   const menuLinks = document.querySelectorAll('.menu a'); // Menu links
   const pages = document.querySelectorAll('.page');  // Menu pages
   const navLinks = document.querySelectorAll('.navbar a'); // Nav links
   const pages2 = document.querySelectorAll('.page2');  // Nav pages

   // Hide all pages initial
   
    // Set home page as default
    document.querySelectorAll('.page, .page2').forEach(page => page.classList.add('hidden2'));
    document.querySelector('#home')?.classList.remove('hidden2');
    document.querySelector('#home')?.classList.add('active2');


   

   

   menuLinks.forEach(link => {
       link.addEventListener('click', (e) => {
           e.preventDefault();
           const targetId = e.target.getAttribute('data-target');

           pages.forEach(page => {
               page.classList.toggle('active', page.id === targetId);
               page.classList.toggle('hidden', page.id !== targetId);
           });

           pages2.forEach(page2 => {  // Hides nav pages
               page2.classList.remove('active2');
               page2.classList.add('hidden2');
           });

           attachCalculationEvents(); // Reinitialize functions
       });
   });

   navLinks.forEach(nav => {
       nav.addEventListener('click', (e) => {
           e.preventDefault();
           const targetId2 = e.target.getAttribute('data-target-2');

           pages2.forEach(page2 => {
               page2.classList.toggle('active2', page2.id === targetId2);
               page2.classList.toggle('hidden2', page2.id !== targetId2);
           });

           pages.forEach(page => { // Hides menu pages
               page.classList.remove('active');
               page.classList.add('hidden');
           });

           attachCalculationEvents(); // Reinitialize functions
       });
   });
});