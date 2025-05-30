document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[id=btnSave]").forEach(button => {
        button.addEventListener("click", function () {
            let parent = button.closest(".form");
            let inputs = parent.querySelectorAll("input");
            let result = parent.querySelector("h4");
            let category = parent.closest("main").id; // Get category based on main element ID
            
            let inputValues = Array.from(inputs).map(input => input.value.trim()).join(", ");
            
            console.log("Inputs:", inputValues); // Debugging log
            console.log("Result:", result.textContent); // Debugging log
            
            if (inputValues && result && result.textContent.trim() !== "") {
                window.alert("Your results have been saved!")
                saveResult(category, inputValues, result.textContent);
            } else {
                alert("Please enter values and calculate before saving.");
            }
        });
    });
    
    let clearButton = document.getElementById("btnClr");
    if (clearButton) {
        clearButton.addEventListener("click", clearResults);
    }

    displaySavedResults();
});
//Save results
function saveResult(category, inputValue, resultValue) {
    let savedResults = JSON.parse(localStorage.getItem("savedResults")) || {};
    
    if (!savedResults[category]) {
        savedResults[category] = [];
    }
    
    savedResults[category].push({ input: inputValue, result: resultValue });
    localStorage.setItem("savedResults", JSON.stringify(savedResults));

    console.log("Saved Results:", savedResults); // Debugging log
    displaySavedResults();
}

//Display results
function displaySavedResults() {
    let savedContainer = document.getElementById("saved");
    savedContainer.innerHTML = ""; // Clear previous content
    let savedResults = JSON.parse(localStorage.getItem("savedResults")) || {};
    
    console.log("Displaying Saved Results:", savedResults); // Debugging log
    
    if (Object.keys(savedResults).length === 0) {
        savedContainer.innerHTML = "<p>No saved results. <br> Click the save button to save a result :)</p>";
    } else {
        for (let category in savedResults) {
            let categoryDiv = document.createElement("div");
            categoryDiv.innerHTML = `<h2>${category}</h2>`;
            
            savedResults[category].forEach(entry => {
                let entryDiv = document.createElement("p");
                entryDiv.textContent = `Inputs: ${entry.input}, Result: ${entry.result}`;
                categoryDiv.appendChild(entryDiv);
            });

            savedContainer.appendChild(categoryDiv);
        }
    }
}

//Clear results
function clearResults() {
    console.log("Clearing localStorage..."); // Debugging log
    localStorage.removeItem("savedResults");
    displaySavedResults();
}
