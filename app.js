console.log("Welcome");

var myVariableName = "Welcome";
console.log(myVariableName);

myVariableName = "login";
console.log(myVariableName);

var promptQuestion = "Are you over 21?";
var response = prompt(promptQuestion);
console.log(response);

var alertMessage;
var color;

if (response === "yes") {
    alertMessage = "Perfect! Welcome";
} else if (response === "no") {
    alertMessage = "Go find your adult";
}


alert(alertMessage);

var element = document.getElementById
('response-output') 

element.innerText = alertMessage;
element.style.color = color 
