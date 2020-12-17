console.log("Welcome");

var myVariableName = "Welcome";
console.log(myVariableName);

myVariableName = "login";
console.log(myVariableName);

function myPrompt(newPrompt, accept, reject){
    var response = prompt(newPrompt);
    response = response.toLowerCase();
    console.log(response);

    var alertMessage;

    if (response === "yes") {
        alertMessage = accept;
    } else  {
        while (response.toLowerCase() != "yes"){
            alert(reject);
            console.log(response);
            response = prompt(newPrompt);
        }
        alertMessage = accept;
        alert(alertMessage);
    }
    return alertMessage;
}

myPrompt("Are you over 21?", "Welcome!", "GTFO")

//var element = document.getElementById('Top'); //would change banner

//element.innerText = alertMessageFinal; //txt that poppulates banner
//element.style.color = color;
//var temp = myPrompt("Is Hazel a dork?", "I agree", "Try again")

var temp2 = myPrompt("Are you ready for the Holidays?", "Cool Cool", "Ok, Grinch" )
console.log(temp2);