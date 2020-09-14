var askLower = confirm('Do you want Lower Case ?')
var askUpper = confirm('Do you want Upper Case ?')
var askNum = confirm('Do you want a Number ?')
var askChar = confirm('Do you want a Special Character ?')

console.log('upper ?', askUpper, 'lower', askLower, 'num', askNum)


var passwordChoices = []
var lowerLetters = ['a', 'b', 'c' , 'd', 'e' ,'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperLetters = ['A', 'B', 'C' , 'D', 'E' ,'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialChar = ['!', '@', '#', '$', '%', '&', '*']


if(askUpper === true) {
  passwordChoices = passwordChoices.concat(upperLetters)
}
if(askLower === true) {
  passwordChoices = passwordChoices.concat(lowerLetters)
}
if(askNum === true) {
  passwordChoices = passwordChoices.concat(numbers)
}
if(askChar === true) {
  passwordChoices = passwordChoices.concat(specialChar)
}

console.log('all good ??', passwordChoices)





// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword(howLong) {
  var password = ''

  for (let i = 0; i < howLong; i++) {
    var randomNum =  Math.floor(Math.random() * passwordChoices.length)
    console.log('picking random for password!!', passwordChoices[randomNum])
    password += passwordChoices[randomNum]
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}






// Add event listener to generate button
generateBtn.addEventListener("click", function() {

  var passLength = document.querySelector('#passLength').value
  console.log('is this the num lenght they typed for pass lenght ???', parseInt(passLength))
  writePassword(parseInt(passLength))
});
