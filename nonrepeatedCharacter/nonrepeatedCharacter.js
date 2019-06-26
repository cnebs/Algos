/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(str) {
  let obj = {};
  let char;

  for ( char of str ) { // str -> 'ABA'
    obj[ char ] = obj[ char ] +1 || 1; // obj -> { A:2, B:1 }
  };

  for ( char in str ) {
    if ( obj[str[char]] === 1 ) { return str[char] }; // At char position in string, if associated object key === 1, return char
  };

  return null; // else null
};


let trial1 = firstNonRepeatedCharacter('ABA'); // => 'B'
let trial2 = firstNonRepeatedCharacter('AACBDB'); // => 'C'

console.log(`Trial Result: ${trial2}`);