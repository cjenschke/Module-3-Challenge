var numberOfCharacters = 8;
var userChoice = [];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var generateBtn = document.querySelector("#generate");

function userPrompts() {
    userChoice = [];
    numberOfCharacters = (prompt("Choose between 8-128 characters for you password."));

    if (isNaN(numberOfCharacters) || numberOfCharacters < 8 || numberOfCharacters > 128) {
        alert("Wrong! Password must be between 8 - 128 characters.");
        return false;
    }
    if (confirm("Do you want to use numbers?")) {
        userChoice = userChoice.concat(numbers);
    } else {
        false;
    }
    if (confirm("Do you want to use lowercase characters?")) {
        userChoice = userChoice.concat(lowerCaseCharacters);
    } else {
        false;
    }
    if (confirm("Do you want to use UPPERCASE characters?")) {
        userChoice = userChoice.concat(upperCaseCharacters);
    } else {
        false;
    }
    if (confirm("Do you want to use special characters?")) {
        userChoice = userChoice.concat(specialCharacters);
    } else {
        alert("You must choose at least one type of character.");
    } return true;
}

function generatePassword() {
    console.log("Button was clicked");
    var password = "";
    for (var i = 0; i < numberOfCharacters; i++) {
        var randomCharacter = Math.floor(Math.random() * userChoice.length);
        password = password + userChoice[randomCharacter];
    }
    return password;
}

function writePassword() {
    var correctPrompts = userPrompts();
    var passwordText = document.querySelector("#password");

    if (correctPrompts) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
    } else {
        passwordText.value = "";
    }
}

generateBtn.addEventListener("click", writePassword);

