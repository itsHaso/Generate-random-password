// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHI".split("")
var lowerCase = "abcdefg".split("")
var numbers = "1234567".split("")
var special = "!@#$%^".split("")
// Write password to the #password input
function generatePassword(){
  var options = []
  var passwordLength = prompt("how long would you like your password to be?")
  if(passwordLength < 8 || passwordLength > 128){
    alert("please enter a valid length")
    generatePassword()
    return
  }
  var wantsUpperCase = confirm("do you want upperCase Characters?")
  var wantsLowerCase = confirm("do you want lowerCase Characters?")
  var wantsNumeric = confirm("do you want numeric numbers?")
  var wantsSpecialChars = confirm("do you want special Characters?")
  if(!wantsUpperCase && !wantsLowerCase && !wantsNumeric && !wantsSpecialChars){
    alert("You must choose atleast one option")
    generatePassword()
    return
  }
  if(wantsUpperCase){
    options = options.concat(upperCase)
  }
  if(wantsLowerCase){
    options = options.concat(lowerCase)
  }
  if(wantsNumeric){
    options = options.concat(numbers)
  }
  if(wantsSpecialChars){
    options = options.concat(special)
  }
  var password= ""
  for(var i=0; i<passwordLength; i++){
    console.log(i)
password += options[Math.floor(Math.random()* options.length)]
  }
  return password
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
