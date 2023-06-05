function palindrome(myString) {
  /* remove special characters, spaces and make lowercase*/
  var removeChar = myString.replace(/[^A-Z0-9]/gi, "").toLowerCase();

  /* reverse removeChar for comparison*/
  var checkPalindrome = removeChar.split("").reverse().join("");

  /*create h4 element to append checked string*/
  var hElement = document.createElement("h4");
  document.getElementById("wrapper").appendChild(hElement);

  /* Check to see if myString is a Palindrome*/
  if (removeChar === checkPalindrome) {
    hElement.innerText = `${myString} is a Palindrome`;
  } else {
    hElement.innerText = `${myString} is not a Palindrome`;
  }
}
palindrome('"racecar"');
palindrome('"Madam"');
palindrome('"Star Wars"');
palindrome('"2,3,4,3,2"');
palindrome('"7,10,7,8,9"');
