/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency 
 *  and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {

  let obj = {};
  let results = [];
  let char;

  for (char of string) {
    char in obj ? obj[char]++ : obj[char] = 1;
  }
  
  for (char in obj) {
    results.push([char, obj[char]]);
  }
  
  results.sort((a,b) => b[1] - a[1]);
  results.sort((a, b) => a[1] === b[1] && a[0] > b[0] ? 1 : 0)
  
  return results;

};


let charFreq = characterFrequency('miaaiaaippi');
console.log(charFreq);