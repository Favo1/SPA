// Storage App
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("#btnSave").forEach(button => {
        button.addEventListener("click", function () {
            let parent = button.closest(".form");
            let input = parent.querySelector("input");
            let result = parent.querySelector("h4");
            let category = parent.closest("main").id; // Get category based on main element ID
            if(button) {
                window.alert("Your result has been saved!")
            };
           
            if (input && result && input.value.trim() !== "" && result.textContent.trim() !== "") {
                saveResult(category, input.value, result.textContent);
            } else {
                alert("Please enter a value and calculate before saving.");
            }
        });
    }); 

    const clrBtn = document.getElementById("btnClr");
    if(clrBtn){
        clrBtn.addEventListener("click", function () {
            console.log("Clear button clicked"); //Debug log
            clearResults();
        });
    }else {
        console.error("Clear Results button not found");
    }
    displaySavedResults();
});

function saveResult(category, inputValue, resultValue) {
    let savedResults = JSON.parse(localStorage.getItem("savedResults")) || {};
    
    if (!savedResults[category]) {
        savedResults[category] = [];
    }
    
    savedResults[category].push({ input: inputValue, result: resultValue });
    localStorage.setItem("savedResults", JSON.stringify(savedResults));
    displaySavedResults();
}

function displaySavedResults() {
    let savedContainer = document.getElementById("saved");
    savedContainer.innerHTML = ""; // Clear previous content
    let savedResults = JSON.parse(localStorage.getItem("savedResults")) || {};
    
    if (Object.keys(savedResults).length === 0) {
        savedContainer.innerHTML = "<p>sorry, you have no saved results yet:(</p>"; // Show empty state
    } else {
        for (let category in savedResults) {
            let categoryDiv = document.createElement("div");
            categoryDiv.innerHTML = `<h2>${category}</h2>`;
            
            savedResults[category].forEach(entry => {
                let entryDiv = document.createElement("p");
                entryDiv.textContent = `Input: ${entry.input}, Result: ${entry.result}`;
                categoryDiv.appendChild(entryDiv);
            });

            savedContainer.appendChild(categoryDiv);
        }
    }
}

function clearResults() {
    console.log("Clearing localStorage...");
    localStorage.removeItem('savedResults');
    // location.reload();
    displaySavedResults();
}


