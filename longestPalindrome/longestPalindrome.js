/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/


const longestPalindrome = function (string) {
  for (let a = string.length; a > 0; a--) {
    for (let b = 0; b <= string.length-a; b++) {
      let sub = string.substr(b, a);
      if (sub === sub.split('').reverse().join('')) {return sub}
    }
  }
};

const test = longestPalindrome("My dad is a racecar athlete")
console.log(test);