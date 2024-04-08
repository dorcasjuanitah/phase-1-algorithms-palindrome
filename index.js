function reverse(word){
  return word.split('').reverse().join('');

}
function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word);

  if (word === reversedWord) {
    return true;
  }
  else{
    return false;
  }
  

}

/* 
  Add your pseudocode here
  check of word is string, return true
  else, return false. 
*/

/*
  Add written explanation of your solution here
  check if the word is a palindrome, if yes return true if false return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
