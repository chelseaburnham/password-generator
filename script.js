// Assignment code here

var characters = {
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], 
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], 
  special: ["!", "@", "#", "$", "%", "?", "*", "&"], 
  number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
};

function generatePassword() {
  var characterLength = prompt("How many characters would you like in your password?");
  if (characterLength < 8) {
    alert("You must have more than 8 characters.")
  };
  if (characterLength > 128) {
    alert("You must have less than 128 characters.")
  };
  if (characterLength > 8 && characterLength < 128) {
    var characterSpecial = confirm("Would you like special characters?")
  };

  /* 1. window prompt for criteria (length between 8 and 128 characters)
    2. confirm characters (lowercase, uppercase, special, and numeric)
    3. generate the password */

  return ;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

