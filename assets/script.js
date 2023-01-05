// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var numbers = "0123456789".split("")
var special = "!@#$%^&*()_+{}|:<>?-=[]\;',./`~".split("")


// when the generate button is pressed it gives you a prompt asking how long you want your password to be and it has to be between 8 and 128 characters. If it's not long enough it tells you to enter a valid length.
function generatePassword(){
  var options = []
  var passwordLength = prompt("how long would you like your password to be?")
  if(passwordLength < 8 || passwordLength > 128){
    alert("please enter a valid length")
    generatePassword()
    return
  }

  // variables that ask the user if they want thats certain character type in the generated password.
  var wantsUpperCase = confirm("do you want upperCase Characters?")
  var wantsLowerCase = confirm("do you want lowerCase Characters?")
  var wantsNumeric = confirm("do you want numeric numbers?")
  var wantsSpecialChars = confirm("do you want special Characters?")

//if a criteria is not selected then it alerts the user that they must select at least one.
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

// writes the password from the chosen options and if it gives an undefined it gives an alert and makes you enter the criteria again.
function writePassword() {
  var password = generatePassword();
  if (!password) {
    alert('password generation error retry')
    generatePassword()
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
