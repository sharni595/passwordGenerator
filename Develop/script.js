// Assignment code here
//create arrays containing each criteria
//create for loop to cycle through arrays.
//create function to push random characters to empyt array
var numbers = '0123456789';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar = '~!@#$%^&*()_+-=[]{}|\:>?;.';

//function to generate password
function generatePassword() { 
  
  // passwordLength();
  var passwordLength = prompt("How many characters long do you want your password to be? Choose a value between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128){
    alert("Please select a valid number of characters.");
    return;
  } 
  console.log(passwordLength);
  
  var passwordNumbers = confirm("Do you want your password to include numbers?");
  console.log(passwordNumbers);
  //randomly generate numbers
  if (passwordNumbers === true) {
    for (var i = 0; i < numbers.length; i++){
      passwordNumbers = (Math.floor(Math.random() * numbers.length));
      console.log(passwordNumbers);
    }
  }

  var passwordLowerCase = confirm("Do you want your password to include lowercase letters?"); 
  console.log(passwordLowerCase);
  //randomly generate lowercase letters
  
  var passwordUpperCase = confirm("Do you want your password to include upper case letters?");
  console.log(passwordUpperCase);
  
  var passwordSpecialChar = confirm("Do you want your password to include special characters?")
  console.log(passwordSpecialChar);
 
  //if at least one is selected as true, continue with creating password. if not, create alert and run again. 
  if (passwordNumbers === false &&
      passwordLowerCase === false &&
      passwordUpperCase === false &&
      passwordSpecialChar === false) {
        alert("You need to select at least one criteria!");
        generatePassword();
      }else{
        alert("Great! Here's your random password");
      }
  
 

};


generatePassword();


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



