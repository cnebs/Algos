/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

const longestPalindrome = function (string) {
  if (string.length) {
    for (let rear = string.length; rear > 0; rear--) {
      for (let front = 0; front <= string.length-rear; front++) {
        let sub = string.substr(front, rear);
        if (sub === sub.split('').reverse().join('')) {
          return sub
        }
     }
    }
  } else return '';
};

const test = longestPalindrome("My dad is a racecar athlete")
console.log(test);