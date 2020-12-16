console.log("Welcome");

var myVariableName = "Welcome";
console.log(myVariableName);

myVariableName = "login";
console.log(myVariableName);

var promptQuestion = "Are you over 21?";
var response = prompt(promptQuestion);
response = response.toLowerCase();
console.log(response);

var alertMessage = "";
var color;

if (response === "yes") {
    alertMessage = "Perfect! Welcome";
} else  {
    alertMessage = "Go find your adult";
    promptQuestion = "Have you found an adult yet?";
    while (response.toLowerCase() != "yes"){
        response = prompt(promptQuestion);
    }
    alertMessage = "Perfect! Welcome";
}

alert(alertMessage);

var element = document.getElementById('Top');

element.innerText = alertMessage;
element.style.color = color;
