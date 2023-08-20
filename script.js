// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("Button was clicked");

    // 1. Prompt user for password criteria
    //    Lowercase, uppercase, numbers, special characters
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var lowerCaseLetters = ["abcdefghijklmnopqrstuvwxyz"];
    var upperCaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    var specialCharacters = ["!@#$ %^&* ()"];

    // 2. Validate the input
    numberOfCharacters = prompt("Choose between 8-128 characters for you password.");
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
        return prompt("Wrong!  Choose between 8-128 characters.");
    } else if (isNaN(numberOfCharacters)) {
        return prompt("Numbers only, please.");
    } else {
        alert("You have chosen a " + numberOfCharacters + " character password.");
    }
    // 3. Generate password based on criteria.




    // 4. Display password on page
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
