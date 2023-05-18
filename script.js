// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
console.log(generateBtn);
//needed info for password when generated
var uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*(),.?+=-"


function generatePassword() {
//fetching user input
var characters = "";
var passwordLength = 8;
var password = "";
  userrequestuppercaseLetters = confirm("Would you like UPPERcase letters? Ok for 'yes', Cancel for 'no' ");
  userrequestlowercaseLetters = confirm("Would you like lowerCASE letters? Ok for 'yes', Cancel for 'no' ");
  userrequestspecialCharacters = confirm("Would you like special characters? Ok for 'yes', Cancel for 'no' ");
  userrequestnumbers = confirm("Would you like numbers? Ok for 'yes', Cancel for 'no'");
  passwordLength = prompt("Choose password length of at least 8 characters and no more than 128 characters. ");
//validating user input
  if(passwordLength < 8 || passwordLength > 128){
    alert("Your password is not between 8 and 128 characters. Please try again.");
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
  
  }else if(lowercaseLetters === false && uppercaseLetters === false && numbers === false && specialCharacters === false){
    alert("You must choose at least one password criteria.")
  }
  //building character string for password generation
  if(userrequestnumbers) {
    characters += numbers;
    console.log(characters);
  }
  
  if(userrequestuppercaseLetters){
    characters += uppercaseLetters;
    console.log(characters);
  }
  if(userrequestlowercaseLetters) {
    characters += lowercaseLetters;
    console.log(characters);
  }
  if(userrequestspecialCharacters) {
    characters += specialCharacters;
    console.log(characters);
  }
  
  //creating password
  for (var i=0; i< passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * characters.length);
    var character = characters[randomNumber]
    //console.log(characters, randomNumber, character);
    password += character
    console.log(password);
  }

  return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
