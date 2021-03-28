// Assignment code here
//create arrays containing each criteria
//create for loop to cycle through arrays.
//create function to push random characters to empty array

 


 var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', ',', '{', '}', '|', ':', '>', '?', ';', '.'];


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

  var passwordLowerCase = confirm("Do you want your password to include lowercase letters?");
  console.log(passwordLowerCase);

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
        //generate combined password
        alert("Great! Here's your random password");
        var combineCharacters = function(length){
          var passRandom = [];
          if (passwordNumbers){passRandom = passRandom.concat(numbers);}
          if (passwordLowerCase){passRandom = passRandom.concat(lowerCase);}
          if (passwordUpperCase){passRandom = passRandom.concat(upperCase);}
          if (passwordSpecialChar){passRandom = passRandom.concat(specialChar);}
          var generated = "";
          for (var i = 0; i < length; i++){
            var randomNumber = Math.floor(Math.random() * passRandom.length);
            generated += passRandom[randomNumber];
          }
          return generated;
        };
       return combineCharacters(passwordLength);
      }

};

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



