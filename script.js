// Assignment code here

  var special = ["!", "@", "#", "$", "%", "?", "*", "&"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  var characterLength = prompt("How many characters would you like in your password?");
  while (characterLength < 8 || characterLength > 128) {
    alert("You must have between 8 and 128 characters. Try again.")
    characterLength = prompt("How many characters would you like in your password?");
  } if (characterLength >= 8 && characterLength <= 128) {
    alert("Ok great! You chose " + characterLength + " characters.")
  };

  var characterSpecial = confirm("Would you like to include special characters?");
  var characterUpper = confirm("Would you like to include uppercase letters?");
  var characterLower = confirm("Would you like to include lowercase letters?");
  var characterNumber = confirm("Would you like to include numbers?");

while (characterSpecial === false && characterUpper === false && characterLower === false && characterNumber === false) {
    alert("You must choose at least one of the given options.");
    characterSpecial = confirm("Would you like to include special characters?");
    characterUpper = confirm("Would you like to include uppercase letters?");
    characterLower = confirm("Would you like to include lowercase letters?");
    characterNumber = confirm("Would you like to include numbers?");
};

var characters;

// probably not the most efficient, but this is gathering the user responses into the characters variable
if (characterSpecial && characterUpper && characterLower && characterNumber) {
  characters = special.concat(upper, number, lower);
};

if (characterSpecial && !characterUpper && characterLower && characterNumber) {
  characters = special.concat(lower, number);
};

if (!characterSpecial && characterUpper && characterLower && characterNumber) {
  characters = upper.concat(lower, number);
};

if (characterSpecial && characterUpper && !characterLower && characterNumber) {
  characters = special.concat(upper, number);
};

if (characterSpecial && characterUpper && characterLower && !characterNumber) {
  characters = special.concat(upper, lower);
};

if (characterSpecial && !characterUpper && !characterLower && !characterNumber) {
  characters = special;
};

if (!characterSpecial && characterUpper && !characterLower && !characterNumber) {
  characters = upper;
};

if (!characterSpecial && !characterUpper && characterLower && !characterNumber) {
  characters = lower;
};

if (!characterSpecial && !characterUpper && !characterLower && characterNumber) {
  characters = number;
};

if (characterSpecial && characterUpper && !characterLower && !characterNumber) {
  characters = special.concat(upper);
};

if (characterSpecial && !characterUpper && characterLower && !characterNumber) {
  characters = special.concat(lower);
};

if (characterSpecial && !characterUpper && !characterLower && characterNumber) {
  characters = special.concat(number);
};

if (!characterSpecial && characterUpper && characterLower && !characterNumber) {
  characters = upper.concat(lower);
};

if (!characterSpecial && characterUpper && !characterLower && characterNumber) {
  characters = upper.concat(number);
};

if (!characterSpecial && !characterUpper && characterLower && characterNumber) {
  characters = lower.concat(number);
};

for (var i = 0; i < characterLength.length; i++) {
  randomPassword = characters[Math.floor(Math.random() * characterLength)];
}

return randomPassword;
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

