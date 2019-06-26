/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(str) {
  // TODO: your solution here


  let obj = {};
  let char;

  for ( char of str ) {
    obj[ char ] = obj[ char ] +1 || 1;
  }

  for ( char in str ) {
    if ( obj[str[char]] === 1 ) { return str[char] };
  }

  return null;

};


let trial1 = firstNonRepeatedCharacter('ABA'); // => 'B'
let trial2 = firstNonRepeatedCharacter('AACBDB'); // => 'C'

console.log(`Trial Result: ${trial2}`);