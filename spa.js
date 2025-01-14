document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu a');
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
        const a = parseFloat(document.getElementById('aInput').value);
        const b = parseFloat(document.getElementById('bInput').value);
        const c = parseFloat(document.getElementById('cInput').value);
        const discriminant = b ** 2 - 4 * a * c;

        if (!isNaN(discriminant)) {
            const root1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
            const root2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
            document.getElementById('quadResult').textContent = `Roots: ${root1}, ${root2}`;
        } else {
            alert('Please enter valid coefficients.');
        }
    });
});
