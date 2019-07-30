/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

const isPalindrome = str => {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

const longestPalindrome = function (string) {

  const obj = {};
  const arr = string.split(' ');
  let val = 0, result = '';


  for (let word of arr) {
    if (isPalindrome(word)) {
      obj[word] = word.length;
    }
  }

  for (let palindrome in obj) {
    if (obj[palindrome] > val) {val = obj[palindrome]; result = palindrome}
  }

  return result;

};

const test = longestPalindrome("My dad is a racecar athlete")
console.log(test);