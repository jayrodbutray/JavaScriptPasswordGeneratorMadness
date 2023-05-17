// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


var uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*(),.?+=-"


function generatePassword() {
  var uppercaseLetters = confirm("Would you like UPPERcase letters? ");
  var lowercaseLetters = confirm("Would you like lowerCASE letters? ");
  var specialCharacters = confirm("Would you like special characters? ");
  var numbers = confirm("Would you like numbers? ");
  var passwordLength = prompt("Choose password length of at least 8 characters and no more than 128 characters. ");

  if(numbers) {
    generatePassword += randomNumber();
  }
  if(uppercaseLetters){
    generatePassword += randomNumber();
  }
  if(lowercaseLetters) {
    generatePassword += randomNumber();
  }
  if(specialCharacters) {
    generatePassword =+ randomNumber();
  }
  for (var i=0; i<= passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * characters.length);
    return password
  }




  if(passwordLength < 8 || passwordLength > 128){
    alert("Your password is not between 8 and 128 characters. Please try again.");
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
  
  }else if(lowercaseLetters === false && uppercaseLetters === false && numbers === false && specialCharacters === false){
    alert("You must choose at least one password criteria.")
  }


    
  var characters = "";
  var passwordLength = 8;
  var password = "";

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  
passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
