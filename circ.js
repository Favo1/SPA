// const =  a variable that can't be changed
window.alert("Hello, This calculates the circumference and give you an answer in Centimeters")

const PI = 3.14159;
let radius;
let circumference;
//answer = document.querySelector("#myH3");
//answer.addEventListener("");


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
    
    if(radius == 0){
        document.getElementById("myH3").textContent = "ERR!";
        document.getElementById("myH3").click = function(){
            innerHTML = PI
        }
        
    }
}


    
    


