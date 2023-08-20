// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("Button was clicked");

    // 1. Prompt user for password criteria
    //    password lenght 8 < 128
    //    Lowercase, uppercase, numbers, special characters
    // 2. Validate the input
    // 3. Display password on page



    return "Generated password goes here";
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();//create generatePasswork fuction
    var passwordText = document.querySelector("#password");

    passwordText.value = password;//displays on screen

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
////WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page*//
