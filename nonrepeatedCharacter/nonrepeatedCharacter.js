/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 /*
var firstNonRepeatedCharacter = function(str) {
  let obj = {};
  let char;

  for ( char of str ) { // str -> 'ABA'
    obj[ char ] = obj[ char ] +1 || 1; // obj -> { A:2, B:1 }
  };

  for ( char in str ) {
    if ( obj[str[char]] === 1 ) { return str[char] }; // For each char in str, if its obj key === 1: return first char value to match
  };

  return null; // else null
};
*/

const firstNonRepeatedCharacter = (str) => 

[...str].find(char => str.match(new RegExp(char, 'g')).length === 1);

// spread string to array -> 
// find will return char of string if it agrees with passed function -> 
// which uses regex to check entire string if that char is anywhere else ->
// and that the length of the match is only one to ignore side by side repeat ch  aars as a single regex match

// Tests
let trial3 = firstNonRepeatedCharacter('AABCDIOCBZODP') // => 'I'
let trial4 = firstNonRepeatedCharacter('AABB')
// Log
console.log(`Trial Result: '${trial3}'`);