console.log("Welcome");

var myVariableName = "Welcome";
console.log(myVariableName);

myVariableName = "login";
console.log(myVariableName);






function myPrompt(newPrompt, accept, reject){
    var response = prompt(newPrompt);
    response = response.toLowerCase();
    console.log(response);

    var alertMessage = "";

    if (response === "yes") {
        alertMessage = accept;
    } else  {
        alertMessage = reject;

        while (response.toLowerCase() != "yes"){
            response = prompt(newPrompt);
        }
        alertMessage = accept;
    }
    return alertMessage;
}

var alertMessageFinal = myPrompt("Are you over 21?", "Welcome!", "GTFO")

alert(alertMessageFinal);

var element = document.getElementById('Top');

element.innerText = alertMessageFinal;
//element.style.color = color;
//var temp = myPrompt("Is Hazel a dork?", "I agree", "Try again")