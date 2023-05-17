// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  var input = confirm("Choose your password criteria ")
  var input = prompt("Would you like UPPERcase letters? ")
  var userChoice = "yes, no"
  var wantsUppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    console.log(wantsUppercase);
  if wantsUppercase(){

  }
  var characters = "";
  var passwordLength = 8;
  var password = "";
  for (var i=0; i<= passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * characters.length);
    return password
  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
