// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charArr = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
var numberRando = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


// this is going to get the user to tell if they want special characters or what length
function generatePassword() {
  var result = "";
  var howMany = prompt("Pick a length between 8 and 128");
var userWantsLower = confirm("lower?");
var userWantsUpper = confirm("upper?");
var userWantsChar = confirm("character?");
var userWantsNumber = confirm("Number?");
// This makes sure the user is choosing a proper length
if ((howMany > 7) && (howMany < 129)) {

  var possChar = [];

  if (userWantsLower) {
    possChar.push(alphaLower);
    console.log("yes");
  }
  if (userWantsUpper) {
    possChar.push(alphaUpper);
    console.log("yes");
  }
  if (userWantsChar) {
    possChar.push(charArr);
    console.log("yes");
  }
  if (userWantsNumber) {
    possChar.push(numberRando);
    console.log("yes");
  }
  console.log(possChar);
}
console.log("how many = " + howMany);

  for (pWord = 0; pWord < howMany; pWord++) {

    var i = possChar[Math.floor(Math.random() * possChar.length)];
    var char = i[Math.floor(Math.random() * i.length)];
    console.log(char);
    
    result += char;
    




  }
  return result;
  
}

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value=password;


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);